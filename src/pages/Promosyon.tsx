import { useState } from 'react'
import { Link } from 'react-router'
import { C } from '@/constants'
import PageHero from '@/components/PageHero'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import ajandaCardImage from '@/imports/ajanda_5.jpg'
import corporateGiftImage from '@/imports/46235522cbd8ca66974b9898d93b7932-1.jpg'
import technologyPowerBankImage from '@/imports/d5acae3e317c4eb14a0684eea468a008.jpg'
import officeOrganizerImage from '@/imports/446310856511784dd1cddb8793216302.jpg'
import textilePoloImage from '@/imports/ccfe68089a8a2260970d23db9a1e99e0.jpg'
import travelLaptopBagImage from '@/imports/e9143a3c974d842403f13005edb4ad57-2.jpg'
import eventBannerImage from '@/imports/3b5e5a828d216eedb86acf82e3d4af5b.jpg'
import drinkSteelThermosImage from '@/imports/97b6c42e4bb45b2112d45b3b5d4e3c51-3.jpg'
import promosyonHeroImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__2_.png'
import customProdImg from '@/imports/ChatGPT_Image_11_A_u_2026_12_58_16__2_-2.png'

const PROMOTION_HERO_IMAGE = promosyonHeroImg

const CATEGORIES = [
  {
    slug: 'kurumsal-hediye-setleri',
    title: 'Kurumsal Hediye Setleri',
    desc: 'Markanızı yansıtan özenle hazırlanmış kurumsal hediye koleksiyonları.',
    img: corporateGiftImage,
    alt: 'Özenle hazırlanmış kurumsal hediye kutusu',
  },
  {
    slug: 'teknolojik-urunler',
    title: 'Teknolojik Ürünler',
    desc: 'Power bank, kulaklık, kablo ve akıllı aksesuarlarda marka baskısı.',
    img: technologyPowerBankImage,
    alt: 'Masa üzerinde teknolojik aksesuarlar',
  },
  {
    slug: 'ofis-urunleri',
    title: 'Ofis Ürünleri',
    desc: 'Kalemler, dosyalar, masa aksesuarları ve kurumsal ofis gereçleri.',
    img: officeOrganizerImage,
    alt: 'Kitaplar, klavye ve kahveden oluşan ofis masası',
  },
  {
    slug: 'tekstil-urunleri',
    title: 'Tekstil Ürünleri',
    desc: 'T-shirt, polo, sweatshirt, şapka ve kurumsal giyim çözümleri.',
    img: textilePoloImage,
    alt: 'Askıda duran baskıya uygun kurumsal tekstil ürünü',
  },
  {
    slug: 'canta-seyahat',
    title: 'Çanta ve Seyahat',
    desc: 'Sırt çantası, makyaj çantası, valiz etiketi ve seyahat aksesuarları.',
    img: travelLaptopBagImage,
    alt: 'Kurumsal çanta ve seyahat ürünleri',
  },
  {
    slug: 'etkinlik-urunleri',
    title: 'Etkinlik ve Organizasyon',
    desc: 'Fuar, kongre ve etkinlik ürünleri; balon, stand ve promosyon materyalleri.',
    img: eventBannerImage,
    alt: 'Kurumsal etkinlik ve organizasyon ürünleri',
  },
  {
    slug: 'termos-matara',
    title: 'Kupa, Termos ve Matara',
    desc: 'Logo baskılı kupalar, termos, matara ve içecek aksesuarları.',
    img: drinkSteelThermosImage,
    alt: 'Masa üzerinde termos ve kupa ürünleri',
  },
  {
    slug: 'ajanda-defter-kalem',
    title: 'Ajanda, Defter ve Kalem',
    desc: 'Hardcover ajanda, sert kapak defter, ahşap ve metal kalemler.',
    img: ajandaCardImage,
    alt: 'Ajanda üzerinde duran metal kalem',
  },
]

const CUSTOM_PRODUCTION_IMAGE = customProdImg

const FAQ_ITEMS = [
  { q: 'Minimum sipariş adedi nedir?', a: 'Minimum sipariş adedi seçilen ürün grubuna ve baskı tekniğine göre değişiklik göstermektedir. İhtiyacınıza uygun adet ve fiyatlandırma için teklif formumuzu doldurabilirsiniz.' },
  { q: 'Baskı yöntemi nasıl seçilir?', a: 'Ürünün yüzey malzemesine, logonuzun renk detaylarına ve kullanım alanına göre lazer gravür, serigrafi, UV veya tampon baskı tekniklerinden en uygun olanını uzman ekibimizle birlikte belirliyoruz.' },
  { q: 'Numune talep edebilir miyim?', a: 'Evet, toplu üretim öncesinde ürün kalitesini ve baskı uygulamasını görebilmeniz için numune hazırlıyoruz.' },
  { q: 'Ambalaj ve kutu tasarımı yapıyor musunuz?', a: 'Evet, kurumsal kimliğinize özel hediye kutusu ve ambalaj tasarımı ile anahtar teslim sunum çözümleri üretiyoruz.' },
  { q: 'Teslimat süresi ne kadar?', a: 'Teslimat süresi seçilen ürün modeline, baskı tekniğine ve sipariş adedine göre belirlenir. Net üretim ve teslimat takvimi teklif aşamasında paylaşılır.' },
]

function CategoryCard({ cat }: { cat: typeof CATEGORIES[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link to={`/promosyon/${cat.slug}`}
      className="block overflow-hidden"
      style={{ background: '#fff', borderRadius: 4, border: '1px solid rgba(0,0,0,0.07)', boxShadow: hovered ? '0 16px 48px rgba(72,45,127,0.12)' : '0 2px 10px rgba(0,0,0,0.05)', transform: hovered ? 'translateY(-3px)' : 'none', transition: 'all 0.3s ease' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="bg-brand-elevated" style={{ height: 200, overflow: 'hidden' }}>
        <img src={cat.img} alt={cat.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }} />
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold mb-2" style={{ fontSize: 17, color: C.dark }}>{cat.title}</h3>
        <p className="mb-4" style={{ fontSize: 14, color: C.gray, lineHeight: 1.65 }}>{cat.desc}</p>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest"
          style={{ color: hovered ? C.purpleAccent : C.purpleMid, letterSpacing: '0.12em' }}>
          İNCELE
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
        </span>
      </div>
    </Link>
  )
}

export default function Promosyon() {
  return (
    <div style={{ background: C.offwhite }}>
      <PageHero
        label="PROMOSYON ÜRÜNLERİ"
        title="Markanızı Her An"
        titleAccent="Hatırlatan Ürünler"
        desc="Kurumsal hediyelerden tekstil ürünlerine, teknolojik aksesuarlardan ajandaya kadar geniş ürün yelpazesinde tasarım, baskı ve üretim."
        bgImage={PROMOTION_HERO_IMAGE}
        bgColor={C.dark}
        imageStyle={{ marginRight: 0, marginBottom: 0, marginLeft: 0 }}
        breadcrumb={[{ label: 'Faaliyet Alanları', path: '/faaliyet-alanlari' }, { label: 'Promosyon Ürünleri' }]}
      />

      {/* Category grid */}
      <section style={{ padding: '88px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleMid, letterSpacing: '0.2em' }}>ÜRÜN KATEGORİLERİ</span>
              <h2 className="font-display font-extrabold leading-tight" style={{ fontSize: 'clamp(30px, 4vw, 46px)', color: C.dark }}>
                8 Kategoride<br />Kurumsal Promosyon
              </h2>
            </div>
            <p style={{ maxWidth: 360, fontSize: 16, color: C.gray, lineHeight: 1.7 }}>
              Her kategori için ürün seçimi, tasarım, baskı ve teslimat süreçlerini tek elden yönetiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CATEGORIES.map((cat) => <CategoryCard key={cat.slug} cat={cat} />)}
          </div>
        </div>
      </section>

      {/* Custom production */}
      <section style={{ background: C.dark, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleAccent, letterSpacing: '0.2em' }}>ÖZEL ÜRETİM</span>
            <h2 className="font-display font-extrabold text-white mb-5" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', lineHeight: 1.15 }}>
              Baskı ve Markalama<br />Teknikleri
            </h2>
            <p style={{ fontSize: 16, color: C.lightText, lineHeight: 1.8, marginBottom: 28 }}>
              Her ürün ve materyal için en uygun baskı yöntemini kullanarak markanızın kimliğini en iyi şekilde yansıtıyoruz.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {['Serigrafi Baskı', 'Pad Baskı', 'Lazer Gravür', 'Dijital Baskı', 'Nakış', 'UV Baskı', 'Folyo Transfer', 'Emboss'].map((t) => (
                <div key={t} className="flex items-center gap-2 py-2"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.purpleAccent }} />
                  <span style={{ fontSize: 14, color: C.lightText }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative" style={{ borderRadius: 4, overflow: 'hidden', height: 400 }}>
            <img src={CUSTOM_PRODUCTION_IMAGE} alt="Promosyon ürünlerine baskı uygulayan üretim ekibi"
              className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Ordering Process */}
      <section style={{ background: C.light, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="text-center mb-14">
            <span className="block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: C.purpleMid, letterSpacing: '0.2em' }}>SİPARİŞ SÜRECİ</span>
            <h2 className="font-display font-extrabold" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', color: C.dark }}>Sipariş Süreci Nasıl İşler?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: '01', title: 'Ürün Seçimi', desc: 'Kategori ve ürün tercihinizi belirleyin, numune talep edin.' },
              { num: '02', title: 'Tasarım', desc: 'Logonuzu ve kurumsal kimliğinizi ürüne entegre ediyoruz.' },
              { num: '03', title: 'Onay ve Üretim', desc: 'Dijital prova onayından sonra üretim başlıyor.' },
              { num: '04', title: 'Teslimat', desc: 'Paketlenmiş ürünler belirtilen adrese teslim ediliyor.' },
            ].map((step, i) => (
              <div key={i} className="p-6" style={{ background: '#fff', borderRadius: 4, border: '1px solid rgba(0,0,0,0.06)' }}>
                <div className="font-display font-extrabold mb-3" style={{ fontSize: 32, color: C.purpleAccent, lineHeight: 1 }}>{step.num}</div>
                <h4 className="font-display font-bold mb-2" style={{ fontSize: 17, color: C.dark }}>{step.title}</h4>
                <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 className="font-display font-extrabold mb-10 text-center" style={{ fontSize: 'clamp(26px, 3vw, 38px)', color: C.dark }}>Sık Sorulan Sorular</h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <CTABanner
        title="Promosyon Projenizi Birlikte Planlayalım."
        desc="Ürün seçiminden tasarıma, üretimden teslimata kadar tek noktadan kurumsal hizmet."
      />
    </div>
  )
}
