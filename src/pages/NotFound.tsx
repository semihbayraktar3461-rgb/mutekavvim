import { Link } from 'react-router'
import { C } from '@/constants'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: C.dark }}>
      <div className="font-display font-extrabold mb-4"
        style={{ fontSize: 'clamp(96px, 20vw, 180px)', lineHeight: 1, background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        404
      </div>
      <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
        Sayfa Bulunamadı
      </h1>
      <p className="mb-10 mx-auto" style={{ maxWidth: 400, fontSize: 16, color: C.lightText, lineHeight: 1.7 }}>
        Aradığınız sayfa taşınmış, silinmiş ya da hiç var olmamış olabilir.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/"
          className="inline-flex items-center justify-center px-8 py-4 rounded-sm font-semibold text-white transition-opacity hover:opacity-85"
          style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, minHeight: 52, fontFamily: 'var(--font-display)', letterSpacing: '0.1em', fontSize: 14 }}>
          ANA SAYFAYA DÖN
        </Link>
        <Link to="/iletisim"
          className="inline-flex items-center justify-center px-8 py-4 rounded-sm font-semibold transition-opacity hover:opacity-75"
          style={{ border: '1px solid rgba(255,255,255,0.2)', color: C.lightText, minHeight: 52, fontFamily: 'var(--font-display)', letterSpacing: '0.1em', fontSize: 14 }}>
          İLETİŞİM
        </Link>
      </div>
    </div>
  )
}
