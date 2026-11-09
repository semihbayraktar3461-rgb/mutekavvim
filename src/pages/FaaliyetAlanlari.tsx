import { Link } from 'react-router'
import { C, MEGA_MENU } from '@/constants'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'

const ICONS: Record<string, string> = {
  'acik-hava': 'M3 3h18v13H3zM8 21h8M12 16v5',
  'promosyon': 'M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2',
  'matbaa': 'M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6z',
  'dijital': 'M2 3h20v14H2zM8 21h8M12 17v4',
  'yazilim': 'M8 9l3 3-3 3M13 15h3M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2z',
  'insaat': 'M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M8 21V11h8v10',
}

import heroVisualImg from '@/imports/ChatGPT_Image_23_Tem_2026_15_03_44.png'
import acikHavaImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__1_.png'
import promosyonImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__2_.png'
import matbaaImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__3_.png'
import dijitalImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__4_.png'
import yazilimImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__5_.png'
import insaatImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__6_.png'

const FAALIYET_HERO_IMAGE = heroVisualImg

const VISUALS: Record<string, { src: string; alt: string }> = {
  'acik-hava': {
    src: acikHavaImg,
    alt: 'Şehir içinde konumlanmış açık hava reklam panosu',
  },
  'promosyon': {
    src: promosyonImg,
    alt: 'Markalamaya uygun kurumsal promosyon ürünleri',
  },
  'matbaa': {
    src: matbaaImg,
    alt: 'Profesyonel baskı makinesi ve üretim süreci',
  },
  'dijital': {
    src: dijitalImg,
    alt: 'Dijital tasarım ve pazarlama için kullanılan çalışma ekranı',
  },
  'yazilim': {
    src: yazilimImg,
    alt: 'Yazılım geliştirme için hazırlanmış bilgisayar çalışma alanı',
  },
  'insaat': {
    src: insaatImg,
    alt: 'Yapımı süren modern ticari yapı ve vinç',
  },
}

export default function FaaliyetAlanlari() {
  return (
    <div style={{ background: C.offwhite }}>
      <PageHero
        label="FAALİYET ALANLARIMIZ"
        title="Markanız İçin"
        titleAccent="Uçtan Uca Çözümler"
        desc="Altı ana faaliyet alanında tasarım, üretim ve uygulamadan oluşan bütüncül bir hizmet sunuyoruz."
        bgImage={FAALIYET_HERO_IMAGE}
        sectionStyle={{ marginTop: 75 }}
        imageStyle={{ opacity: 0.42, objectFit: 'cover' }}
        breadcrumb={[{ label: 'Faaliyet Alanları' }]}
      />

      <section style={{ padding: '88px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEGA_MENU.map((cat) => (
              <div
                key={cat.id}
                className="group overflow-hidden"
                style={{ background: '#fff', borderRadius: 4, border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
              >
                {/* Image */}
                <div className="overflow-hidden" style={{ height: 200 }}>
                  <img
                    src={VISUALS[cat.id].src}
                    alt={VISUALS[cat.id].alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})` }}>
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d={ICONS[cat.id]} />
                      </svg>
                    </div>
                    <Link to={cat.path} className="font-display font-bold hover:text-purple-700 transition-colors"
                      style={{ fontSize: 18, color: C.dark }}>
                      {cat.title}
                    </Link>
                  </div>

                  <p className="mb-5" style={{ fontSize: 14, color: C.gray, lineHeight: 1.7 }}>{cat.desc}</p>

                  {/* Sub-links */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-5">
                    {cat.items.slice(0, 6).map((item) => (
                      <Link key={item.path} to={item.path}
                        className="text-xs transition-colors hover:text-purple-600 flex items-center gap-1"
                        style={{ color: C.muted }}>
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: C.purpleAccent }} />
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <Link to={cat.path}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors hover:text-purple-700"
                    style={{ color: C.purpleMid, letterSpacing: '0.14em' }}>
                    DETAYLI İNCELE
                    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
