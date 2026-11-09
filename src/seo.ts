export interface PageMeta {
  title: string
  description: string
  ogType?: 'website' | 'article'
}

export const SITE_URL = 'https://www.mutekavvim.com'
export const SITE_NAME = 'Mütekavvim'
export const DEFAULT_META: PageMeta = {
  title: 'Mütekavvim | Açık Hava Reklamcılığı, Matbaa, Promosyon ve Dijital Çözümler',
  description:
    'Mütekavvim; açık hava reklamcılığı, kurumsal matbaa ve baskı, promosyon ürünleri, dijital ajans, yazılım ve kurumsal yapı alanlarında uçtan uca üretim ve uygulama çözümleri sunar.',
  ogType: 'website',
}

export const ROUTE_META: Record<string, PageMeta> = {
  '/': DEFAULT_META,
  '/faaliyet-alanlari': {
    title: 'Faaliyet Alanları | Mütekavvim',
    description:
      'Açık hava reklamcılığı, matbaa ve baskı, promosyon ürünleri, dijital çözümler, yazılım ve inşaat alanlarında entegre kurumsal hizmetlerimiz.',
  },

  // Açık Hava Reklamcılığı
  '/acik-hava-reklamciligi': {
    title: 'Açık Hava Reklamcılığı | Billboard, CLP, LED Ekran ve Bina Giydirme | Mütekavvim',
    description:
      'Türkiye genelinde 81 ilde billboard, giantboard, CLP raket, dijital LED ekran, bina cephe giydirme, araç giydirme, durak ve havalimanı reklamları.',
  },
  '/acik-hava-reklamciligi/billboard': {
    title: 'Billboard Reklamları ve Kiralama | Mütekavvim Açık Hava',
    description:
      'Yoğun trafik güzergahları ve ana arterlerde yüksek görünürlük sağlayan standart ve ışıksız/ışıklı billboard reklam kiralama ve baskı çözümleri.',
  },
  '/acik-hava-reklamciligi/giantboard': {
    title: 'Giantboard ve Megaboard Reklamları | Mütekavvim Açık Hava',
    description:
      'Şehir girişleri, otoyollar ve ana arterlerde maksimum etki yaratan dev format giantboard ve megaboard açık hava reklam üniteleri.',
  },
  '/acik-hava-reklamciligi/clp': {
    title: 'CLP / Citylight (Raket Pano) Reklamları | Mütekavvim Açık Hava',
    description:
      'Yaya trafiğinin yoğun olduğu caddeler, AVM çevreleri ve duraklarda 24 saat arka aydınlatmalı CLP (City Light Poster) raket pano reklamları.',
  },
  '/acik-hava-reklamciligi/led-ekran': {
    title: 'Dijital LED Ekran Reklamları | Mütekavvim Açık Hava',
    description:
      'Kent meydanları ve ana kavşaklarda yüksek parlaklığa sahip 4K dış mekan dijital LED ekran reklamları ve dinamik video kampanya yönetimi.',
  },
  '/acik-hava-reklamciligi/bina-giydirme': {
    title: 'Bina Cephe Giydirme ve İskele Reklamları | Mütekavvim Açık Hava',
    description:
      'Yüksek görünürlüklü bina cephesi mesh branda, one-way vision cam kaplama ve dev cephe reklam uygulamaları.',
  },
  '/acik-hava-reklamciligi/arac-giydirme': {
    title: 'Kurumsal Araç ve Filo Giydirme | Mütekavvim Açık Hava',
    description:
      'Ticari araç filoları ve binek araçlar için cast folyo kaplama, tasarım, üretim ve profesyonel montaj hizmeti.',
  },
  '/acik-hava-reklamciligi/durak-reklamlari': {
    title: 'Otobüs, Metro ve Tramvay Durak Reklamları | Mütekavvim Açık Hava',
    description:
      'Toplu taşıma duraklarında hedef kitle ile göz hizasında uzun süreli temas sağlayan durak ve istasyon reklam üniteleri.',
  },
  '/acik-hava-reklamciligi/havalimani-reklamlari': {
    title: 'Havalimanı İç ve Dış Mekan Reklamları | Mütekavvim Açık Hava',
    description:
      'Ulusal ve uluslararası yolcuları hedefleyen havalimanı terminal içi dijital ekranlar, lightbox panolar ve dış alan reklam uygulamaları.',
  },

  // Promosyon
  '/promosyon': {
    title: 'Kurumsal Promosyon Ürünleri ve Hediye Setleri | Mütekavvim',
    description:
      'Logolu kurumsal hediye setleri, termos, ajanda, kalem, teknoloji ürünleri, tekstil ve fuar promosyon ürünlerinde özel üretim ve baskı.',
  },
  '/promosyon/kurumsal-hediye-setleri': {
    title: 'Kurumsal VIP Hediye Setleri ve Hoş Geldin Kitleri | Mütekavvim Promosyon',
    description:
      'Özel tasarım kutulu VIP kurumsal hediye setleri, yeni çalışan hoş geldin (onboarding) kitleri ve yönetici hediye paketleri.',
  },
  '/promosyon/teknolojik-urunler': {
    title: 'Promosyon Teknolojik Ürünler | Powerbank ve USB Bellek | Mütekavvim',
    description:
      'Logolu powerbank, kablosuz şarj standı, USB bellek, Bluetooth hoparlör ve kurumsal teknoloji promosyon ürünleri.',
  },
  '/promosyon/ofis-urunleri': {
    title: 'Promosyon Ofis ve Masaüstü Ürünleri | Mütekavvim Promosyon',
    description:
      'Kurumsal masa takvimi, sümen takımı, küp bloknot, kalemlik ve logolu masaüstü ofis aksesuarları.',
  },
  '/promosyon/tekstil-urunleri': {
    title: 'Kurumsal Promosyon Tekstil Ürünleri | Tişört, Polar ve Şapka | Mütekavvim',
    description:
      'Nakış ve serigrafi baskılı kurumsal polo yaka tişört, sweatshirt, polar, yelek, iş kıyafetleri ve şapka üretimi.',
  },
  '/promosyon/canta-seyahat': {
    title: 'Promosyon Çanta, Laptop Çantası ve Bez Çanta | Mütekavvim',
    description:
      'Kurumsal logolu laptop ve sırt çantaları, fuar bez (ham bez / tela) çantalar, evrak çantaları ve seyahat aksesuarları.',
  },
  '/promosyon/etkinlik-urunleri': {
    title: 'Fuar ve Etkinlik Promosyon Ürünleri | Boyun İpi ve Yaka Kartı | Mütekavvim',
    description:
      'Kongre, lansman ve fuarlar için baskılı boyun askı ipi (lanyard), yaka kartı, rozet, anahtarlık ve etkinlik kitleri.',
  },
  '/promosyon/termos-matara': {
    title: 'Promosyon Termos, Çelik Matara ve Seramik Kupa | Mütekavvim',
    description:
      'Lazer kazıma ve UV baskılı paslanmaz çelik termos, sporcu matarası ve kurumsal logolu porselen/seramik kupa bardaklar.',
  },
  '/promosyon/ajanda-defter-kalem': {
    title: 'Promosyon Ajanda, Tarihsiz Defter ve Metal Kalem | Mütekavvim',
    description:
      'Gofre ve varak baskılı termo deri ajanda, spiralli defter, VIP roller kalem setleri ve kurumsal geri dönüşümlü kalemler.',
  },

  // Matbaa ve Baskı
  '/matbaa': {
    title: 'Kurumsal Matbaa ve Baskı Çözümleri | Ofset ve Dijital Baskı | Mütekavvim',
    description:
      'Kartvizit, ürün kataloğu, broşür, kurumsal evraklar, özel kutu ambalaj, etiket, ofset baskı, dijital baskı ve özel baskı teknikleri.',
  },
  '/matbaa/kartvizit': {
    title: 'Kurumsal Kartvizit Baskı | Varak, Gofre ve Özel Kesim | Mütekavvim Matbaa',
    description:
      'Standart, sıvama, tuale dokulu, altın/gümüş varak yaldızlı, kabartma (gofre) ve kısmi laklı lüks kurumsal kartvizit basımı.',
  },
  '/matbaa/katalog-brosur': {
    title: 'Katalog ve Broşür Baskı | Kurumsal Tanıtım Materyalleri | Mütekavvim Matbaa',
    description:
      'İplik dikişli, Amerikan ciltli veya tel dikişli çok sayfalı ürün katalogları, kurumsal dergiler ve kırımlı tanıtım broşürleri.',
  },
  '/matbaa/kurumsal-evraklar': {
    title: 'Kurumsal Evrak Baskı | Antetli Kağıt, Zarf ve Cepli Dosya | Mütekavvim Matbaa',
    description:
      'Kurumsal kimliğinize uygun antetli kağıt, diplomat ve torba zarf, cepli sunum dosyası, küp not ve bloknot üretimi.',
  },
  '/matbaa/ambalaj-etiket': {
    title: 'Özel Kutu Ambalaj ve Rulo Etiket Üretimi | Mütekavvim Matbaa',
    description:
      'Özel kesim mukavva ve karton ürün kutuları, lüks mıknatıslı kutular, rulo yapışkanlı etiket ve kuşe/kraft etiket baskısı.',
  },
  '/matbaa/dijital-baski': {
    title: 'Dijital Baskı Çözümleri | Hızlı ve Düşük Adetli Baskı | Mütekavvim Matbaa',
    description:
      'Acil ve düşük tirajlı kurumsal işler için yüksek çözünürlüklü tabaka ve geniş format dijital baskı çözümleri.',
  },
  '/matbaa/ofset-baski': {
    title: 'Endüstriyel Ofset Baskı Hizmetleri | Yüksek Tiraj ve Kalite | Mütekavvim Matbaa',
    description:
      'Yüksek adetli katalog, broşür, kutu ve kurumsal materyallerde CMYK ve Pantone renk garantili ofset baskı üretimi.',
  },
  '/matbaa/ozel-baski': {
    title: 'Özel Baskı Teknikleri | Varak Yaldız, Gofre ve Spot UV Lak | Mütekavvim Matbaa',
    description:
      'Altın/gümüş sıcak varak yaldız, kör gofre kabartma, kadife selefon, kısmi (spot) UV lak ve lazer özel kesim baskı uygulamaları.',
  },

  // Dijital Çözümler
  '/dijital': {
    title: 'Dijital Ajans Çözümleri | Web Tasarım, Sosyal Medya ve Kurumsal Kimlik | Mütekavvim',
    description:
      'Modern web tasarım, e-ticaret, sosyal medya yönetimi, dijital reklam kampanyaları, kurumsal kimlik tasarımı ve video prodüksiyon.',
  },
  '/dijital/web-tasarim': {
    title: 'Kurumsal Web Tasarım ve UI/UX Hizmetleri | Mütekavvim Dijital',
    description:
      'Mobil uyumlu, hızlı ve SEO odaklı modern kurumsal web sitesi tasarımı ve kullanıcı deneyimi (UI/UX) çözümleri.',
  },
  '/dijital/e-ticaret': {
    title: 'E-Ticaret Sitesi Kurulumu ve Dijital Mağaza Çözümleri | Mütekavvim Dijital',
    description:
      'Yüksek dönüşüm odaklı, ödeme ve kargo entegrasyonlu özel e-ticaret altyapıları ve dijital satış çözümleri.',
  },
  '/dijital/sosyal-medya': {
    title: 'Kurumsal Sosyal Medya Tasarımı ve İçerik Yönetimi | Mütekavvim Dijital',
    description:
      'Marka dilinize uygun sosyal medya görsel tasarımı, içerik takvimi, Reels video kurgusu ve kreatif kampanya yönetimi.',
  },
  '/dijital/dijital-reklam': {
    title: 'Dijital Reklam ve Performans Pazarlaması | Google & Meta Ads | Mütekavvim Dijital',
    description:
      'Google Ads, Instagram, Facebook ve LinkedIn reklam kampanyalarıyla ölçülebilir dönüşüm ve hedef kitle yönetimi.',
  },
  '/dijital/kurumsal-kimlik': {
    title: 'Kurumsal Kimlik ve Marka Tasarımı | Logo ve Brandbook | Mütekavvim Dijital',
    description:
      'Logo tasarımı, tipografi, renk paleti, kurumsal kimlik kılavuzu (brandbook) ve bütünsel marka dili oluşturma.',
  },
  '/dijital/video-produksiyon': {
    title: 'Kurumsal Tanıtım Filmi ve Video Prodüksiyon | Mütekavvim Dijital',
    description:
      'Kurumsal tanıtım filmi, reklam spotu, drone çekimi, ürün çekimi ve 2D/3D motion graphics animasyon prodüksiyonu.',
  },

  // Yazılım
  '/yazilim': {
    title: 'Kurumsal Yazılım, Mobil Uygulama ve Otomasyon Çözümleri | Mütekavvim',
    description:
      'İş süreçlerinize özel web tabanlı kurumsal yazılımlar, iOS/Android mobil uygulamalar, CRM/ERP entegrasyonları ve iş otomasyonu.',
  },
  '/yazilim/kurumsal-yazilim': {
    title: 'Özel Kurumsal Yazılım Geliştirme | Mütekavvim Yazılım',
    description:
      'Şirketinizin operasyonel süreçlerine özel, ölçeklenebilir ve güvenli kurumsal yazılım ve yönetim panelleri.',
  },
  '/yazilim/mobil-uygulama': {
    title: 'iOS ve Android Mobil Uygulama Geliştirme | Mütekavvim Yazılım',
    description:
      'Kullanıcı dostu arayüz ve yüksek performanslı iOS ve Android kurumsal mobil uygulama geliştirme hizmetleri.',
  },
  '/yazilim/web-uygulamalari': {
    title: 'Özel Web Uygulamaları ve SaaS Geliştirme | Mütekavvim Yazılım',
    description:
      'Modern bulut mimarisiyle geliştirilen B2B/B2C web portalları, bayi sistemleri ve özel web uygulamaları.',
  },
  '/yazilim/otomasyon': {
    title: 'İş Süreçleri Otomasyonu ve API Entegrasyonları | Mütekavvim Yazılım',
    description:
      'ERP, CRM, muhasebe ve saha operasyon sistemleri arasında veri akışını hızlandıran entegrasyon ve otomasyon çözümleri.',
  },
  '/yazilim/bakim-destek': {
    title: 'Yazılım Bakım, Güvenlik ve Teknik Destek | Mütekavvim Yazılım',
    description:
      'Kurumsal yazılım ve web sistemleriniz için kesintisiz performans izleme, güvenlik güncellemeleri ve SLA destek hizmeti.',
  },

  // İnşaat
  '/insaat': {
    title: 'Kurumsal Yapı, Ticari İnşaat ve Mimari Uygulama | Mütekavvim',
    description:
      'Ofis, mağaza, showroom, ticari yapılar ve endüstriyel tesisler için mimari projelendirme ve anahtar teslim inşaat çözümleri.',
  },
  '/insaat/kurumsal-yapi': {
    title: 'Kurumsal Yapı ve Ofis İnşaat Çözümleri | Mütekavvim İnşaat',
    description:
      'Genel müdürlük binaları, kurumsal ofisler ve idari tesisler için modern standartlarda yapı ve taahhüt hizmetleri.',
  },
  '/insaat/ticari-projeler': {
    title: 'Ticari Projeler, Mağaza ve Showroom Uygulamaları | Mütekavvim İnşaat',
    description:
      'Perakende zincir mağazaları, showroomlar ve ticari alanlar için hızlı ve standartlara uygun mimari uygulama.',
  },
  '/insaat/mimari-uygulama': {
    title: 'İç Mimari Tasarım ve Cephe Uygulamaları | Mütekavvim İnşaat',
    description:
      'Kurumsal kimliğinizi mekana yansıtan iç mimari tasarım, cephe sistemleri ve ince yapı uygulamaları.',
  },
  '/insaat/anahtar-teslim': {
    title: 'Anahtar Teslim İnşaat ve Proje Yönetimi | Mütekavvim İnşaat',
    description:
      'Altyapıdan ince işçiliğe, mekanik ve elektrik tesisattan peyzaja kadar tek elden anahtar teslim proje yönetimi.',
  },

  // Projeler
  '/projeler': {
    title: 'Projelerimiz ve Referans Çalışmalar | Mütekavvim',
    description:
      'Türkiye genelinde gerçekleştirdiğimiz açık hava reklam kampanyaları, bina cephe giydirme, kurumsal baskı ve promosyon projelerimiz.',
  },
  '/projeler/proje-1': {
    title: 'Skyland İstanbul Maslak Tower Cephe Giydirme Projesi | Mütekavvim',
    description: 'Skyland İstanbul Maslak Tower dev bina cephe giydirme ve dış mekan reklam uygulaması.',
  },
  '/projeler/proje-2': {
    title: 'Turkcell Türkiye Geneli 5G Billboard Kampanyası | Mütekavvim',
    description: '81 il genelinde eş zamanlı yürütülen Turkcell 5G açık hava billboard ve CLP kampanyası.',
  },
  '/projeler/proje-3': {
    title: 'İlvi Ayakkabı Lüks Katalog ve Ambalaj Üretimi | Mütekavvim',
    description: 'İlvi için özel dokulu kağıt, sıcak varak ve kısmi lak uygulamalı sezon kataloğu ve lüks kutu üretimi.',
  },
  '/projeler/proje-4': {
    title: 'Lufian Executive Kurumsal VIP Hediye Koleksiyonu | Mütekavvim',
    description: 'Lufian için özel tasarlanan deri ajanda, çelik termos ve VIP kutulu kurumsal hediye setleri.',
  },
  '/projeler/proje-5': {
    title: 'Zorlu Center AVM 4K Dış Mekan LED Ekran Projesi | Mütekavvim',
    description: 'Zorlu Center dış cephe yüksek parlaklıklı 4K dijital LED ekran kurulumu ve içerik yönetimi.',
  },
  '/projeler/proje-6': {
    title: 'Anadolu Sigorta Kentsel CLP Raket ve Durak Ağı | Mütekavvim',
    description: 'kent merkezleri ve duraklarda yüksek erişimli arka aydınlatmalı CLP raket pano reklam uygulaması.',
  },
  '/projeler/proje-7': {
    title: 'Togg Mobilite Otoyol Giantboard ve Totem Projesi | Mütekavvim',
    description: 'Ana otoyol güzergahlarında dev boyutlu Giantboard ve çelik konstrüksiyon totem uygulaması.',
  },
  '/projeler/proje-8': {
    title: 'Trendyol Express Dinamik Dijital Kampanya Tasarımları | Mütekavvim',
    description: 'Trendyol Express için çok kanallı dijital reklam, sosyal medya ve DOOH ekran görsel tasarımları.',
  },

  // Kurumsal Sayfalar
  '/hakkimizda': {
    title: 'Hakkımızda | Kurumsal Vizyon ve Üretim Gücümüz | Mütekavvim',
    description:
      'Nisan 2022 kuruluşlu Mütekavvim Limited Şirketi; açık hava reklamcılığı, matbaa, promosyon, yazılım ve inşaat alanlarında uçtan uca kurumsal çözümler sunar.',
  },
  '/kariyer': {
    title: 'Kariyer ve Açık Pozisyonlar | Mütekavvim',
    description:
      'Mütekavvim ailesine katılın. Tasarım, baskı operasyonu, saha uygulaması ve yazılım ekiplerimizdeki kariyer fırsatları.',
  },

  // Blog
  '/blog': {
    title: 'Blog | Reklam, Matbaa, Promosyon ve Kurumsal İletişim Rehberleri | Mütekavvim',
    description:
      'Açık hava reklamcılığı, bina giydirme, matbaa baskı hazırlığı, kurumsal kimlik ve promosyon ürünleri üzerine sektörel içerikler.',
  },
  '/blog/acik-hava-reklamin-gucu': {
    title: 'Açık Hava Reklamının Gücü: Neden Hâlâ En Etkili Kanal? | Mütekavvim Blog',
    description:
      'Markaların şehir hayatının doğal akışı içinde hedef kitlesiyle doğrudan ve kesintisiz bağ kurmasını sağlayan açık hava reklamcılığının stratejik avantajları.',
    ogType: 'article',
  },
  '/blog/bina-giydirme-rehberi': {
    title: 'Bina Giydirme Uygulamasında Dikkat Edilmesi Gerekenler | Mütekavvim Blog',
    description:
      'Başarılı bir bina cephe giydirme uygulaması için doğru mesh/vinil malzeme seçimi, rüzgâr yükü analizi ve profesyonel montaj süreci.',
    ogType: 'article',
  },
  '/blog/kurumsal-kimlik-neden-onemli': {
    title: 'Kurumsal Kimlik Neden Markanızın Temeli? | Mütekavvim Blog',
    description:
      'Logo, renk sistemi, tipografi ve basılı kurumsal evraklardan oluşan kurumsal kimliğin markanıza sağladığı güven ve prestij avantajları.',
    ogType: 'article',
  },
  '/blog/promosyon-urunleri-secimi': {
    title: 'Doğru Promosyon Ürünü Nasıl Seçilir? | Mütekavvim Blog',
    description:
      'Kurumsal hediye seçiminde bütçe, hedef kitle, kullanım ömrü ve lazer/UV/tampon baskı tekniği dengesini kurmanın yolları.',
    ogType: 'article',
  },
  '/blog/matbaa-dosya-hazirlama': {
    title: 'Matbaa İçin Dosya Hazırlamak: Eksiksiz Teknik Rehber | Mütekavvim Blog',
    description:
      'Kartvizit, katalog ve broşür baskısı öncesinde CMYK renk modu, 300 DPI çözünürlük, taşma payı (bleed) ve font vektörelleştirme rehberi.',
    ogType: 'article',
  },
  '/blog/dijital-kampanya-stratejisi': {
    title: 'Dijital Kampanyada Strateji Önce Gelir | Mütekavvim Blog',
    description:
      'Sosyal medya ve dijital reklam kampanyalarında doğru hedefleme ve yaratıcı stratejiyle bütçenizi en verimli şekilde kullanmanın yolları.',
    ogType: 'article',
  },

  // İletişim, Teklif Al & Yasal
  '/iletisim': {
    title: 'İletişim | Mütekavvim İstanbul Ofis ve İletişim Bilgileri',
    description:
      'Projeleriniz ve fiyat teklifi talepleriniz için Mütekavvim ile iletişime geçin. Telefon: +90 212 916 23 44 | E-posta: info@mutekavvim.com',
  },
  '/teklif-al': {
    title: 'Hızlı Teklif Al | 24 Saat İçinde Kurumsal Fiyat Teklifi | Mütekavvim',
    description:
      'Açık hava reklamcılığı, matbaa baskı, kurumsal promosyon, dijital çözümler ve yazılım projeleriniz için ücretsiz fiyat teklifi alın.',
  },
  '/kvkk-aydinlatma-metni': {
    title: 'KVKK Aydınlatma Metni | Mütekavvim',
    description: '6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında Mütekavvim aydınlatma metni.',
  },
  '/gizlilik-politikasi': {
    title: 'Gizlilik Politikası | Mütekavvim',
    description: 'Mütekavvim web sitesi gizlilik politikası ve veri güvenliği ilkeleri.',
  },
  '/cerez-politikasi': {
    title: 'Çerez (Cookie) Politikası | Mütekavvim',
    description: 'Mütekavvim web sitesinde kullanılan çerezler ve tercih yönetimi hakkında bilgilendirme.',
  },
}

export const PRERENDER_ROUTES = Object.keys(ROUTE_META)

export function getRouteMeta(pathname: string): PageMeta {
  const clean = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
  return ROUTE_META[clean] || DEFAULT_META
}
