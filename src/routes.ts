import { createBrowserRouter, type RouteObject } from 'react-router'
import Root from '@/layouts/Root'
import Home from '@/pages/Home'
import FaaliyetAlanlari from '@/pages/FaaliyetAlanlari'
import AcikHava from '@/pages/AcikHava'
import AcikHavaDetail from '@/pages/AcikHavaDetail'
import Promosyon from '@/pages/Promosyon'
import PromosyonDetail from '@/pages/PromosyonDetail'
import Matbaa from '@/pages/Matbaa'
import MatbaaDetail from '@/pages/MatbaaDetail'
import Dijital from '@/pages/Dijital'
import Yazilim from '@/pages/Yazilim'
import Insaat from '@/pages/Insaat'
import Projeler from '@/pages/Projeler'
import ProjeDetail from '@/pages/ProjeDetail'
import Hakkimizda from '@/pages/Hakkimizda'
import Kariyer from '@/pages/Kariyer'
import Blog from '@/pages/Blog'
import BlogDetail from '@/pages/BlogDetail'
import Iletisim from '@/pages/Iletisim'
import TeklifAl from '@/pages/TeklifAl'
import NotFound from '@/pages/NotFound'
import Legal from '@/pages/Legal'

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'faaliyet-alanlari', Component: FaaliyetAlanlari },

      { path: 'acik-hava-reklamciligi', Component: AcikHava },
      { path: 'acik-hava-reklamciligi/:slug', Component: AcikHavaDetail },

      { path: 'promosyon', Component: Promosyon },
      { path: 'promosyon/:slug', Component: PromosyonDetail },

      { path: 'matbaa', Component: Matbaa },
      { path: 'matbaa/:slug', Component: MatbaaDetail },

      { path: 'dijital', Component: Dijital },
      { path: 'dijital/:slug', Component: Dijital },

      { path: 'yazilim', Component: Yazilim },
      { path: 'yazilim/:slug', Component: Yazilim },

      { path: 'insaat', Component: Insaat },
      { path: 'insaat/:slug', Component: Insaat },

      { path: 'projeler', Component: Projeler },
      { path: 'projeler/:slug', Component: ProjeDetail },

      { path: 'hakkimizda', Component: Hakkimizda },
      { path: 'kariyer', Component: Kariyer },

      { path: 'blog', Component: Blog },
      { path: 'blog/:slug', Component: BlogDetail },

      { path: 'iletisim', Component: Iletisim },
      { path: 'teklif-al', Component: TeklifAl },
      { path: 'kvkk-aydinlatma-metni', Component: Legal },
      { path: 'gizlilik-politikasi', Component: Legal },
      { path: 'cerez-politikasi', Component: Legal },

      { path: '*', Component: NotFound },
    ],
  },
]

export const router = typeof window !== 'undefined' ? createBrowserRouter(routes) : null!
