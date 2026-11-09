# Mütekavvim Web Sitesi — Yazılımcı & Yayınlama Rehberi

Bu proje **Mütekavvim Reklam, Promosyon ve Kurumsal Çözümler** web sitesinin kaynak kodlarını ve yayına hazır derlenmiş dosyalarını içermektedir.

---

## 🚀 Hızlı Başlangıç (Geliştirici Ortamı)

### Gereksinimler
- **Node.js**: v18.0.0 veya üzeri (v20+ önerilir)
- **Paket Yöneticisi**: `npm`, `pnpm` veya `yarn`

### 1. Bağımlılıkları Yükleme
```bash
npm install
```

### 2. Geliştirme Sunucusunu Başlatma
```bash
npm run dev
```
Tarayıcınızda `http://localhost:8443` (veya Vite tarafından atanan port) adresinde açılır.

### 3. Canlı (Production + SSG Pre-render) Derleme Alma
```bash
npm run build
```
`npm run build` komutu sırasıyla:
1. `vite build` ile istemci (client) paketini derler,
2. `vite build --ssr src/entry-server.tsx --outDir dist-ssr` ile sunucu render paketini oluşturur,
3. `node prerender.mjs` ile sitedeki **69 rotanın tamamını** (`react-dom/server` `renderToString`) statik HTML olarak (`dist/<rota>/index.html`) üretir, her sayfaya özel `<title>`, `<meta name="description">`, `canonical`, Open Graph (`og:title`, `og:description`, `og:url`) etiketlerini gömer ve otomatik olarak `dist/sitemap.xml` ile `dist/robots.txt` dosyalarını oluşturur.
4. Tarayıcı tarafında `src/main.tsx` içinde `ReactDOM.hydrateRoot` kullanılarak statik HTML kesintisiz biçimde devralınır.

---

## 🛠️ Teknoloji Yığını (Tech Stack)

- **Frontend Kütüphanesi:** React 19 (`react`, `react-dom`)
- **Yönlendirme (Routing):** React Router v8 (`react-router`)
- **Derleme Aracı (Bundler):** Vite v8
- **Stil & Tasarım:** Tailwind CSS v4 (`@tailwindcss/vite`, `tailwindcss`)
- **Dil:** TypeScript (`typescript`, `@types/react`, vb.)

---

## 📁 Proje Dizin Yapısı

```text
mutekavvim-website/
├── public/                 # Statik dosyalar (.htaccess, _redirects, robots.txt)
│   ├── .htaccess           # Apache / cPanel SPA rewrite kuralları
│   └── _redirects          # Netlify / Cloudflare Pages SPA rewrite kuralları
├── src/
│   ├── components/         # Ortak bileşenler (Navbar, Footer, Hero, CTA, vb.)
│   ├── imports/            # Yüksek çözünürlüklü proje, lansman ve promosyon görselleri
│   ├── layouts/            # Ana layout (Root.tsx)
│   ├── pages/              # Sayfalar
│   │   ├── Home.tsx            # Ana Sayfa
│   │   ├── FaaliyetAlanlari.tsx# Hizmetler / Faaliyet Alanları
│   │   ├── Promosyon.tsx       # Promosyon Ürünleri Ana Listesi
│   │   ├── PromosyonDetail.tsx # Promosyon Kategori & Ürün Detayı (Ajanda, Defter vb.)
│   │   ├── Projeler.tsx        # 8 Ana Kurumsal Case Study (Skyland, Turkcell, Zorlu vb.)
│   │   ├── ProjeDetail.tsx     # Proje Vaka Analiz Detayı
│   │   ├── TeklifAl.tsx        # Alana Özel Dinamik Teklif Formu (info@mutekavvim.com)
│   │   ├── Hakkimizda.tsx      # Kurumsal Hakkımızda
│   │   ├── Iletisim.tsx        # İletişim & Form
│   │   └── ...
│   ├── constants.ts        # Renk paleti, marka sabitleri
│   ├── routes.ts           # Sayfa yönlendirme (route) tanımları
│   ├── index.css           # Global stiller, Tailwind CSS importu, fontlar
│   └── main.tsx            # React başlangıç noktası
├── dist/                   # Yayına hazır derlenmiş static dosyalar (build çıktısı)
├── vercel.json             # Vercel SPA rewrite yapılandırması
├── vite.config.ts          # Vite & Tailwind konfigürasyonu
├── tsconfig.json           # TypeScript yapılandırması
└── package.json            # Bağımlılıklar ve scriptler
```

---

## 🌐 Domaine Yükleme & Canlıya Alma Seçenekleri

Bu proje bir **Single Page Application (SPA)** olduğu için, sayfa yenilendiğinde alt rotaların (`/projeler`, `/teklif-al` vb.) 404 vermemesi amacıyla tüm isteklerin `index.html`'e yönlendirilmesi (rewrite) gerekir. Gerekli tüm ayar dosyaları projeye eklenmiştir.

### Seçenek 1: cPanel / Plesk / Apache Sunucusu (Klasik Hosting)
1. `npm run build` komutunu çalıştırın (veya pakette hazır gelen `/dist` klasörünü kullanın).
2. `/dist` klasörünün **içindeki tüm dosyaları** sunucunuzun `public_html` (veya `httpdocs`) dizinine yükleyin.
3. `/public` içerisindeki `.htaccess` dosyası otomatik olarak `dist/` içine kopyalanır ve alt sayfalarda 404 hatası almayı engeller.

### Seçenek 2: Vercel / Netlify / Cloudflare Pages (Önerilen)
- **Vercel:** Projeyi GitHub reponuza bağlayın. Root dizindeki `vercel.json` sayesinde tek tıkla canlıya geçer.
- **Netlify / Cloudflare Pages:** Build komutu: `npm run build`, Publish directory: `dist`. `public/_redirects` dosyası yönlendirmeyi otomatik sağlar.

### Seçenek 3: Nginx (VPS / Dedicated Server)
Nginx konfigürasyonunuzun `server` bloğuna aşağıdaki direktifi eklemeniz yeterlidir:
```nginx
location / {
    root /var/www/mutekavvim/dist;
    index index.html;
    try_files $uri $uri/ /index.html;
}
```

---

## ✉️ İletişim ve Teklif Formu Bilgileri

Sitedeki tüm teklif alma akışı ve iletişim talepleri **`info@mutekavvim.com`** adresine gidecek şekilde kurgulanmıştır:

- **Dosya:** `src/pages/TeklifAl.tsx` ve `src/pages/Iletisim.tsx`
- **Hedef E-Posta:** `TARGET_EMAIL = 'info@mutekavvim.com'`
- **İşleyiş:** Kullanıcı adımları tamamladığında seçilen hizmete özel tüm parametreler (adet, m², baskı türü, bütçe, lokasyon vb.) eksiksiz bir formata dönüştürülür ve doğrudan e-posta iletim ekranına aktarılır.
- **Backend Entegrasyonu:** Eğer sunucu tarafında SMTP (Nodemailer), Resend, Sendgrid veya bir PHP API üzerinden doğrudan arka planda mail gönderilmesini isterseniz, `TeklifAl.tsx` ve `Iletisim.tsx` dosyalarındaki `handleSubmit` fonksiyonuna kendi endpoint'inizi bağlayabilirsiniz.

---

İyi çalışmalar dileriz!
Mütekavvim Ekibi
