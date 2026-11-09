import { useState } from 'react'
import { Link } from 'react-router'
import { C } from '@/constants'
import heroImg from '@/imports/dijitalurunler_1.jpg'
import billboardFormatImg from '@/imports/bb_plus_3.jpg'
import giantboardFormatImg from '@/imports/urunler_giantboard_1.jpg'
import clpFormatImg from '@/imports/clp_2.jpg'
import ledFormatImg from '@/imports/dijital_yeni_5a.jpg'
import binaGiydirmeFormatImg from '@/imports/204.jpg'
import aracGiydirmeFormatImg from '@/imports/Tramvay_5.jpg'
import durakFormatImg from '@/imports/y_clp_3.jpg'
import havalimaniFormatImg from '@/imports/TERM_NAL_DI_I_STAT_K__N_TELER.1.jpg'
import binaProjectImg from '@/imports/204-1.jpg'
import billboardProjectImg from '@/imports/Kuleboard_1.png'
import ledProjectImg from '@/imports/dijital_yeni_1a.jpg'
import PageHero from '@/components/PageHero'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'

const FORMATS = [
  { slug: 'billboard', title: 'Billboard', desc: 'Yoğun trafik güzergahlarında yüksek görünürlük sağlayan büyük format reklam yüzeyleri.', img: billboardFormatImg },
  { slug: 'giantboard', title: 'Giantboard', desc: 'Şehir girişleri ve ana arterlerinde maksimum etki yaratan dev format panolar.', img: giantboardFormatImg },
  { slug: 'clp', title: 'CLP / Citylight', desc: 'Yaya trafiğinin yoğun olduğu noktalarda dikkat çeken arka aydınlatmalı vitrinler.', img: clpFormatImg },
  { slug: 'led-ekran', title: 'LED Ekran', desc: 'Dinamik içerik yönetimiyle 7/24 aktif dijital reklam ekranları.', img: ledFormatImg },
  { slug: 'bina-giydirme', title: 'Bina Giydirme', desc: 'Yüksek görünürlük sağlayan bina cephesi ve iskele branda uygulamaları.', img: binaGiydirmeFormatImg },
  { slug: 'arac-giydirme', title: 'Araç Giydirme', desc: "Araç filoları veya tekil araçlarda markanızı şehrin her köşesine taşıyın.", img: aracGiydirmeFormatImg },
  { slug: 'durak-reklamlari', title: 'Durak Reklamları', desc: 'Otobüs ve metro duraklarında hedef kitle ile yüz yüze temas.', img: durakFormatImg },
  { slug: 'havalimani-reklamlari', title: 'Havalimanı Reklamları', desc: 'Ulusal ve uluslararası yolcuları hedefleyen havalimanı iç ve dış mekan uygulamaları.', img: havalimaniFormatImg },
]

const FAQ_ITEMS = [
  { q: 'Billboard kiralama süreci nasıl işliyor?', a: 'İhtiyacınıza göre konum analizi yapıyoruz. Belirlenen konumlar için fiyat teklifi sunuluyor, onay sonrası baskı ve montaj süreci başlatılıyor.' },
  { q: 'Minimum reklam süresi nedir?', a: 'Reklam süresi ve koşulları projeye göre değişkenlik göstermektedir. Detaylı bilgi için teklif formumuzu doldurabilirsiniz.' },
  { q: 'Tasarım hizmeti sunuyor musunuz?', a: 'Evet, deneyimli kreatif ekibimiz açık hava reklamı formatlarına uygun tasarımlar hazırlıyor.' },
  { q: 'Montaj ve söküm dahil mi?', a: 'Baskı, montaj, bakım ve dönem sonunda söküm hizmetleri standart olarak sunulmaktadır.' },
  { q: 'Türkiye genelinde hizmet veriyor musunuz?', a: 'Evet, geniş saha ağımız ile Türkiye genelinde uygulama ve takip hizmeti sağlıyoruz.' },
]

function FormatCard({ fmt }: { fmt: typeof FORMATS[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link to={`/acik-hava-reklamciligi/${fmt.slug}`}
      className="group block overflow-hidden"
      style={{ background: C.card, borderRadius: 4, transform: hovered ? 'translateY(-3px)' : 'none', transition: 'transform 0.3s ease' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ height: 200, overflow: 'hidden' }}>
        <img src={fmt.img} alt={fmt.title} className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }} />
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-white mb-2" style={{ fontSize: 17 }}>{fmt.title}</h3>
        <p className="mb-4" style={{ fontSize: 14, color: C.lightText, lineHeight: 1.65 }}>{fmt.desc}</p>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest transition-colors"
          style={{ color: hovered ? C.purpleAccent : C.muted, letterSpacing: '0.12em' }}>
          İNCELE
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export default function AcikHava() {
  return (
    <div style={{ background: C.dark }}>
      <PageHero
        label="AÇIK HAVA REKLAMCILIĞI"
        title="Markanızı Şehrin"
        titleAccent="Her Noktasında Görün"
        desc="Billboard'dan bina giydirmeye, LED ekrandan CLP'ye kadar tüm açık hava reklam formatlarında tasarım, baskı ve saha uygulaması."
        bgImage={heroImg}
        breadcrumb={[{ label: 'Faaliyet Alanları', path: '/faaliyet-alanlari' }, { label: 'Açık Hava Reklamcılığı' }]}
      />

      {/* Intro */}
      <section style={{ background: C.elevated, padding: '72px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleAccent, letterSpacing: '0.2em' }}>
              NEDEN AÇIK HAVA?
            </span>
            <h2 className="font-display font-extrabold text-white mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', lineHeight: 1.15 }}>
              Şehrin Dokusuna<br />Markanızın İzini Bırakın
            </h2>
            <p style={{ fontSize: 16, color: C.lightText, lineHeight: 1.8, marginBottom: 24 }}>
              Açık hava reklamcılığı, hedef kitlenizi günlük yaşamlarının tam ortasında yakalar. Doğru konumla, doğru formatta ve güçlü tasarımla birleştiğinde markanız şehrin ayrılmaz bir parçasına dönüşür.
            </p>
            <p style={{ fontSize: 16, color: C.lightText, lineHeight: 1.8 }}>
              Mütekavvim olarak konum analizinden kreatif tasarıma, baskıdan sahaya uygulamaya kadar tüm süreci tek elden yönetiyoruz.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Konum Analizi', desc: 'Hedef kitlenizin yoğun olduğu güzergahları belirliyoruz.' },
              { title: 'Kreatif Tasarım', desc: 'Formata özel, dikkat çekici tasarımlar üretiyoruz.' },
              { title: 'Baskı ve Üretim', desc: 'Yüksek kalite baskı ve malzeme güvencesi.' },
              { title: 'Saha Uygulaması', desc: 'Montaj, bakım ve periyodik kontrol hizmeti.' },
            ].map((item, i) => (
              <div key={i} className="p-5" style={{ background: C.card, borderRadius: 4, border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-2 h-2 rounded-full mb-3" style={{ background: C.purpleAccent }} />
                <h4 className="font-display font-bold text-white mb-1" style={{ fontSize: 15 }}>{item.title}</h4>
                <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="mb-12">
            <span className="block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: C.purpleAccent, letterSpacing: '0.2em' }}>REKLAM FORMATLARI</span>
            <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)' }}>
              8 Farklı Format,<br />Sınırsız Görünürlük
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FORMATS.map((fmt) => <FormatCard key={fmt.slug} fmt={fmt} />)}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section style={{ background: C.elevated, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: C.purpleAccent, letterSpacing: '0.2em' }}>REFERANS PROJELER</span>
              <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}>
                Seçilmiş Açık Hava<br />Uygulamalarımız
              </h2>
            </div>
            <Link to="/projeler" className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white"
              style={{ color: C.purpleAccent, fontFamily: 'var(--font-display)' }}>
              Tüm Projeler
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { client: 'İLVİ', type: 'Bina Giydirme', city: 'İstanbul', img: binaProjectImg },
              { client: 'VELUX', type: 'Billboard Kampanyası', city: 'İstanbul', img: billboardProjectImg },
              { client: 'LUFİAN', type: 'LED Ekran', city: 'İstanbul', img: ledProjectImg },
            ].map((p, i) => (
              <div key={i} className="relative overflow-hidden group" style={{ borderRadius: 4, height: 280 }}>
                <img src={p.img} alt={p.type} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col justify-end p-5"
                  style={{ background: 'linear-gradient(to top, rgba(11,12,17,0.85), transparent 60%)' }}>
                  <span className="block text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: C.purpleAccent, letterSpacing: '0.12em' }}>{p.client}</span>
                  <p className="text-white font-display font-bold" style={{ fontSize: 16 }}>{p.type} — {p.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 className="font-display font-extrabold text-white mb-10 text-center" style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}>
            Sık Sorulan Sorular
          </h2>
          <FAQAccordion items={FAQ_ITEMS} dark />
        </div>
      </section>

      <CTABanner
        title="Açık Hava Kampanyanızı Planlamaya Başlayalım."
        desc="Konum, format ve bütçe konularında ücretsiz danışmanlık alın."
        primaryLabel="TEKLİF AL"
        secondaryLabel="WHATSAPP'TAN YAZ"
      />
    </div>
  )
}
