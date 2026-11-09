import { useState } from 'react'
import { C } from '@/constants'

interface FAQItem {
  q: string
  a: string
}

export default function FAQAccordion({ items, dark = false }: { items: FAQItem[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(null)
  const bg = dark ? C.card : '#fff'
  const border = dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)'
  const titleColor = dark ? '#fff' : C.dark
  const bodyColor = dark ? C.lightText : C.gray

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="overflow-hidden"
          style={{ background: bg, border: `1px solid ${border}`, borderRadius: 4 }}
        >
          <button
            className="w-full flex items-center justify-between p-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-display font-semibold pr-4" style={{ color: titleColor, fontSize: 16 }}>
              {item.q}
            </span>
            <span
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                background: open === i ? `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})` : 'transparent',
                border: `1px solid ${open === i ? 'transparent' : C.muted}`,
              }}
            >
              <svg viewBox="0 0 16 16" className="w-4 h-4 text-white transition-transform"
                style={{ transform: open === i ? 'rotate(180deg)' : 'none' }}
                fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6l4 4 4-4" />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-5" style={{ color: bodyColor, fontSize: 15, lineHeight: 1.75 }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
