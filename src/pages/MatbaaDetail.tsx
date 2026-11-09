import { useParams, Link } from 'react-router'
import { C } from '@/constants'
import matbaaHeroImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__3_.png'
import katalogImg from '@/imports/katalog_brosur_2.jpg'
import kartvizitImg from '@/imports/kartvizit_1.jpg'
import kartvizitSecondaryImg from '@/imports/kartvizit_2.jpg'
import evrakImg from '@/imports/kurumsal_evrak_1.jpg'
import evrakSecondaryImg from '@/imports/kurumsal_evrak_2.jpg'
import ambalajImg from '@/imports/ambalaj_etiket_1.jpg'
import ambalajSecondaryImg from '@/imports/gen_proj_3.jpg'
import dijitalBaskiImg from '@/imports/ChatGPT_Image_11_A_u_2026_12_58_16__1_-2.png'
import dijitalBaskiSecondaryImg from '@/imports/dijital_baski_2.jpg'
import ofsetBaskiImg from '@/imports/ChatGPT_Image_11_A_u_2026_13_12_07__3_-2.png'
import ofsetBaskiSecondaryImg from '@/imports/ofset_baski_2.jpg'
import ozelBaskiImg from '@/imports/ozel_baski_1.jpg'
import ozelBaskiSecondaryImg from '@/imports/ozel_baski_2.jpg'
import PageHero from '@/components/PageHero'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'

const DATA: Record<string, { title: string; img: string; secondaryImg: string; desc: string; specs: string[]; faq: { q: string; a: string }[] }> = {
  kartvizit: {
    title: 'Kartvizit', img: kartvizitImg, secondaryImg: kartvizitSecondaryImg,
    desc: 'Standart, lüks ve özel kesimli kartvizit seçenekleriyle ilk izlenimi güçlendirin.',
    specs: ['300–600 gr kuşe kağıt', 'Mat / Parlak selefon', 'Varak altın / gümüş', 'Özel kesim (lazer, kontur)', 'Folyo kabartma', 'Kraft ve özel kağıt'],
    faq: [{ q: 'Minimum kaç adet sipariş verebilirim?', a: 'Dijital baskıda 50 adetten, ofset baskıda 250 adetten sipariş alınmaktadır.' }],
  },
  'katalog-brosur': {
    title: 'Katalog ve Broşür', img: katalogImg, secondaryImg: matbaaHeroImg,
    desc: 'Ürün ve hizmetlerinizi tanıtan profesyonel baskılı materyaller.',
    specs: ['A4 / A5 / DL formatları', 'Tel dikiş veya iplik dikiş cilt', 'Spiral cilt', 'Sert kapak seçenekleri', '4+4 veya 4+0 renkli baskı'],
    faq: [{ q: 'Sayfa sayısı sınırı var mı?', a: 'Sayfa sayısı projeye göre belirlenmektedir. Minimum 4 sayfa olmak üzere 4 ve katları şeklinde sipariş verilebilir.' }],
  },
  'kurumsal-evraklar': {
    title: 'Kurumsal Evraklar', img: evrakImg, secondaryImg: evrakSecondaryImg,
    desc: 'Kurumsal kimliğinizi yansıtan antetli kağıt, zarf ve dosya çözümleri.',
    specs: ['Antetli Kağıt (A4/A5)', 'Kurumsal Zarf (DL/C4/C5)', 'Sunum ve Teklif Dosyası', 'Karton Klasör', 'Bloknot ve Küp Not'],
    faq: [{ q: 'Tekrar baskı için orijinal dosyalar saklanıyor mu?', a: 'Evet, tüm baskı dosyaları arşivlenmekte ve ihtiyaç halinde kolayca tekrar baskı yapılabilmektedir.' }],
  },
  'ambalaj-etiket': {
    title: 'Ambalaj ve Etiket', img: ambalajImg, secondaryImg: ambalajSecondaryImg,
    desc: 'Ürünlerinize değer katan özel ambalaj ve etiket tasarım ve üretimi.',
    specs: ['Kuşe, kraft, özel kağıt etiket', 'Yuvarlak / dikdörtgen / özel form', 'Mat ve parlak laminasyon seçenekleri', 'Özel mukavva kutu üretimi', 'Shrink etiket'],
    faq: [{ q: 'Gıda ambalajı için uygun materyaller sunuyor musunuz?', a: 'Evet, gıda sınıfı ambalaj materyalleri ve sertifikalı mürekkepler kullanılmaktadır.' }],
  },
  'dijital-baski': {
    title: 'Dijital Baskı', img: dijitalBaskiImg, secondaryImg: dijitalBaskiSecondaryImg,
    desc: 'Az adet, hızlı teslimat ve kişiselleştirme gerektiren projeler için ideal.',
    specs: ['1 adetten başlayan sipariş', 'Hızlı üretim ve teslimat', 'Değişken veri baskı (VDP)', 'Her boyut ve formatta üretim', '4 renk CMYK yüksek çözünürlük'],
    faq: [{ q: 'Kişiselleştirilmiş baskı yapabiliyor musunuz?', a: 'Evet, değişken veri baskı (VDP) teknolojisi ile her baskıda farklı isim, görsel veya bilgi kullanılabilir.' }],
  },
  'ofset-baski': {
    title: 'Ofset Baskı', img: ofsetBaskiImg, secondaryImg: ofsetBaskiSecondaryImg,
    desc: 'Yüksek adet baskılarda maliyet etkinliği ve mükemmel renk kalitesi.',
    specs: ['1.000 adetten başlayan ekonomik üretim', 'CMYK + Pantone renk seçenekleri', 'Geniş kağıt ve gramaj formatları', 'Çift taraflı yüksek hızlı baskı', 'Yüksek renk hassasiyeti'],
    faq: [{ q: 'Ofset ile dijital baskı arasındaki temel fark nedir?', a: 'Ofset baskı yüksek adetlerde birim maliyet avantajı sağlar ve renk doğruluğu çok yüksektir. Düşük adetlerde dijital baskı daha ekonomiktir.' }],
  },
  'ozel-baski': {
    title: 'Özel Baskı Teknikleri', img: ozelBaskiImg, secondaryImg: ozelBaskiSecondaryImg,
    desc: 'Varak, gofre, selefon ve UV gibi ileri baskı teknikleriyle materyallerinizi farklılaştırın.',
    specs: ['Altın / Gümüş Varak', 'Kör Gofre / Renkli Gofre', 'Mat / Parlak / Kadife Selefon', 'Kısmi (Spot) UV Lak', 'Özel Kontur Kesim', 'Kabartma Baskı'],
    faq: [{ q: 'Bu teknikler tüm baskı türlerine uygulanabilir mi?', a: 'Çoğu teknik kartvizit, katalog ve ambalaj gibi farklı ürünlere uygulanabilir. Tasarımınıza göre en uygun tekniği öneriyoruz.' }],
  },
}

export default function MatbaaDetail() {
  const { slug } = useParams<{ slug: string }>()
  const d = (slug && DATA[slug]) ? DATA[slug] : DATA.kartvizit

  return (
    <div style={{ background: '#fff' }}>
      <PageHero
        label="MATBAA VE BASKI"
        title={d.title}
        bgImage={d.img}
        bgColor={C.dark}
        breadcrumb={[
          { label: 'Faaliyet Alanları', path: '/faaliyet-alanlari' },
          { label: 'Matbaa ve Baskı', path: '/matbaa' },
          { label: d.title },
        ]}
      >
        <p className="mt-4 max-w-xl" style={{ fontSize: 16, color: C.lightText, lineHeight: 1.7 }}>{d.desc}</p>
      </PageHero>

      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div style={{ height: 220, borderRadius: 4, overflow: 'hidden', background: C.offwhite }}>
                <img src={d.img} alt={d.title} className="w-full h-full object-cover" />
              </div>
              <div style={{ height: 220, borderRadius: 4, overflow: 'hidden', background: C.offwhite }}>
                <img src={d.secondaryImg} alt={`${d.title} Üretim`} className="w-full h-full object-cover" />
              </div>
            </div>

            <h2 className="font-display font-extrabold mb-6" style={{ fontSize: 26, color: C.dark }}>Teknik Özellikler</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {d.specs.map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-4"
                  style={{ background: C.offwhite, borderRadius: 4, border: '1px solid rgba(0,0,0,0.07)' }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: C.purpleAccent }} />
                  <span style={{ color: C.gray, fontSize: 14 }}>{s}</span>
                </div>
              ))}
            </div>
            {d.faq.length > 0 && (
              <>
                <h2 className="font-display font-extrabold mb-5" style={{ fontSize: 22, color: C.dark }}>Sık Sorulan Sorular</h2>
                <FAQAccordion items={d.faq} />
              </>
            )}
          </div>
          <div>
            <div className="p-6" style={{ background: C.dark, borderRadius: 4, border: `1px solid rgba(123,97,255,0.2)` }}>
              <h4 className="font-display font-bold text-white mb-4" style={{ fontSize: 17 }}>Teklif Alın</h4>
              <p className="mb-5" style={{ fontSize: 14, color: C.lightText, lineHeight: 1.7 }}>
                {d.title} siparişi için hızlı teklif alın.
              </p>
              <Link to="/teklif-al"
                className="flex items-center justify-center w-full rounded-sm font-semibold text-white mb-3 transition-opacity hover:opacity-85"
                style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, padding: '14px 24px', minHeight: 52, fontFamily: 'var(--font-display)', fontSize: 14, letterSpacing: '0.08em' }}>
                ÜCRETSİZ TEKLİF AL
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title={`${d.title} Siparişinizi Verelim.`} />
    </div>
  )
}
