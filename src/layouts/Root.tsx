import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getRouteMeta, SITE_URL } from '@/seo'

function ScrollAndMetaUpdater() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const meta = getRouteMeta(pathname)
    document.title = meta.title
    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute('content', content)
    }
    setMeta('meta[name="description"]', meta.description)
    setMeta('meta[property="og:title"]', meta.title)
    setMeta('meta[property="og:description"]', meta.description)
    setMeta('meta[property="og:url"]', `${SITE_URL}${pathname === '/' ? '' : pathname}`)
    setMeta('meta[name="twitter:title"]', meta.title)
    setMeta('meta[name="twitter:description"]', meta.description)
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', `${SITE_URL}${pathname === '/' ? '' : pathname}`)
  }, [pathname])
  return null
}

export default function Root() {
  return (
    <>
      <ScrollAndMetaUpdater />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
