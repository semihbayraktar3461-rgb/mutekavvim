import { C } from '@/constants'
import { Link } from 'react-router'
import ekibimizHeroImg from '@/imports/ChatGPT_Image_23_Tem_2026_15_03_44.png'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'

const DEPARTMENTS = [
  { title: 'Liderlik', members: 2, desc: 'Şirketi stratejik olarak yönlendiren yönetim kadrosu.' },
  { title: 'Kreatif Ekip', members: 0, desc: 'Tasarım, içerik ve kampanya yönetimi uzmanları.' },
  { title: 'Üretim Ekibi', members: 0, desc: 'Baskı ve üretim süreçlerini yöneten teknik ekip.' },
  { title: 'Saha Uygulaması', members: 0, desc: 'Montaj, kurulum ve sahada uygulama sorumluları.' },
  { title: 'Yazılım Ekibi', members: 0, desc: 'Yazılım geliştirme ve dijital çözüm uzmanları.' },
  { title: 'Müşteri İlişkileri', members: 0, desc: 'Müşteri deneyimi ve iletişim koordinasyon ekibi.' },
]

const LEADERSHIP = [
  { role: 'Genel Müdürlük & Strateji', unit: 'Kurumsal Yönetim ve İş Geliştirme' },
  { role: 'Operasyon & Saha Direktörlüğü', unit: 'Üretim, Baskı ve Türkiye Geneli Saha Yönetimi' },
  { role: 'Kreatif & Dijital Direktörlük', unit: 'Tasarım, Marka İletişimi ve Yazılım Çözümleri' },
  { role: 'Müşteri İlişkileri Direktörlüğü', unit: 'Kurumsal Satış ve Proje Koordinasyonu' },
]

export default function Ekibimiz() {
  return (
    <div style={{ background: '#fff' }}>
      <PageHero
        label="EKİBİMİZ"
        title="Birlikte Daha"
        titleAccent="Güçlüyüz"
        desc="Tasarım, üretim, saha uygulaması ve yazılımda uzman kadromuzla markanıza tam kapsamlı destek sunuyoruz."
        bgImage={ekibimizHeroImg}
        bgColor={C.dark}
        breadcrumb={[{ label: 'Hakkımızda', path: '/hakkimizda' }, { label: 'Ekibimiz' }]}
      />

      {/* Department structure */}
      <section style={{ padding: '88px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="mb-14">
            <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleMid, letterSpacing: '0.2em' }}>DEPARTMAN YAPISI</span>
            <h2 className="font-display font-extrabold" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: C.dark }}>Uzmanlık Alanlarımız</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {DEPARTMENTS.map((dept) => (
              <div key={dept.title} className="p-6" style={{ background: C.offwhite, borderRadius: 4, border: '1px solid rgba(0,0,0,0.07)' }}>
                <div className="w-8 h-8 rounded-sm flex items-center justify-center mb-4"
                  style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})` }}>
                  <svg viewBox="0 0 16 16" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 2a2 2 0 100 4 2 2 0 000-4zM3 11a3 3 0 013-3h4a3 3 0 013 3v2H3v-2z" />
                  </svg>
                </div>
                <h4 className="font-display font-bold mb-2" style={{ fontSize: 17, color: C.dark }}>{dept.title}</h4>
                <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.65 }}>{dept.desc}</p>
              </div>
            ))}
          </div>

          {/* Organizational Leadership */}
          <div className="mb-12">
            <h3 className="font-display font-bold mb-6" style={{ fontSize: 22, color: C.dark }}>Organizasyon ve Yönetim Birimleri</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {LEADERSHIP.map((item, i) => (
                <div key={i} className="p-6 text-center" style={{ background: C.offwhite, borderRadius: 4, border: '1px solid rgba(0,0,0,0.07)' }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})` }}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
                    </svg>
                  </div>
                  <div className="font-display font-bold mb-1.5" style={{ fontSize: 15, color: C.dark }}>{item.role}</div>
                  <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.5 }}>{item.unit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: C.dark, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }} className="text-center">
          <h2 className="font-display font-extrabold text-white mb-5" style={{ fontSize: 'clamp(26px, 3vw, 40px)' }}>
            Takıma Katılın
          </h2>
          <p className="mb-8 mx-auto" style={{ maxWidth: 500, fontSize: 16, color: C.lightText, lineHeight: 1.7 }}>
            Büyüyen ekibimize katkı sağlamak ve yeteneklerinizi kurumsal projeler üzerinde kullanmak istiyorsanız kariyer sayfamızı ziyaret edin.
          </p>
          <Link to="/kariyer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-sm font-semibold text-white transition-opacity hover:opacity-85"
            style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, minHeight: 52, fontFamily: 'var(--font-display)', letterSpacing: '0.1em', fontSize: 14 }}>
            AÇIK POZİSYONLAR
          </Link>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}
