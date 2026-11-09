import { Link } from 'react-router'
import { C } from '@/constants'
import { logoMark } from '@/assets'

export default function Footer() {
  return (
    <footer style={{ background: '#080910', padding: '72px 24px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoMark}
                alt="MÜTEKAVVİM"
                style={{ height: 34, width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.9 }}
              />
              <span className="font-display font-bold text-white text-xs tracking-widest" style={{ letterSpacing: '0.2em' }}>
                MÜTEKAVVİM
              </span>
            </div>
            <p className="mb-5" style={{ fontSize: 14, color: C.muted, lineHeight: 1.7 }}>
              Tasarımdan üretime, baskıdan saha uygulamasına kadar markanızın görünürlüğünü yönetiyoruz.
            </p>
            <div className="flex gap-2">
              {[
                { name: 'instagram', href: 'https://www.instagram.com/mutekavvim/', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { name: 'linkedin', href: 'https://www.linkedin.com/company/mutekavvim/', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
              ].map((soc) => (
                <a key={soc.name} href={soc.href} target="_blank" rel="noreferrer" aria-label={soc.name}
                  className="w-9 h-9 rounded-sm flex items-center justify-center transition-colors duration-200 hover:bg-purple-700"
                  style={{ background: C.elevated }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-gray-400">
                    <path d={soc.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h5 className="font-display font-bold mb-5 text-white text-xs uppercase tracking-widest" style={{ letterSpacing: '0.16em' }}>
              Faaliyet Alanları
            </h5>
            {[
              { label: 'Açık Hava Reklamcılığı', path: '/acik-hava-reklamciligi' },
              { label: 'Matbaa ve Baskı', path: '/matbaa' },
              { label: 'Promosyon Ürünleri', path: '/promosyon' },
              { label: 'Dijital Çözümler', path: '/dijital' },
              { label: 'Yazılım', path: '/yazilim' },
              { label: 'İnşaat', path: '/insaat' },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="block mb-2.5 transition-colors duration-200 hover:text-white"
                style={{ fontSize: 14, color: C.muted }}>{l.label}</Link>
            ))}
          </div>

          {/* Kurumsal */}
          <div>
            <h5 className="font-display font-bold mb-5 text-white text-xs uppercase tracking-widest" style={{ letterSpacing: '0.16em' }}>
              Kurumsal
            </h5>
            {[
              { label: 'Hakkımızda', path: '/hakkimizda' },
              { label: 'Projeler', path: '/projeler' },
              { label: 'Blog', path: '/blog' },
              { label: 'Kariyer', path: '/kariyer' },
              { label: 'İletişim', path: '/iletisim' },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="block mb-2.5 transition-colors duration-200 hover:text-white"
                style={{ fontSize: 14, color: C.muted }}>{l.label}</Link>
            ))}
          </div>

          {/* İletişim */}
          <div>
            <h5 className="font-display font-bold mb-5 text-white text-xs uppercase tracking-widest" style={{ letterSpacing: '0.16em' }}>
              İletişim
            </h5>
            <div className="space-y-3">
              {[
                { label: '+90 212 916 23 44', sub: 'Telefon' },
                { label: 'info@mutekavvim.com', sub: 'E-posta' },
                { label: 'Fulya Mah. Mevlüt Pehlivan Sk. Erdoğanlar İş Hanı No:14 K:3 D:7, Şişli / İstanbul', sub: 'Ofis' },
                { label: 'Pazartesi - Cuma / 09:00 - 18:00', sub: 'Çalışma Saatleri' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-xs mb-0.5" style={{ color: C.muted, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {item.sub}
                  </div>
                  <div style={{ fontSize: 14, color: C.lightText }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hızlı Teklif */}
          <div>
            <h5 className="font-display font-bold mb-5 text-white text-xs uppercase tracking-widest" style={{ letterSpacing: '0.16em' }}>
              Hızlı Teklif
            </h5>
            <p className="mb-5" style={{ fontSize: 14, color: C.muted, lineHeight: 1.7 }}>
              Projenizi kısaca anlatın, 24 saat içinde size dönelim.
            </p>
            <Link
              to="/teklif-al"
              className="inline-flex items-center gap-2 rounded-sm font-semibold text-sm text-white transition-opacity duration-200 hover:opacity-80"
              style={{
                background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`,
                padding: '12px 20px',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.08em',
                minHeight: 48,
              }}
            >
              TEKLİF FORMU
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontSize: 13, color: C.muted }}>© 2026 Mütekavvim. Tüm hakları saklıdır.</p>
          <div className="flex flex-wrap gap-5 justify-center">
            {[
              { label: 'KVKK Aydınlatma Metni', path: '/kvkk-aydinlatma-metni' },
              { label: 'Gizlilik Politikası', path: '/gizlilik-politikasi' },
              { label: 'Çerez Politikası', path: '/cerez-politikasi' },
            ].map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-white transition-colors duration-200"
                style={{ fontSize: 13, color: C.muted }}>{item.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
