import { Link } from 'react-router'
import { C } from '@/constants'
import matbaaHeroImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__3_.png'
import katalogImg from '@/imports/katalog_brosur_2.jpg'
import kartvizitImg from '@/imports/kartvizit_1.jpg'
import evrakImg from '@/imports/kurumsal_evrak_1.jpg'
import ambalajImg from '@/imports/ambalaj_etiket_1.jpg'
import dijitalBaskiImg from '@/imports/ChatGPT_Image_11_A_u_2026_12_58_16__1_-2.png'
import ofsetBaskiImg from '@/imports/ChatGPT_Image_11_A_u_2026_13_12_07__3_-2.png'
import ozelBaskiImg from '@/imports/ozel_baski_1.jpg'
import PageHero from '@/components/PageHero'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'

const CATEGORIES = [
  { slug: 'kartvizit', title: 'Kartvizit', desc: 'Standart, lüks ve özel kesim kurumsal kartvizit çözümleri.', img: kartvizitImg },
  { slug: 'katalog-brosur', title: 'Katalog ve Broşür', desc: 'Çok sayfalı baskı, ürün katalogları ve tanıtım broşürleri.', img: katalogImg },
  { slug: 'kurumsal-evraklar', title: 'Kurumsal Evraklar', desc: 'Antetli kağıt, zarf, dosya ve kurumsal yazışma malzemeleri.', img: evrakImg },
  { slug: 'ambalaj-etiket', title: 'Ambalaj ve Etiket', desc: 'Ürün ambalajı, yapışkanlı etiket ve özel kutu üretimi.', img: ambalajImg },
  { slug: 'dijital-baski', title: 'Dijital Baskı', desc: 'Kısa baskı süreleri ve düşük adet için dijital baskı çözümleri.', img: dijitalBaskiImg },
  { slug: 'ofset-baski', title: 'Ofset Baskı', desc: 'Yüksek adet ve kalite gerektiren projeler için ofset baskı.', img: ofsetBaskiImg },
  { slug: 'ozel-baski', title: 'Özel Baskı Teknikleri', desc: 'Varak, gofre, selefon, lak, kabartma ve UV baskı teknikleri.', img: ozelBaskiImg },
]

const TECHNIQUES = [
  { name: 'Varak', desc: 'Altın, gümüş ve renkli metalik kaplama.' },
  { name: 'Gofre', desc: 'Kabartma ve çökertme dokulu baskı efekti.' },
  { name: 'Selefon', desc: 'Mat veya parlak yüzey kaplama.' },
  { name: 'Lak', desc: 'Seçimli veya tam yüzey lak baskı.' },
  { name: 'Özel Kesim', desc: 'Standart dışı şekil ve kontur kesim.' },
  { name: 'UV Baskı', desc: 'Efektli, dokulu UV baskı uygulamaları.' },
  { name: 'Kabartma', desc: 'Yüksek kabartma baskı tekniği.' },
  { name: 'Emboss', desc: 'Kör ve renkli emboss uygulamaları.' },
]

const FAQ = [
  { q: 'Dosyalarımı nasıl hazırlamalıyım?', a: 'AI, PDF veya TIFF formatında, 300 DPI ve 3mm taşma payı bırakılarak hazırlanmış dosyalar kabul edilmektedir.' },
  { q: 'Minimum baskı adedi nedir?', a: 'Baskı türüne göre değişmektedir. Dijital baskıda 1 adetten başlarken ofset baskıda daha yüksek adetler geçerlidir.' },
  { q: 'Renk doğruluğu nasıl garanti edilir?', a: 'Üretim öncesinde dijital veya baskı provası sunulmaktadır. Pantone renk sistemi ve kalibreli baskı makineleri kullanılmaktadır.' },
  { q: 'Teslimat süresi ne kadar?', a: 'Baskı türü, adet ve özel tekniklere bağlı olarak 2 - 10 iş günü arasında değişmektedir.' },
  { q: 'Tasarım hizmeti sunuyor musunuz?', a: 'Evet, kreatif ekibimiz baskı dosyalarını sıfırdan tasarlayabilir veya mevcut tasarımınızı baskıya hazır hale getirebilir.' },
]

export default function Matbaa() {
  return (
    <div style={{ background: C.offwhite }}>
      <PageHero
        label="MATBAA VE BASKI"
        title="Kurumsal Baskı"
        titleAccent="Kalite ve Hız"
        desc="Kartvizit, katalog, ambalaj ve özel baskı tekniklerinde Türkiye genelinde kurumsal müşterilere hizmet veriyoruz."
        bgImage={matbaaHeroImg}
        bgColor={C.dark}
        breadcrumb={[{ label: 'Faaliyet Alanları', path: '/faaliyet-alanlari' }, { label: 'Matbaa ve Baskı' }]}
      />

      {/* Categories */}
      <section style={{ padding: '88px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="mb-12">
            <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleMid, letterSpacing: '0.2em' }}>BASKI KATEGORİLERİ</span>
            <h2 className="font-display font-extrabold" style={{ fontSize: 'clamp(30px, 4vw, 46px)', color: C.dark }}>
              Her İhtiyaç İçin<br />Doğru Baskı Çözümü
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {CATEGORIES.map((cat) => (
              <Link key={cat.slug} to={`/matbaa/${cat.slug}`}
                className="group overflow-hidden transition-all duration-200 hover:-translate-y-1"
                style={{ background: '#fff', borderRadius: 4, border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <div style={{ height: 180, overflow: 'hidden', background: C.dark }}>
                  <img src={cat.img} alt={cat.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold mb-2 group-hover:text-purple-700 transition-colors" style={{ fontSize: 17, color: C.dark }}>{cat.title}</h3>
                  <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.65 }}>{cat.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold uppercase tracking-widest text-purple-600 group-hover:text-purple-700" style={{ letterSpacing: '0.12em' }}>
                    Detaylar
                    <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Special Techniques */}
      <section style={{ background: C.dark, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleAccent, letterSpacing: '0.2em' }}>ÖZEL ÜRETİM TEKNİKLERİ</span>
              <h2 className="font-display font-extrabold text-white mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.15 }}>
                Baskınızı<br />Öne Çıkarın
              </h2>
              <p style={{ fontSize: 16, color: C.lightText, lineHeight: 1.8 }}>
                Standart baskının ötesine geçin. Varak kaplama, gofre baskı ve özel kesim teknikleriyle markanızı rakiplerinizden farklılaştırın.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {TECHNIQUES.map((t) => (
                <div key={t.name} className="p-4" style={{ background: C.elevated, borderRadius: 4, border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="font-display font-bold text-white mb-1" style={{ fontSize: 14 }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: C.muted }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* File Prep Guide */}
      <section style={{ background: C.light, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="text-center mb-12">
            <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleMid, letterSpacing: '0.2em' }}>DOSYA HAZIRLAMA</span>
            <h2 className="font-display font-extrabold" style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', color: C.dark }}>Dosyalarınızı Nasıl Hazırlamalısınız?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Format', items: ['PDF (Press Quality)', 'AI (Düzenlenebilir)', 'TIFF (300 DPI)', 'EPS (Vektörel)'] },
              { title: 'Renk Modu', items: ['CMYK (4 renk baskı)', 'Pantone (spot renk)', 'Siyah-Beyaz: Grayscale', 'Özel kaplamalar ayrı katman'] },
              { title: 'Boyut Ayarı', items: ['3mm taşma payı (bleed)', 'Güvenli alan 5mm içeride', 'Doğru kesim çizgileri', 'Yüksek çözünürlük 300 DPI'] },
              { title: 'Fontlar', items: ['Fontları outline\'a çevirin', 'Gömülü fontlar kontrol edilmeli', 'Sistem fontu kullanmayın', 'Özel karakter desteği'] },
            ].map((section, i) => (
              <div key={i} className="p-6" style={{ background: '#fff', borderRadius: 4, border: '1px solid rgba(0,0,0,0.06)' }}>
                <h4 className="font-display font-bold mb-4" style={{ fontSize: 16, color: C.dark }}>{section.title}</h4>
                {section.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: C.purpleAccent }} />
                    <span style={{ fontSize: 13, color: C.gray, lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 className="font-display font-extrabold mb-10 text-center" style={{ fontSize: 'clamp(26px, 3vw, 38px)', color: C.dark }}>Sık Sorulan Sorular</h2>
          <FAQAccordion items={FAQ} />
        </div>
      </section>

      <CTABanner title="Baskı Projenizi Başlatalım." desc="Dosyalarınızı iletin, projenize özel fiyat teklifimizi 24 saat içinde sunalım." primaryLabel="TEKLİF AL" />
    </div>
  )
}
