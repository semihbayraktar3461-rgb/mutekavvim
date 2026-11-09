import { Link } from 'react-router'
import { C } from '@/constants'

interface CTABannerProps {
  title?: string
  desc?: string
  primaryLabel?: string
  primaryPath?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTABanner({
  title = 'Markanızı Birlikte Zirveye Taşıyalım.',
  desc = 'Projenizi anlatın, size en uygun çözümü birlikte planlayalım.',
  primaryLabel = 'ÜCRETSİZ TEKLİF AL',
  primaryPath = '/teklif-al',
  secondaryLabel = "WHATSAPP'TAN YAZ",
  secondaryHref = 'https://wa.me/905445091544',
}: CTABannerProps) {
  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${C.purpleDeep} 0%, ${C.purpleMid} 50%, ${C.purpleAccent} 100%)`,
        padding: '88px 24px',
      }}
    >
      <div className="text-center" style={{ maxWidth: 680, margin: '0 auto' }}>
        <h2
          className="font-display font-extrabold text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.18, whiteSpace: 'pre-line' }}
        >
          {title}
        </h2>
        <p className="mb-10" style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
          {desc}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={primaryPath}
            className="flex items-center justify-center rounded-sm font-semibold transition-all duration-200 hover:bg-white/90"
            style={{ background: '#fff', color: C.purpleDeep, padding: '16px 36px', minHeight: 54, fontSize: 14, letterSpacing: '0.1em', fontFamily: 'var(--font-display)' }}
          >
            {primaryLabel}
          </Link>
          <a
            href={secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200 hover:bg-white/10"
            style={{ border: '1px solid rgba(255,255,255,0.5)', color: '#fff', padding: '16px 36px', minHeight: 54, fontSize: 14, letterSpacing: '0.1em', fontFamily: 'var(--font-display)' }}
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
