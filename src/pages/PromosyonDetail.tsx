import { useState } from 'react'
import { useParams, Link } from 'react-router'
import { C } from '@/constants'
import corporateGiftImage from '@/imports/46235522cbd8ca66974b9898d93b7932-1.jpg'
import corporateTechImage from '@/imports/91d782abd117a8bb857c523a9a7f4055.jpg'
import corporateDrinkImage from '@/imports/8ad478f9426c01c66afddb335e9d644d.jpg'
import corporateNotebookImage from '@/imports/80aa6775df073e52213e9ef94efa0937.jpg'
import corporateWelcomeImage from '@/imports/ef54ede231bb2ce788a62f4cdabca9b01.jpg'
import corporateYearEndImage from '@/imports/4af29d1b60bf0a5879b59c8835f50c53.jpg'
import technologyHeadphonesImage from '@/imports/928d925d5bb1d340fcb1b69ead58e33c.jpg'
import technologyPowerBankImage from '@/imports/d5acae3e317c4eb14a0684eea468a008.jpg'
import technologyHubImage from '@/imports/81f28303191aeb1a4bd4793ee3c50eb3-1.jpg'
import technologyChargerImage from '@/imports/09692fc767a7c0d8560917bd465b0922-1.jpg'
import technologyPenImage from '@/imports/40f33189f8ae1c4b1d10a62d0525b2f9-2.jpg'
import technologyUsbImage from '@/imports/6b415336fccf340aad08f7f0a4bd38b8.jpg'
import officeOrganizerImage from '@/imports/446310856511784dd1cddb8793216302.jpg'
import officePenStandImage from '@/imports/de4435c885dcd391ab732221d3555aa0-2.jpg'
import officeStickyNotesImage from '@/imports/39cc4864828c19c0d89ec96c428ded1d.jpg'
import officeCardHolderImage from '@/imports/ff187b01e41d151b9636aa732f661ce6.jpg'
import officeMugImage from '@/imports/0f2b2c02fceaa8fe134c2c6e8b1f831f.jpg'
import officeMousePadImage from '@/imports/5140ee05c1a10d3d22a6fa7d535fe3b2.jpg'
import travelToteImage from '@/imports/8001692a4ce3bea58c7e3aa540299dc9.jpg'
import travelTagImage from '@/imports/a66a744a0200ac19d2b576d40126a008.jpg'
import travelPassportImage from '@/imports/a13988c29700eaceeac959904d5802ba.jpg'
import travelPouchImage from '@/imports/b0f5d656e74a5c31b83be643c8007a0a.jpg'
import travelLaptopBagImage from '@/imports/e9143a3c974d842403f13005edb4ad57-2.jpg'
import textilePoloImage from '@/imports/ccfe68089a8a2260970d23db9a1e99e0.jpg'
import textileSweatshirtImage from '@/imports/1cfe47062aac326d2e0e6b411e08d6cd.jpg'
import textileHoodieImage from '@/imports/91f5de13da4d549fb836835dc7660918.jpg'
import textileCapImage from '@/imports/4fc17d8550d9a949153d92573b1262c2-1.jpg'
import textileBeanieImage from '@/imports/82e6761c7e3dccc3406d01d41711ddfe-1.jpg'
import textileVestImage from '@/imports/3d97d23ca74bd434bf9469874641fd89-1.jpg'
import eventBannerImage from '@/imports/3b5e5a828d216eedb86acf82e3d4af5b.jpg'
import eventToteImage from '@/imports/8001692a4ce3bea58c7e3aa540299dc9-1.jpg'
import eventBalloonImage from '@/imports/f69135000eee1cff75d4844b93f803ae.jpg'
import eventLanyardImage from '@/imports/2325c495672dbba4adfd03fb1a2485e5.jpg'
import eventPenImage from '@/imports/8a65b5824a63f2fd199d6f32ccfa8fe7.jpg'
import eventDisplayImage from '@/imports/fcdade71cd70d5f3a6d111a8740e94d1.jpg'
import drinkCeramicMugImage from '@/imports/39fea5f49ed91809bfa9bb7942c6e31c-1.jpg'
import drinkTravelMugImage from '@/imports/4b1d778011c88e364454995061d7118a-3.jpg'
import drinkSteelThermosImage from '@/imports/97b6c42e4bb45b2112d45b3b5d4e3c51-3.jpg'
import drinkWaterBottleImage from '@/imports/63ea16e8fa7d8fd0e145c53a1a62a5f2-1.jpg'
import drinkGlassThermosImage from '@/imports/54d041ad6bf4dd5ad946379b74ce33cb-1.jpg'
import drinkSteelCupImage from '@/imports/aed72032e7c09953a604a305928c5bd4-4.jpg'
import ajanda1Image from '@/imports/ajanda_1.jpg'
import ajanda2Image from '@/imports/ajanda_2.jpg'
import ajanda3Image from '@/imports/ajanda_3.jpg'
import ajanda4Image from '@/imports/ajanda_4.jpg'
import ajanda5Image from '@/imports/ajanda_5.jpg'
import ajanda6Image from '@/imports/ajanda_6.jpg'
import PageHero from '@/components/PageHero'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'

const unsplash = (id: string, width = 1600, height = 640) =>
  `https://images.unsplash.com/${id}?w=${width}&h=${height}&fit=crop&auto=format&q=85`

const productImage = (source: string) =>
  source.startsWith('photo-') ? unsplash(source, 700, 500) : source

type Category = {
  title: string
  img: string
  desc: string
  products: string[]
  methods: string[]
  productImages: string[]
}

const CATEGORY_DATA: Record<string, Category> = {
  'kurumsal-hediye-setleri': {
    title: 'Kurumsal Hediye Setleri', img: corporateGiftImage,
    desc: 'Müşterilerinize, iş ortaklarınıza ve çalışanlarınıza değer katan özel hediye setleri.',
    products: ['Premium Deri Çanta Setleri', 'Teknoloji Aksesuarları Seti', 'Kahve ve Çay Seti', 'Ajanda + Kalem Seti', 'Welcome Kit', 'Yıl Sonu Hediye Seti'],
    methods: ['Lazer Gravür', 'Folyo Baskı', 'Özel Ambalaj'],
    productImages: [corporateGiftImage, corporateTechImage, corporateDrinkImage, corporateNotebookImage, corporateWelcomeImage, corporateYearEndImage],
  },
  'teknolojik-urunler': {
    title: 'Teknolojik Ürünler', img: technologyPowerBankImage,
    desc: 'Marka baskılı güç bankası, kulaklık, USB ve akıllı aksesuar çözümleri.',
    products: ['Power Bank', 'Kablosuz Kulaklık', 'USB Hub', 'Wireless Şarj Pad', 'Akıllı Kalem', 'USB Bellek'],
    methods: ['Lazer Gravür', 'Pad Baskı', 'Dijital Baskı'],
    productImages: [technologyPowerBankImage, technologyHeadphonesImage, technologyHubImage, technologyChargerImage, technologyPenImage, technologyUsbImage],
  },
  'ofis-urunleri': {
    title: 'Ofis Ürünleri', img: officeOrganizerImage,
    desc: 'Kurumsal kimliğinizi iş ortamına taşıyan logo baskılı ofis aksesuarları.',
    products: ['Masa Organizeri', 'Kalem Standı', 'Yapışkanlı Not', 'Kartlık', 'Kupa', 'Bilek Destekli Mouse Pad'],
    methods: ['Serigrafi', 'Lazer Gravür', 'UV Baskı'],
    productImages: [officeOrganizerImage, officePenStandImage, officeStickyNotesImage, officeCardHolderImage, officeMugImage, officeMousePadImage],
  },
  'tekstil-urunleri': {
    title: 'Tekstil Ürünleri', img: textilePoloImage,
    desc: 'Kurumsal giyim ve marka logosu baskılı tekstil ürünleri.',
    products: ['T-Shirt', 'Polo Yaka', 'Sweatshirt', 'Hoodie', 'Şapka', 'Bere', 'Yelek'],
    methods: ['Nakış', 'Serigrafi', 'Dijital Transfer', 'DTF Baskı'],
    productImages: [textilePoloImage, textilePoloImage, textileSweatshirtImage, textileHoodieImage, textileCapImage, textileBeanieImage, textileVestImage],
  },
  'canta-seyahat': {
    title: 'Çanta ve Seyahat Ürünleri', img: travelLaptopBagImage,
    desc: 'Seyahat aksesuarları ve kurumsal çanta çözümleri.',
    products: ['Sırt Çantası', 'Laptop Çantası', 'Bez Çanta', 'Valiz Etiketi', 'Pasaport Kılıfı', 'Makyaj Çantası'],
    methods: ['Nakış', 'Lazer Gravür', 'Serigrafi'],
    productImages: [travelLaptopBagImage, travelLaptopBagImage, travelToteImage, travelTagImage, travelPassportImage, travelPouchImage],
  },
  'etkinlik-urunleri': {
    title: 'Etkinlik ve Organizasyon', img: eventBannerImage,
    desc: 'Fuar, kongre, lansman ve etkinliklere özel promosyon ürünleri.',
    products: ['Roll-up Banner', 'Bez Çanta', 'Balon', 'İsimlik Kordon', 'Promosyon Kalem', 'El İlanı Standı'],
    methods: ['Serigrafi', 'Dijital Baskı', 'Sublimation'],
    productImages: [eventBannerImage, eventToteImage, eventBalloonImage, eventLanyardImage, eventPenImage, eventDisplayImage],
  },
  'termos-matara': {
    title: 'Kupa, Termos ve Matara', img: drinkSteelThermosImage,
    desc: 'Logo baskılı kupa, termos ve içecek aksesuarları.',
    products: ['Seramik Kupa', 'Seyahat Kupası', 'Paslanmaz Termos', 'BPA-Free Matara', 'Cam Termos', 'Çelik Bardak'],
    methods: ['Serigrafi', 'Lazer Gravür', 'Pad Baskı'],
    productImages: [drinkCeramicMugImage, drinkTravelMugImage, drinkSteelThermosImage, drinkWaterBottleImage, drinkGlassThermosImage, drinkSteelCupImage],
  },
  'ajanda-defter-kalem': {
    title: 'Ajanda, Defter ve Kalem', img: ajanda5Image,
    desc: 'Kurumsal ajanda, hardcover defter ve premium kalem koleksiyonları.',
    products: ['Hardcover Ajanda A5', 'Spiral Defter', 'Elastikli Defter', 'Metal Tükenmez', 'Ahşap Kalem Seti', 'Kalemlik Seti'],
    methods: ['Kabartma Baskı', 'Folyo', 'Lazer Gravür', 'Serigrafi'],
    productImages: [ajanda1Image, ajanda2Image, ajanda3Image, ajanda4Image, ajanda5Image, ajanda6Image],
  },
}

const FILTERS = ['Kullanım Alanı', 'Renk', 'Malzeme', 'Baskı Türü']

const FAQ = [
  { q: 'Özel renk ve ölçü talep edebilir miyim?', a: 'Evet, kurumsal kimliğinize uygun özel renk, ebat ve malzeme seçenekleriyle üretim yapabiliyoruz.' },
  { q: 'Numune talep edebilir miyim?', a: 'Evet, toplu üretim öncesinde ürün kalitesini ve baskı detaylarını inceleyebilmeniz için numune çalışması hazırlıyoruz.' },
  { q: 'Teslimat süresi ne kadar?', a: 'Teslimat süresi seçilen ürün modeline, baskı tekniğine ve sipariş adedine göre belirlenir. Net üretim ve teslimat takvimi teklif aşamasında paylaşılır.' },
]

export default function PromosyonDetail() {
  const { slug } = useParams<{ slug: string }>()
  const d = (slug && CATEGORY_DATA[slug]) ? CATEGORY_DATA[slug] : {
    title: slug?.replace(/-/g, ' ') || 'Kategori',
    img: unsplash('photo-1582391739755-dd7a200a1661'),
    desc: 'Bu kategori hakkında daha fazla bilgi almak için teklif formumuzu doldurun.',
    products: ['Özel üretim promosyon ürünü'],
    methods: ['Ürüne özel markalama'],
    productImages: ['photo-1582391739755-dd7a200a1661'],
  }

  const products = d.products.map((name, index) => ({
    id: index + 1,
    name,
    spec: 'Logo baskı ve markalama uygulamasına uygun.',
    img: productImage(d.productImages[index % d.productImages.length]),
    alt: `${d.title} kategorisinden ${name}`,
    imageStyle: slug === 'ofis-urunleri' && index === 0
      ? { marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0 }
      : undefined,
  }))

  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  return (
    <div style={{ background: '#fff' }}>
      <PageHero
        label="PROMOSYON ÜRÜNLERİ"
        title={d.title}
        bgImage={d.img}
        bgColor={C.dark}
        breadcrumb={[
          { label: 'Faaliyet Alanları', path: '/faaliyet-alanlari' },
          { label: 'Promosyon Ürünleri', path: '/promosyon' },
          { label: d.title },
        ]}
      >
        <p className="mt-4 max-w-xl" style={{ fontSize: 16, color: C.lightText, lineHeight: 1.7 }}>{d.desc}</p>
      </PageHero>

      {/* Filter bar */}
      <div style={{ background: C.offwhite, borderBottom: '1px solid rgba(0,0,0,0.07)', padding: '16px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }} className="flex flex-wrap items-center gap-3">
          <span style={{ fontSize: 13, color: C.muted }}>Filtrele:</span>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(activeFilter === f ? null : f)}
              className="px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200"
              style={{
                background: activeFilter === f ? `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})` : '#fff',
                color: activeFilter === f ? '#fff' : C.gray,
                border: `1px solid ${activeFilter === f ? 'transparent' : 'rgba(0,0,0,0.1)'}`,
                minHeight: 40,
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Main content */}
            <div className="lg:col-span-3">
              {/* Products */}
              <h2 className="font-display font-extrabold mb-8" style={{ fontSize: 28, color: C.dark }}>Ürünler</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                {products.map((p) => (
                  <div key={p.id} className="group overflow-hidden"
                    style={{ background: C.offwhite, borderRadius: 4, border: '1px solid rgba(0,0,0,0.07)' }}>
                    <div className="bg-brand-elevated overflow-hidden" style={{ height: 200 }}>
                      <img src={p.img} alt={p.alt} loading="lazy" style={p.imageStyle}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <h4 className="font-display font-bold mb-1" style={{ fontSize: 16, color: C.dark }}>{p.name}</h4>
                      <p className="mb-4" style={{ fontSize: 13, color: C.muted }}>{p.spec}</p>
                      <Link to={`/teklif-al?hizmet=promosyon&urun=${encodeURIComponent(p.name)}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm font-semibold text-xs text-white transition-opacity hover:opacity-85"
                        style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, letterSpacing: '0.08em', minHeight: 40 }}>
                        TEKLİF İSTE
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Customization methods */}
              <h2 className="font-display font-extrabold mb-6" style={{ fontSize: 24, color: C.dark }}>Markalama Yöntemleri</h2>
              <div className="flex flex-wrap gap-2 mb-10">
                {d.methods.map((m) => (
                  <span key={m} className="px-3 py-2 rounded-sm text-sm"
                    style={{ background: C.dark, color: C.lightText, border: `1px solid rgba(123,97,255,0.2)` }}>{m}</span>
                ))}
              </div>

              <FAQAccordion items={FAQ} />
            </div>

            {/* Sidebar */}
            <div>
              <div className="p-6 mb-5" style={{ background: C.dark, borderRadius: 4, border: `1px solid rgba(123,97,255,0.2)` }}>
                <h4 className="font-display font-bold text-white mb-4" style={{ fontSize: 17 }}>Teklif Alın</h4>
                <p className="mb-5" style={{ fontSize: 14, color: C.lightText, lineHeight: 1.7 }}>
                  Ürün adedi, baskı yöntemi ve teslimat süresi için fiyat teklifi alın.
                </p>
                <Link to="/teklif-al?hizmet=promosyon"
                  className="flex items-center justify-center w-full rounded-sm font-semibold text-white transition-opacity hover:opacity-85 mb-3"
                  style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, padding: '14px 24px', minHeight: 52, fontFamily: 'var(--font-display)', fontSize: 14, letterSpacing: '0.08em' }}>
                  ÜCRETSİZ TEKLİF AL
                </Link>
              </div>

              <div className="p-5" style={{ background: C.offwhite, borderRadius: 4, border: '1px solid rgba(0,0,0,0.06)' }}>
                <h4 className="font-display font-bold mb-4" style={{ fontSize: 15, color: C.dark }}>Diğer Kategoriler</h4>
                {Object.entries(CATEGORY_DATA).filter(([key]) => key !== slug).slice(0, 5).map(([key, val]) => (
                  <Link key={key} to={`/promosyon/${key}`}
                    className="flex items-center gap-2 py-2.5 border-b last:border-b-0 transition-colors hover:text-purple-600"
                    style={{ color: C.gray, borderColor: 'rgba(0,0,0,0.06)', fontSize: 14 }}>
                    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 4l4 4-4 4" />
                    </svg>
                    {val.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Bu Kategoride Ürün Sipariş Edin." primaryLabel="TEKLİF AL" />
    </div>
  )
}
