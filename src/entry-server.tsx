import React from 'react'
import { renderToString } from 'react-dom/server'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { routes } from './routes'
import { getRouteMeta, PRERENDER_ROUTES, SITE_URL } from './seo'

export { PRERENDER_ROUTES, SITE_URL }

export function render(url: string) {
  const router = createMemoryRouter(routes, {
    initialEntries: [url],
  })
  const html = renderToString(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
  const meta = getRouteMeta(url)
  return { html, meta }
}
