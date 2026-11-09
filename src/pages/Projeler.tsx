import { useState } from 'react'
import { Link } from 'react-router'
import { C } from '@/constants'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'

import proj1Img from '@/imports/gen_proj_1.jpg'
import proj2Img from '@/imports/gen_proj_2.jpg'
import proj3Img from '@/imports/gen_proj_3.jpg'
import proj4Img from '@/imports/gen_proj_4.jpg'
import proj5Img from '@/imports/gen_proj_5.jpg'
import proj6Img from '@/imports/gen_proj_6.jpg'
import proj7Img from '@/imports/gen_proj_7.jpg'
import proj8Img from '@/imports/gen_proj_8.jpg'

const FILTERS = ['Tüm Projeler', 'Açık Hava', 'Bina Giydirme', 'Billboard', 'CLP', 'LED Ekran', 'Matbaa', 'Promosyon', 'Dijital']

const PROJECTS_HERO_IMAGE = proj1Img

const ALL_PROJECTS = [
  { slug: 'proje-1', client: 'SKYLAND İSTANBUL', type: 'Maslak Tower Cephe Giydirme', city: 'İstanbul', year: '2025', category: 'Bina Giydirme', img: proj1Img },
  { slug: 'proje-2', client: 'TURKCELL', type: 'Türkiye Geneli 5G Billboard Ağı', city: '81 İl Geneli', year: '2024', category: 'Billboard', img: proj2Img },
  { slug: 'proje-3', client: 'İLVİ AYAKKABI', type: 'Lüks Katalog & Ambalaj Üretimi', city: 'İstanbul', year: '2025', category: 'Matbaa', img: proj3Img },
  { slug: 'proje-4', client: 'LUFIAN EXECUTIVE', type: 'Kurumsal VIP Hediye Koleksiyonu', city: 'İstanbul', year: '2025', category: 'Promosyon', img: proj4Img },
  { slug: 'proje-5', client: 'ZORLU CENTER AVM', type: 'Dev 4K Dış Mekan LED Ekran', city: 'İstanbul', year: '2024', category: 'LED Ekran', img: proj5Img },
  { slug: 'proje-6', client: 'ANADOLU SİGORTA', type: 'Kentsel Raket (CLP) Durak Ağı', city: 'Ankara', year: '2025', category: 'CLP', img: proj6Img },
  { slug: 'proje-7', client: 'TOGG MOBİLİTE', type: 'Otoyol Dev Giantboard Totem', city: 'Kocaeli', year: '2025', category: 'Açık Hava', img: proj7Img },
  { slug: 'proje-8', client: 'TRENDYOL EXPRESS', type: 'Dinamik Dijital Reklam Tasarımları', city: 'İstanbul', year: '2026', category: 'Dijital', img: proj8Img },
]

function ProjectCard({ proj }: { proj: typeof ALL_PROJECTS[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link to={`/projeler/${proj.slug}`}
      className="block relative overflow-hidden"
      style={{ borderRadius: 4, transform: hovered ? 'translateY(-4px)' : 'none', transition: 'transform 0.3s ease' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ height: 280, overflow: 'hidden' }}>
        <img src={proj.img} alt={proj.type} className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }} />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-5 transition-all duration-300"
        style={{ background: hovered ? 'linear-gradient(to top, rgba(11,12,17,0.92), rgba(72,45,127,0.25) 60%, transparent)' : 'linear-gradient(to top, rgba(11,12,17,0.82), transparent 60%)' }}>
        <div className="transition-transform duration-300" style={{ transform: hovered ? 'translateY(-6px)' : 'none' }}>
          <span className="block text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: C.purpleAccent, letterSpacing: '0.12em' }}>{proj.category}</span>
          <h3 className="font-display font-bold text-white mb-1" style={{ fontSize: 17 }}>{proj.client}</h3>
          <p style={{ color: C.lightText, fontSize: 13 }}>{proj.type} — {proj.city}</p>
        </div>
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
          style={{ background: hovered ? C.purpleAccent : 'rgba(255,255,255,0.1)', opacity: hovered ? 1 : 0, transform: hovered ? 'scale(1)' : 'scale(0.7)' }}>
          <svg viewBox="0 0 16 16" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M3 13L13 3M13 3H6M13 3v7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default function Projeler() {
  const [active, setActive] = useState('Tüm Projeler')
  const filtered = active === 'Tüm Projeler' ? ALL_PROJECTS : ALL_PROJECTS.filter((p) => p.category === active)

  return (
    <div style={{ background: C.dark }}>
      <PageHero
        label="REFERANS PROJELERİMİZ"
        title="Güçlü Markalar İçin"
        titleAccent="İkonik Çözümler"
        desc="Açık havadan matbaaya, promosyondan dijitale kadar Türkiye'nin lider markaları için hayata geçirdiğimiz lansman ve uygulama projelerimiz."
        bgImage={PROJECTS_HERO_IMAGE}
        breadcrumb={[{ label: 'Projeler' }]}
      />

      {/* Filter bar */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '0 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }} className="flex flex-wrap gap-1 py-4">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200"
              style={{
                background: active === f ? `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})` : 'transparent',
                color: active === f ? '#fff' : C.muted,
                border: `1px solid ${active === f ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
                minHeight: 40,
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section style={{ padding: '60px 24px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((p) => <ProjectCard key={p.slug} proj={p} />)}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p style={{ color: C.muted, fontSize: 16 }}>Bu kategoride henüz proje eklenmemiştir.</p>
            </div>
          )}
        </div>
      </section>

      <CTABanner title="Sizi de Projelerimize Katalım." primaryLabel="TEKLİF AL" />
    </div>
  )
}
