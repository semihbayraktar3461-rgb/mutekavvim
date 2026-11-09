import type { CSSProperties } from 'react'
import { C } from '@/constants'
import Breadcrumb from '@/components/Breadcrumb'

interface PageHeroProps {
  label?: string
  title: string
  titleAccent?: string
  desc?: string
  bgImage?: string
  bgColor?: string
  breadcrumb?: Array<{ label: string; path?: string }>
  children?: React.ReactNode
  sectionStyle?: CSSProperties
  imageStyle?: CSSProperties
}

export default function PageHero({
  label,
  title,
  titleAccent,
  desc,
  bgImage,
  bgColor = C.dark,
  breadcrumb,
  children,
  sectionStyle,
  imageStyle,
}: PageHeroProps) {
  return (
    <section
      className="relative flex flex-col justify-end"
      style={{
        minHeight: 420,
        background: bgColor,
        paddingTop: 84,
        ...sectionStyle,
      }}
    >
      {bgImage && (
        <>
          <div className="absolute inset-0 overflow-hidden">
            <img src={bgImage} alt="" aria-hidden className="w-full h-full object-cover object-center" style={{ opacity: 0.3, ...imageStyle }} />
          </div>
          <div className="absolute inset-0"
            style={{ background: `linear-gradient(to top, ${bgColor} 30%, rgba(11,12,17,0.7) 100%)` }} />
        </>
      )}

      <div className="relative" style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 24px 56px', width: '100%' }}>
        {breadcrumb && (
          <div className="mb-6">
            <Breadcrumb items={breadcrumb} />
          </div>
        )}

        {label && (
          <div className="flex items-center gap-2 mb-5">
            <span className="h-px w-8" style={{ background: C.purpleAccent }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.purpleAccent, letterSpacing: '0.2em' }}>
              {label}
            </span>
          </div>
        )}

        <h1
          className="font-display font-extrabold text-white leading-tight mb-4"
          style={{ fontSize: 'clamp(32px, 5vw, 64px)', maxWidth: 760, lineHeight: 1.07 }}
        >
          {title}
          {titleAccent && <span style={{ color: C.purpleAccent }}> {titleAccent}</span>}
        </h1>

        {desc && (
          <p className="max-w-xl" style={{ fontSize: 17, color: C.lightText, lineHeight: 1.7 }}>
            {desc}
          </p>
        )}

        {children}
      </div>
    </section>
  )
}
