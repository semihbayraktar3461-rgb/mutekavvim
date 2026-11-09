import { C } from '@/constants'
import dijitalHeroImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__4_.png'
import webTasarimImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_26_54__1_.png'
import eTicaretImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_26_54__2_.png'
import sosyalMedyaImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_26_54__3_.png'
import dijitalReklamImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_26_54__4_.png'
import kurumsalKimlikImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_26_54__5_.png'
import videoProduksiyonImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_26_54__6_.png'
import PageHero from '@/components/PageHero'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'

const SERVICES = [
  { title: 'Web Tasarım', desc: 'Kurumsal, e-ticaret ve özel web sitesi tasarım ve geliştirme.', icon: 'M3 3h18v14H3zM7 21h10M12 17v4', img: webTasarimImg },
  { title: 'E-Ticaret', desc: 'Marka odaklı online satış platformları ve alışveriş deneyimi.', icon: 'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0', img: eTicaretImg },
  { title: 'Sosyal Medya Tasarımı', desc: 'Marka tonuna uygun, platforma özel görsel ve içerik tasarımı.', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', img: sosyalMedyaImg },
  { title: 'Dijital Reklam Kampanyaları', desc: 'Google, Meta, LinkedIn ve programatik dijital reklam yönetimi.', icon: 'M3 3h18v18H3zM3 9h18M9 21V9', img: dijitalReklamImg },
  { title: 'Kurumsal Kimlik', desc: 'Logo, renk paleti, tipografi ve kurumsal kimlik sistemi tasarımı.', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', img: kurumsalKimlikImg },
  { title: 'Video ve Prodüksiyon', desc: 'Tanıtım filmi, reklam spotu, animasyon ve sosyal medya videoları.', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z', img: videoProduksiyonImg },
]

const FAQ = [
  { q: 'Web sitesi teslimat süresi ne kadar?', a: 'Projenin kapsamına bağlı olarak 3 - 8 hafta arasında değişmektedir. Tahmini süre keşif aşamasında belirlenir.' },
  { q: 'SEO uyumlu tasarım yapıyor musunuz?', a: 'Evet, tüm web projelerimiz teknik SEO standartlarına uygun olarak geliştirilmektedir.' },
  { q: 'Sosyal medya için kaç tasarım üretiyorsunuz?', a: 'Aylık paketler proje bazında belirlenmektedir. Teklif aşamasında içerik hacmi ve platform sayısı netleştirilir.' },
  { q: 'Hazır bir kimliğimiz var. Sadece web tasarımı yaptırabilir miyiz?', a: 'Evet, mevcut kurumsal kimliğinize uyumlu web tasarımı yaptırabilirsiniz.' },
]

export default function Dijital() {
  return (
    <div style={{ background: C.dark }}>
      <PageHero
        label="DİJİTAL ÇÖZÜMLER"
        title="Markanızın Dijital"
        titleAccent="Varlığını İnşa Edin"
        desc="Web tasarımdan sosyal medyaya, kurumsal kimlikten video prodüksiyona kadar kapsamlı dijital çözümler."
        bgImage={dijitalHeroImg}
        breadcrumb={[{ label: 'Faaliyet Alanları', path: '/faaliyet-alanlari' }, { label: 'Dijital Çözümler' }]}
      />

      {/* Services */}
      <section style={{ padding: '88px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="mb-12">
            <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleAccent, letterSpacing: '0.2em' }}>HİZMETLERİMİZ</span>
            <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(30px, 4vw, 46px)' }}>
              6 Alanda Dijital<br />Çözüm Sunuyoruz
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="group overflow-hidden"
                style={{ background: C.card, borderRadius: 4, border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ height: 180, overflow: 'hidden' }}>
                  <img src={svc.img} alt={svc.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center mb-4"
                    style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})` }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d={svc.icon} />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-white mb-2" style={{ fontSize: 18 }}>{svc.title}</h3>
                  <p style={{ fontSize: 14, color: C.lightText, lineHeight: 1.65 }}>{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: C.elevated, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="text-center mb-12">
            <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleAccent, letterSpacing: '0.2em' }}>TASARIM SÜRECİ</span>
            <h2 className="font-display font-extrabold text-white" style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}>Nasıl Çalışıyoruz?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: '01', title: 'Keşif', desc: 'Markanızı, hedef kitlenizi ve rakiplerinizi analiz ediyoruz.' },
              { num: '02', title: 'Strateji', desc: 'Dijital varlık stratejisini ve içerik planını belirliyoruz.' },
              { num: '03', title: 'Tasarım', desc: 'Marka kimliğinize uygun görsel çözümler üretiyoruz.' },
              { num: '04', title: 'Yayın ve Takip', desc: 'Projeyi yayına alıyor ve performansı izliyoruz.' },
            ].map((step, i) => (
              <div key={i} className="p-6" style={{ background: C.card, borderRadius: 4, border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="font-display font-extrabold mb-3" style={{ fontSize: 28, color: C.purpleAccent }}>{step.num}</div>
                <h4 className="font-display font-bold text-white mb-2" style={{ fontSize: 16 }}>{step.title}</h4>
                <p style={{ fontSize: 14, color: C.lightText, lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 className="font-display font-extrabold text-white mb-10 text-center" style={{ fontSize: 'clamp(26px, 3vw, 38px)' }}>Sık Sorulan Sorular</h2>
          <FAQAccordion items={FAQ} dark />
        </div>
      </section>

      <CTABanner title="Dijital Dönüşümünüze Başlayalım." desc="Web sitenizden sosyal medyanıza, markanızın dijital kimliğini birlikte inşa edelim." />
    </div>
  )
}
