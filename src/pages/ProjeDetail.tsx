import { useParams, Link } from 'react-router'
import { C } from '@/constants'
import { billboardImg, cityPostImg } from '@/assets'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'

import proj1Img from '@/imports/gen_proj_1.jpg'
import proj2Img from '@/imports/gen_proj_2.jpg'
import proj3Img from '@/imports/gen_proj_3.jpg'
import proj4Img from '@/imports/gen_proj_4.jpg'
import proj5Img from '@/imports/gen_proj_5.jpg'
import proj6Img from '@/imports/gen_proj_6.jpg'
import proj7Img from '@/imports/gen_proj_7.jpg'
import proj8Img from '@/imports/gen_proj_8.jpg'
import binaSecondaryImg from '@/imports/204.jpg'
import billboardSecondaryImg from '@/imports/bb_plus_3.jpg'
import matbaaSecondaryImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__3_.png'
import promosyonSecondaryImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__2_.png'
import ledSecondaryImg from '@/imports/dijital_yeni_5a.jpg'
import clpSecondaryImg from '@/imports/clp_2.jpg'
import giantboardSecondaryImg from '@/imports/urunler_giantboard_1.jpg'
import dijitalSecondaryImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__4_.png'

const PROJECTS: Record<string, { title: string; client: string; category: string; city: string; year: string; img: string; galleryImg: string; challenge: string; solution: string; result: string }> = {
  'proje-1': {
    title: 'Maslak Tower Dev Cephe Giydirme Lansmanı',
    client: 'SKYLAND İSTANBUL',
    category: 'Açık Hava — Bina Giydirme',
    city: 'İstanbul (Maslak)',
    year: '2025',
    img: proj1Img,
    galleryImg: binaSecondaryImg,
    challenge: 'İstanbul Maslak iş merkezleri bölgesindeki 42 katlı gökdelenin dış cephesine yüksek rüzgar yükü dayanımlı, hava şartlarından etkilenmeyen ve gece estetiğini öne çıkarabilen 1.400 m² büyüklüğünde devasa bir lansman giydirmesinin yapılması.',
    solution: 'Rüzgar geçirgenliği %35 olan özel takviyeli delikli meş (mesh) vinil materyal üretildi. Profesyonel dağcı ekiplerimizle 72 saat içerisinde statik güvenlik önlemleri alınarak montaj tamamlandı. Gece görünürlüğü için 1.200 cd/m² parlaklığa sahip harici LED projeksiyon sistemi entegre edildi.',
    result: 'Maslak - Büyükdere Caddesi hattında günlük ortalama 350.000+ araç ve yolcuya doğrudan erişim sağlandı. Marka bilinirliğinde %185 artış elde edildi ve kampanya süresince lansman projesine rekor geri dönüş sağlandı.',
  },
  'proje-2': {
    title: 'Türkiye Geneli 5G Altyapı Billboard Ağı Operasyonu',
    client: 'TURKCELL',
    category: 'Açık Hava — Billboard',
    city: '81 İl Geneli',
    year: '2024',
    img: proj2Img,
    galleryImg: billboardSecondaryImg,
    challenge: 'Türkiye genelinde 81 ilde aynı gün ve saatte eş zamanlı başlatılacak 1.200 farklı billboard noktasının yüksek baskı kalitesi ve sıfır hata ile zamanında giydirilmesi.',
    solution: 'Bölgesel 4 ana üretim merkezimizde yüksek hızlı ofset-dijital hibrit baskı teknolojisi kullanıldı. 72 kişilik saha montaj ekibi eş zamanlı yönlendirilerek tüm mecralar 24 saat içerisinde lansmana hazır hale getirildi.',
    result: 'Kampanya ilk haftasında %94 hedef kitleye erişim oranına ulaşıldı. Türkiye çapında 15 milyonun üzerinde benzersiz kişiye fiziksel olarak temas edildi.',
  },
  'proje-3': {
    title: 'Sonbahar/Kış Lüks Katalog & Premium Ambalaj Serisi',
    client: 'İLVİ AYAKKABI',
    category: 'Matbaa & Baskı',
    city: 'İstanbul',
    year: '2025',
    img: proj3Img,
    galleryImg: matbaaSecondaryImg,
    challenge: 'Lüks segment ayakkabı ve aksesuar koleksiyonu için dokunsal hissi yüksek, renk doğruluğu kusursuz premium sert kılıflı katalog ve özel ayakkabı kutu ambalajlarının tasarımı ve üretimi.',
    solution: '350 gr özel dokulu fantezi kağıt üzerine kısmi kadife selefon, gömme altın varak ve 6 renkli Heidelberg baskı makinelerimizde mikron hassasiyetinde üretim yapıldı. Tamamı matbaa tesislerimizde el işçiliği montajla şekillendirildi.',
    result: 'Türkiye ve Avrupa genelindeki 45 konsept mağazaya lansmandan 3 gün önce teslimat sağlandı. Mağaza içi VIP müşteri harcamalarında %42 dönüşüm artışı kaydedildi.',
  },
  'proje-4': {
    title: 'Kurumsal VIP Hediye Seti & Merchandising Üretimi',
    client: 'LUFIAN EXECUTIVE',
    category: 'Promosyon Ürünleri',
    city: 'İstanbul',
    year: '2025',
    img: proj4Img,
    galleryImg: promosyonSecondaryImg,
    challenge: 'Lufian kurumsal yönetici kadrosu ve iş ortakları için özel tasarlanan hakiki deri ajanda, mat gümüş tükenmez kalem, powerbank ve termos kombinasyonlu prestij hediye setlerinin hazırlanması.',
    solution: 'Tamamı lazer gravür marka logosu baskılı, özel tasarım ahşap kaplamalı hediye kutusunda kişiselleştirilmiş 2.500 adet VIP kit üretildi. Lojistik departmanımız tarafından kişiye özel teslimat ağı yönetildi.',
    result: 'Müşteri memnuniyet anketlerinde %99.2 başarı oranına ulaşıldı. Yıl sonu kurumsal hediye algısında marka prestiji en üst seviyeye taşındı.',
  },
  'proje-5': {
    title: 'Zorlu Center Meydan 4K Ultra HD Dış Mekan LED Ekran',
    client: 'ZORLU CENTER AVM',
    category: 'Açık Hava — LED Ekran',
    city: 'İstanbul (Zincirlikuyu)',
    year: '2024',
    img: proj5Img,
    galleryImg: ledSecondaryImg,
    challenge: 'Doğrudan gün ışığı alan açık alanda maksimum parlaklık sunan, IP65 hava koşulları korumasına sahip, 7/24 kesintisiz çalışabilecek dev ekran kurulumu.',
    solution: 'P3.9mm piksel aralıklı, 6.500 nits yüksek parlaklık veren enerji tasarruflu SMD LED paneller tercih edildi. Uzaktan bulut yönetimli içerik sunucusu ile anlık reklam akışı sağlandı.',
    result: 'Ekran reklam yayın kiralama kapasitesinde %100 doluluk oranına ulaşıldı. Ekran önündeki yaya bekleme ve izleme süresinde %300 artış kaydedildi.',
  },
  'proje-6': {
    title: 'Kentsel Raket (CLP) & Durak Reklam Kampanyası',
    client: 'ANADOLU SİGORTA',
    category: 'Açık Hava — CLP / Citylight',
    city: 'Ankara',
    year: '2025',
    img: proj6Img,
    galleryImg: clpSecondaryImg,
    challenge: 'Başkentin en işlek 450 otobüs durağı ve kentsel raket noktalarında gece ve gündüz aynı renk canlılığını koruyan yüksek kaliteli reklam çalışması.',
    solution: '150gr Backlit raket kağıdına çift yönlü (blockout) özel matbaa baskı tekniği uygulandı. İçten aydınlatmalı durak panolarında ışık kırılması olmadan %100 renk doygunluğu sağlandı.',
    result: 'Günlük ortalama 1.2 milyon kent sakinine doğrudan görsel temas kuruldu. Dijital kasko teklif sorgulamalarında kampanya döneminde %65 artış ölçümlendi.',
  },
  'proje-7': {
    title: 'Otoyol Dev Giantboard Totem Reklam Kulesi',
    client: 'TOGG MOBİLİTE',
    category: 'Açık Hava — Giantboard',
    city: 'Kocaeli / Osmangazi',
    year: '2025',
    img: proj7Img,
    galleryImg: giantboardSecondaryImg,
    challenge: 'Osmangazi Köprüsü bağlantı yolunda yüksek hızda seyreden sürücülerin 3 saniye içerisinde fark edebileceği devasa statik totem uygulaması.',
    solution: '18x6 metre boyutlarında çift taraflı çelik konstrüksiyon totem inşa edildi. Güneş enerjisi panelleriyle desteklenen yeni nesil LED projektör aydınlatma sistemi entegre edildi.',
    result: 'Aylık 4.5 milyon araç geçişine sahip stratejik lokasyonda TOGG mobilite lansmanı başarıyla duyuruldu.',
  },
  'proje-8': {
    title: 'Dinamik Dijital Reklam & Sosyal Medya İçerik Kampanyası',
    client: 'TRENDYOL EXPRESS',
    category: 'Dijital Çözümler',
    city: 'İstanbul',
    year: '2026',
    img: proj8Img,
    galleryImg: dijitalSecondaryImg,
    challenge: 'E-ticaret teslimat ağı lansmanı için statik, hareketli (motion graphics) ve interaktif dijital mecralara uygun 120 farklı formatta görsel tasarım üretimi.',
    solution: 'Kullanıcı odaklı dinamik HTML5 banner setleri, sosyal medya animasyonları ve ekran uyumlu dijital içerikler 48 saatlik hızlı prodüksiyonla teslim edildi.',
    result: 'Dijital mecralarda %3.8 Tıklama Oranı (CTR) elde edilerek e-ticaret sektör ortalamasının 2.4 kat üzerinde performans gösterildi.',
  },
}

export default function ProjeDetail() {
  const { slug } = useParams<{ slug: string }>()
  const proj = (slug && PROJECTS[slug]) ? PROJECTS[slug] : PROJECTS['proje-1']

  const img = proj.img || billboardImg as string
  const galleryImg = proj.galleryImg || cityPostImg as string
  const title = proj.title

  return (
    <div style={{ background: C.dark }}>
      <PageHero
        label={proj.category}
        title={title}
        bgImage={img}
        breadcrumb={[
          { label: 'Projeler', path: '/projeler' },
          { label: title },
        ]}
      />

      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Project info bar */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { label: 'Müşteri', value: proj.client },
                { label: 'Şehir', value: proj.city },
                { label: 'Yıl', value: proj.year },
              ].map((item) => (
                <div key={item.label} className="p-4" style={{ background: C.elevated, borderRadius: 4, border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="text-xs uppercase tracking-widest mb-1" style={{ color: C.muted, letterSpacing: '0.14em', fontSize: 10 }}>{item.label}</div>
                  <div className="font-display font-bold text-white" style={{ fontSize: 15 }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 22 }}>Müşteri İhtiyacı</h2>
              <p style={{ fontSize: 16, color: C.lightText, lineHeight: 1.8 }}>{proj.challenge}</p>
            </div>

            <div className="mb-8">
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 22 }}>Çözüm</h2>
              <p style={{ fontSize: 16, color: C.lightText, lineHeight: 1.8 }}>{proj.solution}</p>
            </div>

            <div className="mb-10">
              <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 22 }}>Sonuç</h2>
              <div className="p-5" style={{ background: C.elevated, borderRadius: 4, border: `1px solid rgba(123,97,255,0.2)` }}>
                <p style={{ fontSize: 16, color: C.lightText, lineHeight: 1.8, fontStyle: 'italic' }}>{proj.result}</p>
              </div>
            </div>

            {/* Project Gallery */}
            <h2 className="font-display font-bold text-white mb-5" style={{ fontSize: 22 }}>Proje Görselleri</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div style={{ height: 220, background: C.card, borderRadius: 4, overflow: 'hidden' }}>
                <img src={img} alt={title} className="w-full h-full object-cover" />
              </div>
              <div style={{ height: 220, background: C.card, borderRadius: 4, overflow: 'hidden' }}>
                <img src={galleryImg} alt={`${title} — Saha Uygulaması`} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="p-6 mb-5" style={{ background: C.elevated, borderRadius: 4 }}>
              <h4 className="font-display font-bold text-white mb-4" style={{ fontSize: 16 }}>Proje Özeti</h4>
              {[
                { label: 'Kategori', value: proj?.category || '—' },
                { label: 'Müşteri', value: proj?.client || '—' },
                { label: 'Konum', value: proj?.city || '—' },
                { label: 'Yıl', value: proj?.year || '—' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between py-2.5"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: 13, color: C.muted }}>{row.label}</span>
                  <span style={{ fontSize: 13, color: C.lightText }}>{row.value}</span>
                </div>
              ))}
            </div>

            <Link to="/teklif-al"
              className="flex items-center justify-center w-full rounded-sm font-semibold text-white transition-opacity hover:opacity-85 mb-4"
              style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, padding: '16px 24px', minHeight: 52, fontFamily: 'var(--font-display)', fontSize: 14, letterSpacing: '0.08em' }}>
              BENZERİ BİR PROJE İSTİYORUM
            </Link>

            <Link to="/projeler" className="flex items-center justify-center gap-2 text-sm font-semibold transition-colors hover:text-white"
              style={{ color: C.muted }}>
              ← Tüm Projelere Dön
            </Link>
          </div>
        </div>
      </section>

      <CTABanner title={"Bu Projeden İlham\nAldınız mı?"} desc="Markanız için benzer bir proje planlayalım." primaryLabel="TEKLİF AL" />
    </div>
  )
}
