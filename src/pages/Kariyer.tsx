import { useState } from 'react'
import { C } from '@/constants'
import kariyerHeroImg from '@/imports/ChatGPT_Image_23_Tem_2026_15_03_44.png'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'

const DEPTS = ['Tümü', 'Kreatif', 'Üretim', 'Yazılım', 'Saha', 'Satış']

const OPEN_POSITIONS = [
  { title: 'Kıdemli Grafik Tasarımcı (Baskı & Açık Hava)', dept: 'Kreatif', type: 'Tam Zamanlı', city: 'İstanbul', desc: 'Açık hava reklamcılığı ve kurumsal matbaa projelerinde deneyimli grafik tasarımcı.' },
  { title: 'Frontend & Web Geliştirme Uzmanı', dept: 'Yazılım', type: 'Tam Zamanlı', city: 'İstanbul', desc: 'Kurumsal web projeleri ve dijital arayüz geliştirmede deneyimli yazılım uzmanı.' },
  { title: 'Kurumsal Müşteri İlişkileri Yöneticisi', dept: 'Satış', type: 'Tam Zamanlı', city: 'İstanbul', desc: 'Kurumsal müşteri portföyünü ve teklif süreçlerini yönetecek satış uzmanı.' },
  { title: 'Saha Uygulama ve Montaj Sorumlusu', dept: 'Saha', type: 'Tam Zamanlı', city: 'İstanbul', desc: 'Açık hava reklam üniteleri ve cephe giydirme operasyonlarında görev alacak saha uzmanı.' },
]

const CULTURE = [
  { icon: '🎯', title: 'Hedef Odaklı', desc: 'Sonuç üreten ve ölçülebilir katkı sağlayan bir çalışma kültürü.' },
  { icon: '🤝', title: 'Takım Ruhu', desc: 'Birbirini destekleyen, ortak hedeflere yürüyen bir ekip.' },
  { icon: '📈', title: 'Sürekli Gelişim', desc: 'Eğitim ve gelişim imkânlarıyla her zaman daha iyiye.' },
  { icon: '🌍', title: 'Türkiye Geneli', desc: 'Geniş coğrafyada proje deneyimi ve saha bilgisi.' },
]

export default function Kariyer() {
  const [activeFilter, setActiveFilter] = useState('Tümü')
  const [form, setForm] = useState({ name: '', email: '', phone: '', dept: '', message: '' })

  const filtered = activeFilter === 'Tümü' ? OPEN_POSITIONS : OPEN_POSITIONS.filter((p) => p.dept === activeFilter)

  return (
    <div style={{ background: '#fff' }}>
      <PageHero
        label="KARİYER"
        title="Mütekavvim'de"
        titleAccent="Kariyer"
        desc="Büyüyen ekibimize katılın. Tasarım, üretim, yazılım ve saha uygulamasında kariyer fırsatları."
        bgImage={kariyerHeroImg}
        bgColor={C.dark}
        breadcrumb={[{ label: 'Kariyer' }]}
      />

      {/* Culture */}
      <section style={{ padding: '88px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="text-center mb-14">
            <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleMid, letterSpacing: '0.2em' }}>ÇALIŞMA KÜLTÜRÜ</span>
            <h2 className="font-display font-extrabold" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: C.dark }}>Neden Mütekavvim?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CULTURE.map((item) => (
              <div key={item.title} className="p-7" style={{ background: C.offwhite, borderRadius: 4, border: '1px solid rgba(0,0,0,0.06)' }}>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-display font-bold mb-2" style={{ fontSize: 17, color: C.dark }}>{item.title}</h4>
                <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section style={{ background: C.offwhite, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-5">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: C.purpleMid, letterSpacing: '0.2em' }}>AÇIK POZİSYONLAR</span>
              <h2 className="font-display font-extrabold" style={{ fontSize: 'clamp(26px, 3vw, 38px)', color: C.dark }}>Şu An Arıyoruz</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {DEPTS.map((d) => (
                <button key={d} onClick={() => setActiveFilter(d)}
                  className="px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200"
                  style={{ background: activeFilter === d ? `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})` : '#fff', color: activeFilter === d ? '#fff' : C.gray, border: `1px solid ${activeFilter === d ? 'transparent' : 'rgba(0,0,0,0.1)'}`, minHeight: 40 }}>
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 mb-4">
            {filtered.map((pos, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 gap-4"
                style={{ background: '#fff', borderRadius: 4, border: '1px solid rgba(0,0,0,0.07)' }}>
                <div>
                  <div className="font-display font-bold mb-1" style={{ fontSize: 17, color: C.dark }}>{pos.title}</div>
                  <p className="mb-2" style={{ fontSize: 13, color: C.gray }}>{pos.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-xs px-2 py-1 rounded-sm" style={{ background: `${C.purpleAccent}18`, color: C.purpleAccent }}>{pos.dept}</span>
                    <span className="text-xs" style={{ color: C.muted }}>{pos.type} · {pos.city}</span>
                  </div>
                </div>
                <a href="#apply-form"
                  className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-sm font-semibold text-sm text-white transition-opacity hover:opacity-85"
                  style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, minHeight: 44, fontFamily: 'var(--font-display)', letterSpacing: '0.06em' }}>
                  BAŞVUR
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply-form" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div className="text-center mb-12">
            <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleMid, letterSpacing: '0.2em' }}>BAŞVURU FORMU</span>
            <h2 className="font-display font-extrabold" style={{ fontSize: 'clamp(26px, 3vw, 38px)', color: C.dark }}>Başvurunuzu Gönderin</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { key: 'name', label: 'Ad Soyad', type: 'text', placeholder: 'Adınız ve soyadınız' },
              { key: 'email', label: 'E-posta', type: 'email', placeholder: 'ornek@email.com' },
              { key: 'phone', label: 'Telefon', type: 'tel', placeholder: '+90 5XX XXX XX XX' },
              { key: 'dept', label: 'İlgilendiğiniz Departman', type: 'text', placeholder: 'Kreatif, Yazılım...' },
            ].map((field) => (
              <div key={field.key} className={field.key === 'message' ? 'sm:col-span-2' : ''}>
                <label className="block text-sm font-medium mb-2" style={{ color: C.dark }}>{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full px-4 py-3 rounded-sm transition-colors"
                  style={{ background: C.offwhite, border: '1px solid rgba(0,0,0,0.1)', color: C.dark, fontSize: 15, minHeight: 50, outline: 'none' }}
                />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-2" style={{ color: C.dark }}>Kendinizi Tanıtın</label>
              <textarea
                rows={4}
                placeholder="Deneyimlerinizden, yeteneklerinizden ve neden Mütekavvim'e başvurduğunuzdan bahsedin."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-sm transition-colors resize-none"
                style={{ background: C.offwhite, border: '1px solid rgba(0,0,0,0.1)', color: C.dark, fontSize: 15 }}
              />
            </div>
            <div className="sm:col-span-2">
              <button
                className="w-full flex items-center justify-center rounded-sm font-semibold text-white transition-opacity hover:opacity-85"
                style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, padding: '16px 32px', minHeight: 56, fontFamily: 'var(--font-display)', letterSpacing: '0.1em', fontSize: 15 }}>
                BAŞVURUYU GÖNDER
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Hemen Başvurun." desc="Uygun pozisyon bulamadınız mı? Açık başvuru gönderin, değerlendirelim." primaryLabel="AÇIK BAŞVURU" />
    </div>
  )
}
