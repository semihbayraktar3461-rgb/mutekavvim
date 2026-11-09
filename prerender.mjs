import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, 'dist')
const ssrDir = path.resolve(__dirname, 'dist-ssr')

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
const ssrEntryPath = pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
const { render, PRERENDER_ROUTES, SITE_URL } = await import(ssrEntryPath)

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

let count = 0
for (const route of PRERENDER_ROUTES) {
  const { html, meta } = render(route)
  const fullUrl = `${SITE_URL}${route === '/' ? '' : route}`
  const ogType = meta.ogType || 'website'

  let pageHtml = template
    .replace(/<title>.*?<\/title>/s, `<title>${escapeAttr(meta.title)}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    )
    .replace(
      /<link rel="canonical" href=".*?" \/>/,
      `<link rel="canonical" href="${escapeAttr(fullUrl)}" />`,
    )
    .replace(
      /<meta property="og:type" content=".*?" \/>/,
      `<meta property="og:type" content="${escapeAttr(ogType)}" />`,
    )
    .replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    )
    .replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    )
    .replace(
      /<meta property="og:url" content=".*?" \/>/,
      `<meta property="og:url" content="${escapeAttr(fullUrl)}" />`,
    )
    .replace(
      /<meta name="twitter:title" content=".*?" \/>/,
      `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
    )
    .replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    )
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

  const outFile =
    route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.replace(/^\/+/, ''), 'index.html')

  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, pageHtml, 'utf-8')
  count++
}

// SPA fallback copy
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '200.html'))

// Generate sitemap.xml
const today = new Date().toISOString().split('T')[0]
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PRERENDER_ROUTES.map((route) => {
  const loc = `${SITE_URL}${route === '/' ? '' : route}`
  const priority = route === '/' ? '1.0' : route.split('/').length === 2 ? '0.9' : '0.8'
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
}).join('\n')}
</urlset>
`
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8')

// Generate robots.txt with Sitemap link
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8')

// Clean up temporary SSR build folder
fs.rmSync(ssrDir, { recursive: true, force: true })

console.log(`✓ SSG Prerendered ${count} static HTML pages + sitemap.xml + robots.txt`)
