import { useParams, Link } from 'react-router'
import { C } from '@/constants'
import { billboardImg, cityPostImg } from '@/assets'
import billboardFormatImg from '@/imports/bb_plus_3.jpg'
import giantboardFormatImg from '@/imports/urunler_giantboard_1.jpg'
import clpFormatImg from '@/imports/clp_2.jpg'
import ledFormatImg from '@/imports/dijital_yeni_5a.jpg'
import binaGiydirmeFormatImg from '@/imports/204.jpg'
import aracGiydirmeFormatImg from '@/imports/Tramvay_5.jpg'
import durakFormatImg from '@/imports/y_clp_3.jpg'
import havalimaniFormatImg from '@/imports/TERM_NAL_DI_I_STAT_K__N_TELER.1.jpg'
import kuleboardImg from '@/imports/Kuleboard_1.png'
import ledAltImg from '@/imports/dijital_yeni_1a.jpg'
import binaAltImg from '@/imports/gen_proj_1.jpg'
import giantAltImg from '@/imports/gen_proj_7.jpg'
import clpAltImg from '@/imports/ChatGPT_Image_11_A_u_2026_14_05_18.png'
import durakAltImg from '@/imports/gen_proj_6.jpg'
import aracGiydirmeAltImg from '@/imports/arac_giydirme_2.jpg'
import havalimaniAltImg from '@/imports/havalimani_ic_mekan.jpg'
import PageHero from '@/components/PageHero'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'

const DATA: Record<string, {
  title: string; desc: string; longDesc: string;
  img: string; secondaryImg: string; formats: string[]; campaigns: string[];
  faq: { q: string; a: string }[]
}> = {
  billboard: {
    title: 'Billboard',
    desc: 'Yoğun trafik güzergahlarında yüksek görünürlük sağlayan büyük format reklam yüzeyleri.',
    longDesc: 'Billboard reklamcılığı, günde on binlerce araç ve yayaya ulaşan en güçlü açık hava formatlarından biridir. Şehir içi ana arterler, çevre yolları ve kavşak noktalarındaki stratejik konumlarda markanızı hedef kitlenizle buluşturuyoruz.',
    img: billboardFormatImg,
    secondaryImg: kuleboardImg,
    formats: ['8x3 m Standart Billboard', '12x4 m Büyük Billboard', '16x6 m Dev Billboard', '3m Yuvarlak Billboard'],
    campaigns: ['Marka bilinirliği', 'Ürün lansmanları', 'Etkinlik duyuruları', 'Mevsimsel kampanyalar'],
    faq: [
      { q: 'Billboard kiralama süresi ne kadar?', a: 'Standart kiralama süresi 2 hafta ile 6 ay arasında değişmektedir. Minimum ve maksimum süreler konuma göre farklılık gösterebilir.' },
      { q: 'Tasarım nasıl teslim edilir?', a: 'AI, PDF veya yüksek çözünürlüklü TIFF/JPG formatlarındaki dosyalarınızı sistemimize yükleyebilirsiniz. Tasarım desteğine ihtiyaç duymanız halinde ekibimiz size yardımcı olur.' },
      { q: 'Hangi şehirlerde konum sunuyorsunuz?', a: 'Türkiye genelinde başlıca şehirlerde konum ağımız mevcuttur. Konuma özel bilgi için teklif formumuzu doldurabilirsiniz.' },
    ],
  },
  giantboard: {
    title: 'Giantboard',
    desc: 'Şehir girişleri ve ana arterlerinde maksimum etki yaratan dev format panolar.',
    longDesc: 'Giantboard, şehir girişlerinde ve ana yollardaki varlığıyla birden fazla şeride hizmet eden dev reklam yüzeyleridir. Uzaktan dahi rahatlıkla görülebilen boyutlarıyla markalarınız için güçlü bir ilk izlenim oluşturur.',
    img: giantboardFormatImg,
    secondaryImg: giantAltImg,
    formats: ['24x6 m Giantboard', '30x8 m Mega Giantboard', '18x5 m Kompakt Giantboard'],
    campaigns: ['Ulusal kampanyalar', 'Şehir girişi markalama', 'Büyük ölçekli lansmanlar'],
    faq: [
      { q: 'Giantboard ile billboard arasındaki fark nedir?', a: 'Giantboard, billboarddan çok daha büyük bir formata sahiptir ve genellikle şehir girişlerinde ve otoyol kenarlarında konumlandırılır. İzlenme mesafesi ve görünürlük alanı çok daha geniştir.' },
      { q: 'Baskı kalitesi nasıl garanti edilir?', a: "Üretim sürecimizde solvent ve UV rezistans baskı teknolojileri kullanılmakta, her ürün kalite kontrol aşamasından geçirilmektedir." },
    ],
  },
  clp: {
    title: 'CLP / Citylight',
    desc: 'Yaya trafiğinin yoğun olduğu noktalarda dikkat çeken arka aydınlatmalı vitrinler.',
    longDesc: 'CLP (City Light Poster) vitrinleri, alışveriş merkezleri, bekleme alanları ve yoğun yaya trafiğinin olduğu noktalarda markanızı doğrudan hedef kitlenizle buluşturur. Gece aydınlatmalı yapısıyla 24 saat etkili görünürlük sağlar.',
    img: clpFormatImg,
    secondaryImg: clpAltImg,
    formats: ['1.2x1.8 m Standart CLP', '2x3 m Büyük Format Citylight'],
    campaigns: ['Perakende kampanyaları', 'Etkinlik promosyonları', 'Uygulama indirme kampanyaları'],
    faq: [
      { q: 'CLP vitrinleri aydınlatmalı mı?', a: 'Evet, tüm CLP vitrinlerimiz arka aydınlatmalıdır ve gece saatlerinde de yüksek görünürlük sağlar.' },
    ],
  },
  'led-ekran': {
    title: 'LED Ekran',
    desc: 'Dinamik içerik yönetimiyle 7/24 aktif dijital reklam ekranları.',
    longDesc: 'LED reklam ekranları, dinamik ve değiştirilebilir içerikleriyle geleneksel reklamcılığın ötesine geçer. Video, animasyon ve gerçek zamanlı veri entegrasyonu sayesinde markanız her an canlı ve güncel kalır.',
    img: ledFormatImg,
    secondaryImg: ledAltImg,
    formats: ['P4 İç Mekan LED', 'P6 Dış Mekan LED', 'P10 Büyük Format Outdoor LED'],
    campaigns: ['Dinamik içerik kampanyaları', 'Video reklamlar', 'Dönemsel promosyonlar', 'Etkinlik yayınları'],
    faq: [
      { q: 'İçerik nasıl değişir?', a: 'Dijital içerik uzaktan yönetim sistemi aracılığıyla anlık olarak güncellenebilir.' },
      { q: 'Hava koşullarından etkileniyor mu?', a: 'Dış mekan LED ekranlarımız IP65 koruma sınıfına sahiptir ve her türlü hava koşuluna dayanıklıdır.' },
    ],
  },
  'bina-giydirme': {
    title: 'Bina Giydirme',
    desc: 'Yüksek görünürlük sağlayan bina cephesi ve iskele branda uygulamaları.',
    longDesc: 'Bina giydirme uygulamaları, şehrin en uzak noktalarından bile fark edilen en güçlü reklam formatlarından biridir. İnşaat halindeki yapılar için iskele branda, mevcut binalar için cephe giydirme çözümleri sunuyoruz.',
    img: binaGiydirmeFormatImg,
    secondaryImg: binaAltImg,
    formats: ['İskele Branda', 'Cephe Vinil Giydirme', 'Mesh Branda (Rüzgâr Geçirgen)'],
    campaigns: ['Lansman etkinlikleri', 'Uzun dönem marka bilinirliği', 'İnşaat projesi tanıtımı'],
    faq: [
      { q: 'Montaj ne kadar sürer?', a: 'Binanın büyüklüğüne göre değişmekle birlikte ortalama 1 - 5 iş günü içinde tamamlanmaktadır.' },
    ],
  },
  'arac-giydirme': {
    title: 'Araç Giydirme',
    desc: "Araç filoları veya tekil araçlarda markanızı şehrin her köşesine taşıyın.",
    longDesc: "Araç giydirme, mobil reklam anlayışını zirveye taşır. Kurumsal araç filonuzdan tek bir araca kadar tüm ölçeklerde yüksek kalite baskı ve uygulama hizmeti sunuyoruz.",
    img: aracGiydirmeFormatImg,
    secondaryImg: aracGiydirmeAltImg,
    formats: ['Tam Araç Giydirme', 'Kısmi Giydirme', 'Cam Arkası Baskı', 'Filo Giydirme'],
    campaigns: ['Kurumsal kimlik güçlendirme', 'Filo markalama', 'Etkinlik araçları'],
    faq: [
      { q: 'Araçta hasar bırakır mı?', a: 'Kaliteli folyo kullanımı ve uzman montaj ekibimiz sayesinde araç boyasına zarar verilmeden uygulama yapılmakta ve kolayca sökülmektedir.' },
    ],
  },
  'durak-reklamlari': {
    title: 'Durak Reklamları',
    desc: 'Otobüs ve metro duraklarında hedef kitle ile yüz yüze temas.',
    longDesc: 'Durak reklamları, yolcuların bekleme süresinde markanıza tam dikkat verdiği değerli temas noktaları sunar. Şehrin işlek akslarında stratejik konumlandırma ile yüksek frekansta marka görünürlüğü sağlanır.',
    img: durakFormatImg,
    secondaryImg: durakAltImg,
    formats: ['Otobüs Durağı Afişi', 'Metro İstasyon Panosu', 'Işıklı Reklam Panosu'],
    campaigns: ['Yerel marka kampanyaları', 'Toplu taşıma odaklı hedefleme'],
    faq: [
      { q: 'Hangi şehirlerde durak reklamı yapabilirsiniz?', a: 'Başta İstanbul, Ankara ve İzmir olmak üzere Türkiye genelinde durak ve istasyon noktalarımız mevcuttur.' },
    ],
  },
  'havalimani-reklamlari': {
    title: 'Havalimanı Reklamları',
    desc: 'Ulusal ve uluslararası yolcuları hedefleyen havalimanı iç ve dış mekan uygulamaları.',
    longDesc: 'Havalimanları, yüksek gelir grubuna ve iş dünyası profesyonellerine ulaşmak için eşsiz bir ortam sunar. Terminal içi dijital panolardan dış cephe uygulamalarına kadar geniş bir format yelpazesi sunuyoruz.',
    img: havalimaniFormatImg,
    secondaryImg: havalimaniAltImg,
    formats: ['Terminal İçi Dijital Panel', 'Check-in Alanı Panosu', 'Bagaj Bandı Reklamı', 'Dış Cephe Branda'],
    campaigns: ['Premium marka iletişimi', 'Uluslararası kampanyalar', 'Turizm ve seyahat sektörü reklamları'],
    faq: [
      { q: 'Uluslararası havalimanlarında da hizmet sunuyor musunuz?', a: 'Evet, anlaşmalı olduğumuz havalimanı medya iş ortaklarımız aracılığıyla uluslararası havalimanlarında da kampanya yönetimi yapabiliyoruz.' },
    ],
  },
}

const DEFAULT_DATA = {
  title: 'Açık Hava Formatı',
  desc: 'Açık hava reklamcılığı formatı hakkında detaylı bilgi.',
  longDesc: 'Bu format hakkında daha fazla bilgi almak için lütfen bizimle iletişime geçin.',
  img: billboardImg as string,
  secondaryImg: cityPostImg as string,
  formats: ['Standart ve Özel Ölçü Seçenekleri'],
  campaigns: ['Kurumsal Marka İletişimi'],
  faq: [{ q: 'Daha fazla bilgi için ne yapmalıyım?', a: 'Teklif formunu doldurarak uzman ekibimizle iletişime geçebilirsiniz.' }],
}

export default function AcikHavaDetail() {
  const { slug } = useParams<{ slug: string }>()
  const d = (slug && DATA[slug]) ? DATA[slug] : { ...DEFAULT_DATA, title: slug?.replace(/-/g, ' ') || 'Format' }

  return (
    <div style={{ background: C.dark }}>
      <PageHero
        label="AÇIK HAVA REKLAMCILIĞI"
        title={d.title}
        bgImage={d.img}
        breadcrumb={[
          { label: 'Faaliyet Alanları', path: '/faaliyet-alanlari' },
          { label: 'Açık Hava Reklamcılığı', path: '/acik-hava-reklamciligi' },
          { label: d.title },
        ]}
      >
        <p className="mt-4 max-w-xl" style={{ fontSize: 17, color: C.lightText, lineHeight: 1.7 }}>{d.desc}</p>
      </PageHero>

      {/* Body */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p style={{ fontSize: 17, color: C.lightText, lineHeight: 1.85, marginBottom: 32 }}>{d.longDesc}</p>

            {/* Visual Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div style={{ height: 220, borderRadius: 4, overflow: 'hidden', background: C.card }}>
                <img src={d.img} alt={d.title} className="w-full h-full object-cover" />
              </div>
              <div style={{ height: 220, borderRadius: 4, overflow: 'hidden', background: C.card }}>
                <img src={d.secondaryImg} alt={`${d.title} Saha Uygulaması`} className="w-full h-full object-cover" style={{ objectPosition: slug === 'havalimani-reklamlari' ? 'center 30%' : 'center center' }} />
              </div>
            </div>

            <h3 className="font-display font-bold text-white mb-5" style={{ fontSize: 22 }}>Mevcut Formatlar</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {d.formats.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-4"
                  style={{ background: C.card, borderRadius: 4, border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: C.purpleAccent }} />
                  <span style={{ color: C.lightText, fontSize: 14 }}>{f}</span>
                </div>
              ))}
            </div>

            <h3 className="font-display font-bold text-white mb-5" style={{ fontSize: 22 }}>Uygun Kampanya Türleri</h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {d.campaigns.map((c, i) => (
                <span key={i} className="px-3 py-1.5 rounded-sm text-sm"
                  style={{ background: C.elevated, color: C.lightText, border: '1px solid rgba(255,255,255,0.07)' }}>{c}</span>
              ))}
            </div>

            <h3 className="font-display font-bold text-white mb-5" style={{ fontSize: 22 }}>Sık Sorulan Sorular</h3>
            <FAQAccordion items={d.faq} dark />
          </div>

          {/* Sidebar */}
          <div>
            <div className="p-6 mb-6" style={{ background: C.card, borderRadius: 4, border: `1px solid rgba(123,97,255,0.2)` }}>
              <h4 className="font-display font-bold text-white mb-4" style={{ fontSize: 18 }}>Teklif Alın</h4>
              <p className="mb-5" style={{ fontSize: 14, color: C.lightText, lineHeight: 1.7 }}>
                {d.title} için fiyat teklifi almak ister misiniz? 24 saat içinde uzman ekibimiz size dönecektir.
              </p>
              <Link to="/teklif-al"
                className="flex items-center justify-center w-full rounded-sm font-semibold text-white mb-3 transition-opacity hover:opacity-85"
                style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, padding: '14px 24px', minHeight: 52, fontFamily: 'var(--font-display)', letterSpacing: '0.08em', fontSize: 14 }}>
                ÜCRETSİZ TEKLİF AL
              </Link>
              <a href="https://wa.me/905445091544" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-full rounded-sm font-semibold transition-colors hover:bg-green-600"
                style={{ background: '#25D366', padding: '14px 24px', minHeight: 52, fontFamily: 'var(--font-display)', letterSpacing: '0.08em', fontSize: 14, color: '#fff' }}>
                WHATSAPP
              </a>
            </div>

            <div className="p-5" style={{ background: C.elevated, borderRadius: 4 }}>
              <h4 className="font-display font-bold text-white mb-4" style={{ fontSize: 15 }}>Diğer Formatlar</h4>
              {Object.entries(DATA).filter(([key]) => key !== slug).slice(0, 5).map(([key, val]) => (
                <Link key={key} to={`/acik-hava-reklamciligi/${key}`}
                  className="flex items-center gap-2 py-2.5 border-b last:border-b-0 transition-colors hover:text-purple-400"
                  style={{ color: C.lightText, borderColor: 'rgba(255,255,255,0.06)', fontSize: 14 }}>
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 4l4 4-4 4" />
                  </svg>
                  {val.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner title={`${d.title} Kampanyanızı Planlamaya Başlayalım.`} />
    </div>
  )
}
