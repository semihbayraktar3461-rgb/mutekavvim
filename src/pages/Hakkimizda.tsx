import { Link } from 'react-router'
import { C } from '@/constants'
import { logoMark } from '@/assets'
import hakkimizdaHeroImg from '@/imports/ChatGPT_Image_23_Tem_2026_15_03_44.png'
import storyTowerImg from '@/imports/ChatGPT_Image_11_A_u_2026_14_05_27.png'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'

const VALUES = [
  { title: 'Güvenilirlik', desc: 'Söz verdiğimiz her işi zamanında gerçekleştirir, tüm süreç boyunca şeffaf kalırız.' },
  { title: 'Kalite', desc: 'Üretimden uygulamaya her adımda en yüksek kalite standartlarını korur, kaliteden ödün vermeyiz.' },
  { title: 'Yenilik', desc: 'Sektördeki gelişmeleri yakından takip eder, öncü çözümler sunarız.' },
  { title: 'Ortaklık', desc: "Müşterilerimizi birer iş ortağı olarak görür, başarılarını sahipleniriz." },
]

const MILESTONES = [
  { year: 'Nisan 2022', event: 'Mütekavvim Limited Şirketi kuruldu; açık hava reklamcılığı ve matbaa faaliyetlerine başladı' },
  { year: '2022', event: 'Kurumsal promosyon ürünleri, kağıtçılık ve sarf malzemeleri tedarik operasyonları devreye alındı' },
  { year: '2023', event: 'Ulusal kurumsal markalarla büyük ölçekli açık hava ve saha operasyonları gerçekleştirildi' },
  { year: '2024', event: 'Dijital çözümler, sosyal medya yönetimi ve özel yazılım geliştirme birimi faaliyete geçti' },
  { year: '2025', event: 'Kurumsal yapı ve ticari inşaat projeleriyle 6 ana faaliyet alanında uçtan uca hizmet yapısına ulaşıldı' },
  { year: '2026', event: 'Türkiye genelinde 81 ili kapsayan saha uygulama ağı ve uluslararası büyüme hedefleriyle faaliyetler genişletildi' },
]

const DIVISIONS = [
  { title: 'Açık Hava Reklamcılığı', path: '/acik-hava-reklamciligi', desc: 'Billboard, bina giydirme, LED ekran, CLP ve araç giydirme' },
  { title: 'Matbaa ve Baskı', path: '/matbaa', desc: 'Kartvizit, katalog, ambalaj ve özel baskı teknikleri' },
  { title: 'Promosyon Ürünleri', path: '/promosyon', desc: 'Kurumsal hediyeler, tekstil ve teknolojik ürünler' },
  { title: 'Dijital Çözümler', path: '/dijital', desc: 'Web tasarım, sosyal medya ve kurumsal kimlik' },
  { title: 'Yazılım', path: '/yazilim', desc: 'Özel yazılım, mobil uygulama ve otomasyon' },
  { title: 'İnşaat', path: '/insaat', desc: 'Kurumsal yapı çözümleri ve anahtar teslim projeler' },
]

export default function Hakkimizda() {
  return (
    <div style={{ background: '#fff' }}>
      <PageHero
        label="HAKKIMIZDA"
        title="Mütekavvim"
        titleAccent="Kimdir?"
        desc="Tasarımdan sahaya, baskıdan uygulamaya kadar markanızın görünürlüğünü uçtan uca yönetiyoruz."
        bgImage={hakkimizdaHeroImg}
        bgColor={C.dark}
        breadcrumb={[{ label: 'Hakkımızda' }]}
      />

      {/* Story */}
      <section style={{ padding: '88px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleMid, letterSpacing: '0.2em' }}>KURUMSAL HİKAYEMİZ</span>
            <h2 className="font-display font-extrabold mb-6" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: C.dark, lineHeight: 1.15 }}>
              Genç, Dinamik ve<br />Çok Yönlü Çözüm Ortağınız
            </h2>
            <p className="mb-5" style={{ fontSize: 16, color: C.gray, lineHeight: 1.85 }}>
              Nisan 2022'de kurulan Mütekavvim Limited Şirketi; genç ve dinamik yapısıyla sektöre hızlı bir giriş yapmış, kaliteli ve profesyonel hizmet anlayışıyla kısa sürede tanınan güvenilir bir marka haline gelmiştir. Açık hava reklamcılığı, matbaa, kağıtçılık ve sarf malzemeleri, promosyon ürünleri, dijital çözümler, yazılım ve inşaat alanlarında uçtan uca hizmet sunuyoruz.
            </p>
            <p className="mb-8" style={{ fontSize: 16, color: C.gray, lineHeight: 1.85 }}>
              Deneyimli ekibimiz sayesinde birçok başarılı proje ve iş birliğine imza atarken, Türkiye sınırlarını aşarak uluslararası alanda da etkili bir rol oynamayı hedefliyoruz. Müşteri memnuniyetine verdiğimiz önem, sağlam iş ilişkilerimiz ve güçlü referanslarımızla markaların tüm kurumsal ihtiyaçlarını tek çatı altında yönetiyoruz.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
              {[
                { label: 'Misyonumuz', text: 'Müşterilerimizin ihtiyaçlarını doğru analiz ederek; reklam, matbaa, promosyon, yazılım ve inşaat alanlarında kalite ve güvenilirliği ön planda tutan yenilikçi, pratik ve sürdürülebilir çözümler sunmak.' },
                { label: 'Vizyonumuz', text: 'Genç, dinamik ve inovatif yaklaşımımızla sektördeki öncü konumumuzu güçlendirmek; Türkiye sınırlarını aşarak küresel pazarda etkin ve kalıcı bir rol oynamak.' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.purpleMid, letterSpacing: '0.16em' }}>{item.label}</div>
                  <p style={{ fontSize: 15, color: C.dark, lineHeight: 1.7 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ borderRadius: 8, height: 480, boxShadow: '0 20px 60px rgba(72,45,127,0.18)' }}>
            <img src={storyTowerImg} alt="Mütekavvim Kurumsal Görünürlük" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: C.offwhite, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="text-center mb-12">
            <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleMid, letterSpacing: '0.2em' }}>TEMEL DEĞERLERİMİZ</span>
            <h2 className="font-display font-extrabold" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: C.dark }}>Çalışma İlkelerimiz</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="p-7" style={{ background: '#fff', borderRadius: 4, border: '1px solid rgba(0,0,0,0.06)' }}>
                <div className="w-10 h-10 rounded-sm flex items-center justify-center mb-5"
                  style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})` }}>
                  <svg viewBox="0 0 16 16" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 8l4 4 8-8" />
                  </svg>
                </div>
                <h4 className="font-display font-bold mb-2" style={{ fontSize: 18, color: C.dark }}>{v.title}</h4>
                <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Divisions */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="mb-12">
            <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleMid, letterSpacing: '0.2em' }}>FAALİYET ALANLARIMIZ</span>
            <h2 className="font-display font-extrabold" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: C.dark }}>6 Ana Alanda<br />Tek Çözüm Ortağı</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIVISIONS.map((d) => (
              <Link key={d.path} to={d.path}
                className="group p-6 transition-all duration-200 hover:-translate-y-1"
                style={{ background: C.offwhite, borderRadius: 4, border: '1px solid rgba(0,0,0,0.06)' }}>
                <h4 className="font-display font-bold mb-2 group-hover:text-purple-700 transition-colors" style={{ fontSize: 17, color: C.dark }}>{d.title}</h4>
                <p className="mb-4" style={{ fontSize: 14, color: C.gray, lineHeight: 1.65 }}>{d.desc}</p>
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.purpleMid, letterSpacing: '0.12em' }}>DETAYLAR →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: C.dark, padding: '80px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="text-center mb-12">
            <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleAccent, letterSpacing: '0.2em' }}>TARİHSEL GELİŞİMİMİZ</span>
            <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}>Büyüme Sürecimiz</h2>
          </div>
          <div className="relative">
            <div className="absolute left-7 top-0 bottom-0 w-px" style={{ background: `linear-gradient(to bottom, ${C.purpleAccent}, ${C.purpleDeep})` }} />
            {MILESTONES.map((m, i) => (
              <div key={i} className="flex gap-8 mb-8 relative items-center">
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center z-10 text-center px-1"
                  style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})` }}>
                  <span className="font-display font-extrabold text-white leading-tight" style={{ fontSize: 10, letterSpacing: '0.03em' }}>{m.year}</span>
                </div>
                <div>
                  <div className="font-display font-bold text-white" style={{ fontSize: 16 }}>{m.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-col sm:flex-row justify-center gap-5 py-16 px-6" style={{ background: C.offwhite }}>
        <Link to="/kariyer"
          className="flex items-center justify-center gap-2 px-8 py-4 rounded-sm font-semibold transition-colors hover:bg-gray-100"
          style={{ border: `2px solid ${C.purpleMid}`, color: C.purpleMid, minHeight: 56, fontFamily: 'var(--font-display)', letterSpacing: '0.1em', fontSize: 14 }}>
          KARİYER FIRSATLARI
        </Link>
      </div>

      <CTABanner />
    </div>
  )
}
