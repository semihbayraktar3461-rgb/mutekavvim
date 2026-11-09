import { useState } from 'react'
import { Link } from 'react-router'
import { C } from '@/constants'
import { heroImg, svc1Img, svc2Img, svc3Img, proj2Img, proj3Img } from '@/assets'
import projectCard0Img from '@/imports/204-2.jpg'
import featuredServiceImg from '@/imports/Kuleboard_12.png'
import projectCard1Img from '@/imports/dijital_yeni_1a-1.jpg'
import CTABanner from '@/components/CTABanner'
import FAQAccordion from '@/components/FAQAccordion'

/* ─── Stats ─── */
const STATS = [
  { value: '4+', label: 'Yıllık Deneyim' },
  { value: '3508+', label: 'Tamamlanan Proje' },
  { value: '38+', label: 'Kurumsal Marka' },
  { value: 'Türkiye Geneli', label: 'Uygulama Ağı' },
]

/* ─── Services ─── */
const SERVICES = [
  {
    title: 'Açık Hava Reklamcılığı',
    desc: 'Billboard, CLP, giantboard, LED ekran, bina ve araç giydirme çözümleri.',
    path: '/acik-hava-reklamciligi',
    img: featuredServiceImg,
    featured: true,
  },
  {
    title: 'Matbaa ve Baskı',
    desc: 'Kartvizit, katalog, broşür, ambalaj ve kurumsal baskı çözümleri.',
    path: '/matbaa',
    img: svc3Img,
    featured: false,
  },
  {
    title: 'Promosyon Ürünleri',
    desc: 'Markanıza özel seçilen, tasarlanan ve üretilen kurumsal promosyon ürünleri.',
    path: '/promosyon',
    img: svc2Img,
    featured: false,
  },
  {
    title: 'Dijital Çözümler',
    desc: 'Web tasarımı, sosyal medya tasarımı, dijital kampanya ve marka iletişimi.',
    path: '/dijital',
    img: svc1Img,
    featured: false,
  },
]

/* ─── Projects ─── */
const PROJECTS = [
  { client: 'LUFİAN', type: 'Bina Giydirme Uygulaması', city: 'İstanbul', service: 'Açık Hava', img: projectCard0Img, slug: 'proje-1' },
  { client: 'İLVİ', type: 'Billboard Kampanyası', city: 'İstanbul', service: 'Billboard', img: projectCard1Img, slug: 'proje-2' },
  { client: 'MÜTEKAVVİM', type: 'Kurumsal Baskı Paketi', city: 'İstanbul', service: 'Matbaa', img: proj2Img, slug: 'proje-3' },
  { client: 'MÜTEKAVVİM', type: 'Promosyon Koleksiyonu', city: 'İstanbul', service: 'Promosyon', img: proj3Img, slug: 'proje-4' },
]

/* ─── Why ─── */
const WHY = [
  { title: 'Tasarımdan Uygulamaya Tek Ekip', desc: 'Tasarım, üretim ve saha montaj süreçlerinin tamamı tek çatı altında yönetilir.' },
  { title: 'Hızlı ve Kontrollü Üretim', desc: 'Baskı, üretim ve lojistik süreçleri doğrudan kendi kalite kontrolümüzde ilerler.' },
  { title: 'Türkiye Genelinde Saha Çözümü', desc: 'Türkiye genelinde güçlü saha ekibimizle hızlı ve güvenli uygulama kapasitesi.' },
  { title: 'Tek İletişim Noktası', desc: 'Projenin başından teslimatına kadar şeffaf iletişim ve tek muhatap.' },
]

/* ─── Steps ─── */
const STEPS = [
  { num: '01', title: 'İhtiyaç Analizi', desc: 'Markanızı, hedeflerinizi ve uygulama alanını analiz ediyoruz.' },
  { num: '02', title: 'Tasarım ve Planlama', desc: 'Yaratıcı fikri geliştiriyor, ölçü ve üretim planını hazırlıyoruz.' },
  { num: '03', title: 'Üretim ve Uygulama', desc: 'Baskı, üretim, lojistik ve saha uygulamasını yönetiyoruz.' },
  { num: '04', title: 'Teslim ve Destek', desc: 'Projeyi kontrol ederek teslim ediyor, her aşamada destekliyoruz.' },
]

/* ─── Service card ─── */
function ServiceCard({ svc, large }: { svc: typeof SERVICES[0]; large?: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to={svc.path}
      className="group block relative overflow-hidden"
      style={{
        background: '#fff',
        borderRadius: 4,
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: hovered ? '0 20px 60px rgba(72,45,127,0.15)' : '0 2px 12px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={large ? 'overflow-hidden flex-1 min-h-0' : 'overflow-hidden flex-shrink-0'} style={large ? { minHeight: 520 } : { height: 200 }}>
        <img src={svc.img as string} alt={svc.title} className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }} />
      </div>
      <div className="flex flex-col flex-shrink-0 p-6">
        <h3 className="font-display font-bold mb-2" style={{ fontSize: large ? 22 : 18, color: C.dark }}>
          {svc.title}
        </h3>
        <p className="mb-4" style={{ fontSize: 15, color: C.gray, lineHeight: 1.65 }}>{svc.desc}</p>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors"
          style={{ color: hovered ? C.purpleAccent : C.purpleMid, letterSpacing: '0.14em' }}>
          DETAYLI İNCELE
          <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-300"
        style={{ background: `linear-gradient(to right, ${C.purpleDeep}, ${C.purpleAccent})`, opacity: hovered ? 1 : 0 }} />
    </Link>
  )
}

/* ─── Project card ─── */
function ProjectCard({ proj }: { proj: typeof PROJECTS[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to={`/projeler/${proj.slug}`}
      className="block relative overflow-hidden flex-shrink-0 w-72 lg:w-auto"
      style={{
        borderRadius: 4, background: C.card, minWidth: 280,
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ height: 300, overflow: 'hidden' }}>
        <img src={proj.img as string} alt={proj.type} className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }} />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-5 transition-all duration-300"
        style={{ background: hovered ? 'linear-gradient(to top, rgba(11,12,17,0.92), rgba(72,45,127,0.25) 60%, transparent)' : 'linear-gradient(to top, rgba(11,12,17,0.82), transparent 60%)' }}>
        <div className="transition-transform duration-300" style={{ transform: hovered ? 'translateY(-6px)' : 'none' }}>
          <span className="block text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: C.purpleAccent, letterSpacing: '0.14em' }}>{proj.service}</span>
          <h3 className="font-display font-bold text-white mb-1" style={{ fontSize: 18 }}>{proj.client}</h3>
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

export default function Home() {
  return (
    <div style={{ background: C.dark }}>
      {/* ── Hero ── */}
      <section className="relative flex flex-col" style={{ minHeight: 820, background: C.dark }}>
        <div className="absolute inset-0 overflow-hidden">
          <img src={heroImg} alt="Şehir silueti ve açık hava reklam uygulamaları" className="w-full h-full object-cover object-center" style={{ opacity: 1 }} />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(105deg, rgba(11,12,17,0.97) 0%, rgba(11,12,17,0.85) 40%, rgba(11,12,17,0.35) 70%, rgba(11,12,17,0.15) 100%)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-48"
            style={{ background: `linear-gradient(to top, ${C.dark}, transparent)` }} />
        </div>

        <div className="relative flex-1 flex flex-col justify-center"
          style={{ maxWidth: 1280, margin: '0 auto', padding: '120px 24px 160px', width: '100%' }}>
          <div className="inline-flex items-center gap-2 mb-8 self-start" style={{ paddingTop: 1, paddingBottom: 1 }}>
            <span className="h-px w-8" style={{ background: C.purpleAccent }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: C.purpleAccent, letterSpacing: '0.22em', paddingTop: 1, paddingBottom: 1 }}>
              AÇIK HAVA &bull; MATBAA &bull; PROMOSYON &bull; DİJİTAL
            </span>
          </div>

          <h1 className="font-display font-extrabold mb-6 text-white"
            style={{ fontSize: 'clamp(44px, 6vw, 76px)', lineHeight: 1.24, maxWidth: 640, paddingTop: 3, paddingBottom: 3 }}>
            ŞEHRİN İÇİNDE,<br />
            MARKANIZIN <span style={{ color: C.purpleAccent }}>İZİ.</span>
          </h1>

          <p className="mb-10" style={{ maxWidth: 480, fontSize: 'clamp(16px, 1.2vw, 18px)', lineHeight: 1.7, color: C.lightText }}>
            Markanızı tasarımdan üretime, baskıdan saha uygulamasına kadar tek noktadan yönetiyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/teklif-al"
              className="flex items-center justify-center rounded-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, padding: '16px 36px', minHeight: 56, fontSize: 15, letterSpacing: '0.1em', fontFamily: 'var(--font-display)' }}>
              ÜCRETSİZ TEKLİF AL
            </Link>
            <Link to="/projeler"
              className="flex items-center justify-center rounded-sm font-semibold text-white transition-colors hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)', padding: '16px 36px', minHeight: 56, fontSize: 15, letterSpacing: '0.1em', fontFamily: 'var(--font-display)' }}>
              PROJELERİ İNCELE
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="relative z-10" style={{ marginTop: -56, padding: '0 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4"
            style={{ background: 'rgba(18,19,26,0.88)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, boxShadow: '0 24px 80px rgba(0,0,0,0.6)', overflow: 'hidden' }}>
            {STATS.map((s, i) => (
              <div key={i} className="flex flex-col p-6 lg:p-8"
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div className="w-8 h-0.5 mb-4" style={{ background: `linear-gradient(to right, ${C.purpleDeep}, ${C.purpleAccent})` }} />
                <span className="font-display font-extrabold text-white mb-1" style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.1 }}>{s.value}</span>
                <span className="text-xs font-medium uppercase tracking-widest" style={{ color: C.muted, letterSpacing: '0.14em' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services ── */}
      <section style={{ background: C.offwhite, padding: '96px 24px', marginTop: 56 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleMid, letterSpacing: '0.2em' }}>
                FAALİYET ALANLARIMIZ
              </span>
              <h2 className="font-display font-extrabold leading-tight" style={{ fontSize: 'clamp(34px, 4vw, 52px)', color: C.dark }}>
                Markanız İçin<br />Uçtan Uca Çözümler
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <p style={{ maxWidth: 340, fontSize: 16, color: C.gray, lineHeight: 1.7 }}>
                Tasarım, üretim ve uygulama süreçlerini tek elden yönetiyoruz.
              </p>
              <Link to="/faaliyet-alanlari"
                className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold transition-colors hover:text-purple-700"
                style={{ color: C.purpleMid, fontFamily: 'var(--font-display)', letterSpacing: '0.08em' }}>
                TÜM HİZMETLER
                <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3"><ServiceCard svc={SERVICES[0]} large /></div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {SERVICES.slice(1).map((svc) => <ServiceCard key={svc.path} svc={svc} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section style={{ background: C.dark, padding: '96px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleAccent, letterSpacing: '0.2em' }}>PROJELERİMİZ</span>
              <h2 className="font-display font-extrabold leading-tight text-white" style={{ fontSize: 'clamp(32px, 4vw, 50px)' }}>
                Gerçekleştirdiğimiz<br />Seçilmiş Projeler
              </h2>
            </div>
            <Link to="/projeler"
              className="inline-flex items-center gap-2 rounded-sm font-semibold text-sm self-start sm:self-auto flex-shrink-0 transition-opacity hover:opacity-80"
              style={{ border: `1px solid rgba(123,97,255,0.5)`, padding: '12px 24px', color: C.purpleAccent, fontFamily: 'var(--font-display)', letterSpacing: '0.08em', minHeight: 48 }}>
              TÜM PROJELERİ GÖR
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </Link>
          </div>
        </div>
        <div className="flex lg:grid overflow-x-auto gap-4 pb-2 lg:pb-0"
          style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {PROJECTS.map((p, i) => <ProjectCard key={i} proj={p} />)}
        </div>
      </section>

      {/* ── Why ── */}
      <section style={{ background: '#fff', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleMid, letterSpacing: '0.2em' }}>NEDEN MÜTEKAVVİM?</span>
              <h2 className="font-display font-extrabold leading-tight mb-6" style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: C.dark }}>
                Her Adımda<br />Yanınızdayız.
              </h2>
              <p className="mb-8" style={{ fontSize: 16, color: C.gray, lineHeight: 1.75, maxWidth: 420 }}>
                Tasarımdan sahaya kadar tüm süreci tek ekiple yönetiyoruz. Şeffaf iletişim, kontrollü üretim ve güvenilir teslimat.
              </p>
              <Link to="/hakkimizda"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-purple-700"
                style={{ color: C.purpleMid, fontFamily: 'var(--font-display)', letterSpacing: '0.08em' }}>
                HAKKIMIZDA DAHA FAZLA
                <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY.map((item, i) => (
                <div key={i} className="p-6" style={{ background: C.offwhite, borderRadius: 4, border: '1px solid rgba(0,0,0,0.06)' }}>
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center mb-4"
                    style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})` }}>
                    <svg viewBox="0 0 16 16" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 8l4 4 8-8" />
                    </svg>
                  </div>
                  <h4 className="font-display font-bold mb-2" style={{ fontSize: 16, color: C.dark }}>{item.title}</h4>
                  <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section style={{ background: C.light, padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="text-center mb-16">
            <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleMid, letterSpacing: '0.2em' }}>ÇALIŞMA SÜRECİMİZ</span>
            <h2 className="font-display font-extrabold leading-tight" style={{ fontSize: 'clamp(30px, 4vw, 48px)', color: C.dark }}>
              Fikirden Uygulamaya<br />4 Adımda Tam Hizmet
            </h2>
          </div>
          {/* Desktop: horizontal */}
          <div className="hidden lg:grid grid-cols-4 relative">
            <div className="absolute top-7 left-16 right-16 h-px z-0"
              style={{ background: `linear-gradient(to right, ${C.purpleDeep}, ${C.purpleAccent})` }} />
            {STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center px-6 relative z-10">
                <div className="flex items-center justify-center w-14 h-14 rounded-full font-display font-extrabold text-white mb-6"
                  style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, fontSize: 14, boxShadow: `0 0 0 6px ${C.light}` }}>
                  {step.num}
                </div>
                <h4 className="font-display font-bold mb-3" style={{ fontSize: 17, color: C.dark }}>{step.title}</h4>
                <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          {/* Mobile: vertical */}
          <div className="lg:hidden flex flex-col">
            {STEPS.map((step, i) => (
              <div key={i} className="flex gap-5 relative">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full font-display font-extrabold text-white flex-shrink-0 z-10"
                    style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, fontSize: 12 }}>
                    {step.num}
                  </div>
                  {i < STEPS.length - 1 && <div className="w-px flex-1 mt-1" style={{ minHeight: 32, background: `linear-gradient(to bottom, ${C.purpleAccent}, ${C.purpleDeep})` }} />}
                </div>
                <div className="pb-8">
                  <h4 className="font-display font-bold mb-1" style={{ fontSize: 16, color: C.dark }}>{step.title}</h4>
                  <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ background: '#fff', padding: '96px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="text-center mb-14">
            <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleMid, letterSpacing: '0.2em' }}>MÜŞTERİ GÖRÜŞLERİ</span>
            <h2 className="font-display font-extrabold" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: C.dark }}>
              Müşterilerimiz Ne Diyor?
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 p-8 lg:p-10 relative overflow-hidden"
              style={{ background: C.dark, borderRadius: 4, border: `1px solid rgba(123,97,255,0.2)` }}>
              <div className="text-6xl font-display font-extrabold absolute top-6 left-8 opacity-10 select-none"
                style={{ color: C.purpleAccent }}>
                "
              </div>
              <p className="relative z-10 mb-8 mt-4 italic" style={{ fontSize: 17, color: C.lightText, lineHeight: 1.8 }}>
                Planlama, üretim ve saha uygulama süreçlerinin tek noktadan yönetilmesi, kampanyanın hızlı ve düzenli ilerlemesini sağladı.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, fontSize: 15 }}>KP</div>
                <div>
                  <div className="font-display font-bold text-white">Kurumsal Perakende Markası</div>
                  <div style={{ color: C.muted, fontSize: 13 }}>Açık Hava Kampanyası</div>
                </div>
              </div>
            </div>
            <div className="p-6" style={{ background: C.offwhite, borderRadius: 4, border: '1px solid rgba(0,0,0,0.06)', paddingTop: 50 }}>
              <p className="mb-4 italic" style={{ fontSize: 14, color: C.gray, lineHeight: 1.75 }}>
                Farklı basılı materyallerde marka bütünlüğünün korunması ve üretim sürecinin kontrollü ilerlemesi bizim için önemli bir avantaj sağladı.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs"
                  style={{ background: C.purpleMid }}>HS</div>
                <div>
                  <div className="font-bold text-sm" style={{ color: C.dark }}>Hizmet Sektörü Markası</div>
                  <div style={{ color: C.muted, fontSize: 12 }}>Kurumsal Baskı Projesi</div>
                </div>
              </div>
            </div>
            <div className="p-6" style={{ background: C.offwhite, borderRadius: 4, border: '1px solid rgba(0,0,0,0.06)' }}>
              <p className="mb-4 italic" style={{ fontSize: 14, color: C.gray, lineHeight: 1.75 }}>
                Ürün seçiminden kişiselleştirmeye kadar sürecin tek ekip tarafından yönetilmesi, ihtiyacımıza uygun ve bütünlüklü bir çözüm sundu.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs"
                  style={{ background: C.purpleMid }}>KM</div>
                <div>
                  <div className="font-bold text-sm" style={{ color: C.dark }}>Kurumsal Marka</div>
                  <div style={{ color: C.muted, fontSize: 12 }}>Özel Üretim Promosyon Projesi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />

      {/* Mobile sticky bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex gap-3 p-3"
        style={{ background: 'rgba(11,12,17,0.96)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <Link to="/teklif-al" className="flex-1 flex items-center justify-center rounded-sm font-semibold text-white"
          style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, minHeight: 52, fontSize: 14, letterSpacing: '0.1em', fontFamily: 'var(--font-display)' }}>
          TEKLİF AL
        </Link>
        <a href="https://wa.me/905445091544" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
          className="flex items-center justify-center rounded-sm" style={{ background: '#25D366', minHeight: 52, width: 52, flexShrink: 0 }}>
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
