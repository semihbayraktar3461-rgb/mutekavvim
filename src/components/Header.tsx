import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { C, MEGA_MENU } from '@/constants'
import { logoMark } from '@/assets'

const NAV = [
  { label: 'Ana Sayfa', path: '/' },
  { label: 'Faaliyet Alanları', path: '/faaliyet-alanlari', hasMega: true },
  { label: 'Projeler', path: '/projeler' },
  { label: 'Kurumsal', path: '/hakkimizda' },
  { label: 'Blog', path: '/blog' },
  { label: 'İletişim', path: '/iletisim' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const megaRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openMega = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }, [])

  const closeMega = useCallback(() => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [location.pathname])

  const transparent = isHome && !scrolled

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: 84,
          background: transparent ? 'transparent' : 'rgba(11,12,17,0.95)',
          backdropFilter: transparent ? 'none' : 'blur(16px)',
          borderBottom: transparent ? '1px solid transparent' : '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          className="h-full flex items-center justify-between"
          style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={logoMark}
              alt="MÜTEKAVVİM"
              style={{ height: 38, width: 'auto', filter: 'brightness(0) invert(1)', objectFit: 'contain' }}
            />
            <span
              className="hidden sm:block font-display font-bold text-white text-xs tracking-widest"
              style={{ letterSpacing: '0.2em' }}
            >
              MÜTEKAVVİM
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => {
              const active = location.pathname === item.path ||
                (item.path !== '/' && location.pathname.startsWith(item.path))
              if (item.hasMega) {
                return (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={openMega}
                    onMouseLeave={closeMega}
                    ref={megaRef}
                  >
                    <button
                      className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 relative"
                      style={{ color: active ? '#FFF' : C.lightText, fontFamily: 'var(--font-body)' }}
                      onClick={() => navigate('/faaliyet-alanlari')}
                    >
                      {item.label}
                      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 6l4 4 4-4" />
                      </svg>
                      {active && (
                        <span className="absolute -bottom-5 left-0 right-0 h-px" style={{ background: C.purpleAccent }} />
                      )}
                    </button>
                  </div>
                )
              }
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm font-medium transition-colors duration-200 relative"
                  style={{ color: active ? '#FFF' : C.lightText, fontFamily: 'var(--font-body)' }}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-5 left-0 right-0 h-px" style={{ background: C.purpleAccent }} />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/iletisim"
              className="hidden sm:flex items-center justify-center rounded-sm font-semibold text-sm text-white transition-opacity duration-200 hover:opacity-85"
              style={{
                background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`,
                padding: '11px 22px',
                minHeight: 48,
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.08em',
              }}
            >
              TEKLİF AL
            </Link>
            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="block w-6 h-0.5 bg-white transition-all duration-300"
                style={{ transform: mobileOpen ? 'translateY(5px) rotate(45deg)' : 'none' }} />
              <span className="block w-6 h-0.5 bg-white transition-all duration-300"
                style={{ opacity: mobileOpen ? 0 : 1 }} />
              <span className="block w-6 h-0.5 bg-white transition-all duration-300"
                style={{ transform: mobileOpen ? 'translateY(-5px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        {megaOpen && (
          <div
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
            className="absolute left-0 right-0 z-50"
            style={{
              top: 84,
              background: 'rgba(11,12,17,0.98)',
              backdropFilter: 'blur(24px)',
              borderBottom: `1px solid rgba(255,255,255,0.08)`,
              boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
            }}
          >
            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 24px 32px' }}>
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-8">
                {MEGA_MENU.map((cat) => (
                  <div key={cat.id}>
                    <Link
                      to={cat.path}
                      className="block mb-4 font-display font-bold text-white text-sm hover:text-purple-400 transition-colors"
                      style={{ fontSize: 13, letterSpacing: '0.04em' }}
                    >
                      {cat.title}
                      <div className="w-6 h-px mt-1.5" style={{ background: C.purpleAccent }} />
                    </Link>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            className="text-xs transition-colors duration-150 hover:text-white flex items-center gap-1 group"
                            style={{ color: C.muted, lineHeight: 1.6 }}
                          >
                            <span className="w-0 group-hover:w-2 h-px transition-all duration-200"
                              style={{ background: C.purpleAccent }} />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {/* Bottom CTA strip */}
              <div
                className="mt-8 pt-6 flex items-center justify-between"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <span style={{ fontSize: 13, color: C.muted }}>
                  Hangi hizmetin size uygun olduğundan emin değil misiniz?
                </span>
                <Link
                  to="/teklif-al"
                  className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white"
                  style={{ color: C.purpleAccent, fontFamily: 'var(--font-display)', letterSpacing: '0.06em' }}
                >
                  Ücretsiz Danışmanlık Alın
                  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      <div
        className="lg:hidden fixed inset-0 z-40 overflow-y-auto transition-all duration-300"
        style={{
          background: 'rgba(11,12,17,0.99)',
          backdropFilter: 'blur(20px)',
          pointerEvents: mobileOpen ? 'auto' : 'none',
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        <div className="flex flex-col pt-24 pb-10 px-6 min-h-full">
          {NAV.map((item) => {
            if (item.hasMega) {
              return (
                <div key={item.path} className="border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  <button
                    className="w-full flex items-center justify-between py-4 text-left"
                    onClick={() => setMobileExpanded(mobileExpanded === item.path ? null : item.path)}
                  >
                    <span className="font-display font-bold text-white text-lg">{item.label}</span>
                    <svg viewBox="0 0 16 16" className="w-5 h-5 text-white transition-transform"
                      style={{ transform: mobileExpanded === item.path ? 'rotate(180deg)' : 'none' }}
                      fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </button>
                  {mobileExpanded === item.path && (
                    <div className="pb-4">
                      {MEGA_MENU.map((cat) => (
                        <div key={cat.id} className="mb-4">
                          <Link
                            to={cat.path}
                            className="block text-sm font-bold mb-2"
                            style={{ color: C.purpleAccent }}
                          >
                            {cat.title}
                          </Link>
                          {cat.items.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className="block py-1 text-sm"
                              style={{ color: C.lightText, paddingLeft: 12 }}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            }
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center py-4 font-display font-bold text-white text-lg border-b"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              >
                {item.label}
              </Link>
            )
          })}

          <Link
            to="/teklif-al"
            className="mt-8 flex items-center justify-center rounded-sm font-semibold text-white"
            style={{
              background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`,
              padding: '18px 32px',
              minHeight: 56,
              fontSize: 16,
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.1em',
            }}
          >
            TEKLİF AL
          </Link>
        </div>
      </div>
    </>
  )
}
