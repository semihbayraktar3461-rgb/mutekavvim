import { C } from '@/constants'
import yazilimHeroImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__5_.png'
import yazilimShowcaseImg from '@/imports/ChatGPT_Image_16_Tem_2026_15_15_28.png'
import PageHero from '@/components/PageHero'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'

const SERVICES = [
  { title: 'Kurumsal Yazılım', desc: 'İşletmenize özel ERP, CRM ve dahili yönetim sistemleri.' },
  { title: 'Mobil Uygulama', desc: 'iOS ve Android platformları için native ve cross-platform mobil uygulamalar.' },
  { title: 'Web Uygulamaları', desc: 'Ölçeklenebilir, güvenli ve yüksek performanslı web tabanlı çözümler.' },
  { title: 'Otomasyon Sistemleri', desc: 'İş süreçlerinizi otomatikleştiren akıllı otomasyon altyapıları.' },
  { title: 'Bakım ve Teknik Destek', desc: 'Geliştirilen sistemler için süregelen bakım, güncelleme ve teknik destek.' },
]

const FAQ = [
  { q: 'Proje süreci nasıl başlıyor?', a: 'Önce ihtiyaç analizi toplantısı yapılır, ardından teknik gereksinimler belirlenerek teklif sunulur.' },
  { q: 'Kaynak kodu teslim ediliyor mu?', a: 'Evet, proje tamamlandığında kaynak kodu, teknik dokümantasyon ve eğitim süreci müşteriye teslim edilir.' },
  { q: 'Mevcut sistemlerimizle entegrasyon yapabilir misiniz?', a: 'Evet, mevcut ERP, muhasebe, CRM ve üçüncü taraf API entegrasyonları gerçekleştirilmektedir.' },
  { q: 'Güvenlik yaklaşımınız nedir?', a: 'OWASP standartlarına uygun geliştirme, SSL zorunluluğu, düzenli güvenlik denetimleri ve veri şifreleme politikası uygulanmaktadır.' },
]

export default function Yazilim() {
  return (
    <div style={{ background: C.dark }}>
      <PageHero
        label="YAZILIM"
        title="İşletmenize Özel"
        titleAccent="Yazılım Çözümleri"
        desc="Kurumsal yazılım, mobil uygulama, web uygulaması ve otomasyon sistemlerinde özel geliştirme hizmetleri."
        bgImage={yazilimHeroImg}
        breadcrumb={[{ label: 'Faaliyet Alanları', path: '/faaliyet-alanlari' }, { label: 'Yazılım' }]}
      />

      <section style={{ padding: '88px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleAccent, letterSpacing: '0.2em' }}>YAZILIM HİZMETLERİ</span>
              <h2 className="font-display font-extrabold text-white mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', lineHeight: 1.15 }}>
                İhtiyacınıza Özel,<br />Ölçeklenebilir Sistemler
              </h2>
              <p className="mb-8" style={{ fontSize: 16, color: C.lightText, lineHeight: 1.8 }}>
                Hazır çözümlerin yetersiz kaldığı durumlarda işletmenizin ihtiyaçlarına tam uyum sağlayan özel yazılım çözümleri geliştiriyoruz. Keşif toplantısından canlıya geçişe kadar tüm süreçte yanınızdayız.
              </p>
              <div className="overflow-hidden" style={{ borderRadius: 6, height: 280, background: C.card, border: '1px solid rgba(255,255,255,0.08)' }}>
                <img src={yazilimShowcaseImg} alt="Mütekavvim Yazılım ve Dijital Sistemler" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {SERVICES.map((svc) => (
                <div key={svc.title} className="flex items-start gap-4 p-4"
                  style={{ background: C.elevated, borderRadius: 4, border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})` }}>
                    <svg viewBox="0 0 16 16" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 6l3 3-3 3M9 12h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white mb-1" style={{ fontSize: 15 }}>{svc.title}</h4>
                    <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dev Process */}
          <div className="mb-16">
            <h2 className="font-display font-extrabold text-white mb-10 text-center" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>Geliştirme Süreci</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {['Analiz', 'Tasarım', 'Geliştirme', 'Test', 'Canlıya Geçiş'].map((step, i) => (
                <div key={step} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-extrabold text-white mb-3"
                    style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, fontSize: 13 }}>
                    0{i + 1}
                  </div>
                  <span className="font-display font-bold text-white text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              { title: 'OWASP Uyumlu', desc: 'Güvenli kod geliştirme standartları.' },
              { title: 'SSL / Şifreleme', desc: 'Uçtan uca veri şifreleme altyapısı.' },
              { title: 'Düzenli Audit', desc: 'Periyodik güvenlik denetimleri.' },
              { title: 'KVKK Uyumlu', desc: 'Kişisel veri koruma mevzuatına uygunluk.' },
            ].map((item) => (
              <div key={item.title} className="p-5" style={{ background: C.elevated, borderRadius: 4, border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="text-2xl mb-3" style={{ color: C.purpleAccent }}>🔐</div>
                <h4 className="font-display font-bold text-white mb-1" style={{ fontSize: 15 }}>{item.title}</h4>
                <p style={{ fontSize: 13, color: C.muted }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <h2 className="font-display font-extrabold text-white mb-10 text-center" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>Sık Sorulan Sorular</h2>
            <FAQAccordion items={FAQ} dark />
          </div>
        </div>
      </section>

      <CTABanner title="Yazılım Projenizi Konuşalım." desc="Ücretsiz keşif toplantısı için bizimle iletişime geçin." primaryLabel="DANIŞMANLIK AL" />
    </div>
  )
}
