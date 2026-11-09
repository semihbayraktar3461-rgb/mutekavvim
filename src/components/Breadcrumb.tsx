import { Link } from 'react-router'
import { C } from '@/constants'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  dark?: boolean
}

export default function Breadcrumb({ items, dark = false }: BreadcrumbProps) {
  const textColor = dark ? C.muted : 'rgba(255,255,255,0.55)'
  const activeColor = dark ? C.gray : 'rgba(255,255,255,0.85)'

  return (
    <nav className="flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
      <Link to="/" className="text-xs transition-colors hover:text-white" style={{ color: textColor }}>
        Ana Sayfa
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <svg viewBox="0 0 16 16" className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2"
            style={{ color: textColor }}>
            <path d="M6 4l4 4-4 4" />
          </svg>
          {item.path ? (
            <Link to={item.path} className="text-xs transition-colors hover:text-white" style={{ color: textColor }}>
              {item.label}
            </Link>
          ) : (
            <span className="text-xs font-medium" style={{ color: activeColor }}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
