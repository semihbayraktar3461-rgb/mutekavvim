The current result is not sufficient.

You created a single-page landing page where navigation items scroll to sections on the same page. This is NOT the requested website structure.

MÜTEKAVVİM is a large, multi-service corporate company. I need a complete, professional, multi-page corporate website with separate routes, separate page layouts and detailed service pages.

Do not create another one-page landing page.

IMPORTANT ARCHITECTURE RULE

Every primary navigation item must open a separate page/route.

Do not use section anchors such as:
#hizmetler
#projeler
#iletisim
#hakkimizda

Use actual page navigation and route architecture.

If this is being created in Figma Design:
Create separate top-level desktop, tablet and mobile frames for every page and connect them through prototype navigation.

If this is being created in Figma Make or React:
Use React Router or an equivalent routing system. Create reusable layout components with a shared Header, Mega Menu, Footer, Breadcrumb and CTA system.

The homepage should only introduce the company and direct visitors to the relevant detailed pages.

==================================================
1. GLOBAL WEBSITE STRUCTURE
==================================================

Create the following main navigation:

- Ana Sayfa
- Faaliyet Alanları
- Projeler
- Kurumsal
- Blog
- İletişim
- TEKLİF AL

“Faaliyet Alanları” must use a large professional mega menu.

MEGA MENU CATEGORIES

1. Açık Hava Reklamcılığı
   - Billboard
   - Giantboard
   - CLP / Citylight
   - LED Ekran
   - Bina Giydirme
   - Araç Giydirme
   - Durak Reklamları
   - Havalimanı Reklamları

2. Promosyon Ürünleri
   - Kurumsal Hediye Setleri
   - Teknolojik Ürünler
   - Ofis Ürünleri
   - Tekstil Ürünleri
   - Çanta ve Seyahat Ürünleri
   - Etkinlik ve Organizasyon Ürünleri
   - Kupa, Termos ve Matara
   - Ajanda, Defter ve Kalem

3. Matbaa ve Baskı
   - Kartvizit
   - Katalog ve Broşür
   - Kurumsal Evraklar
   - Ambalaj ve Etiket
   - Davetiye
   - Dijital Baskı
   - Ofset Baskı
   - Varak, Gofre ve Özel Kesim

4. Dijital Çözümler
   - Web Tasarım
   - E-Ticaret
   - Sosyal Medya Tasarımı
   - Dijital Reklam Kampanyaları
   - Kurumsal Kimlik
   - Video ve Prodüksiyon

5. Yazılım
   - Kurumsal Yazılım
   - Mobil Uygulama
   - Web Uygulamaları
   - Otomasyon Sistemleri
   - Bakım ve Teknik Destek

6. İnşaat
   - Kurumsal Yapı Çözümleri
   - Ticari Projeler
   - Mimari Uygulama
   - Anahtar Teslim Projeler

Keep Outdoor Advertising, Printing and Promotional Products as the most visually dominant services.

Software and Construction can remain as corporate business divisions, but they should not weaken the main creative agency positioning.

==================================================
2. REQUIRED ROUTES
==================================================

Create actual routes for:

/
 /faaliyet-alanlari

/acik-hava-reklamciligi
/acik-hava-reklamciligi/billboard
/acik-hava-reklamciligi/giantboard
/acik-hava-reklamciligi/clp
/acik-hava-reklamciligi/led-ekran
/acik-hava-reklamciligi/bina-giydirme
/acik-hava-reklamciligi/arac-giydirme
/acik-hava-reklamciligi/durak-reklamlari
/acik-hava-reklamciligi/havalimani-reklamlari

/promosyon
/promosyon/kurumsal-hediye-setleri
/promosyon/teknolojik-urunler
/promosyon/ofis-urunleri
/promosyon/tekstil-urunleri
/promosyon/canta-seyahat
/promosyon/etkinlik-urunleri
/promosyon/termos-matara
/promosyon/ajanda-defter-kalem

/matbaa
/matbaa/kartvizit
/matbaa/katalog-brosur
/matbaa/kurumsal-evraklar
/matbaa/ambalaj-etiket
/matbaa/dijital-baski
/matbaa/ofset-baski
/matbaa/ozel-baski

/dijital
/dijital/web-tasarim
/dijital/e-ticaret
/dijital/sosyal-medya
/dijital/kurumsal-kimlik
/dijital/video-produksiyon

/yazilim
/yazilim/kurumsal-yazilim
/yazilim/mobil-uygulama
/yazilim/web-uygulamalari

/insaat
/insaat/ticari-projeler
/insaat/mimari-uygulama
/insaat/anahtar-teslim

/projeler
/projeler/[project-slug]

/hakkimizda
/ekibimiz
/kariyer
/blog
/blog/[article-slug]
/iletisim
/teklif-al

These routes should not all display the same template with only a changed title. Create meaningful page differences according to each service.

==================================================
3. HOMEPAGE PURPOSE
==================================================

The homepage must act as the corporate overview and navigation hub.

It should contain:

1. Cinematic hero
2. Company trust statistics
3. Main business divisions
4. Selected projects
5. Why MÜTEKAVVİM
6. Working process
7. Client references
8. Testimonial placeholders
9. Corporate CTA
10. Detailed footer

Service cards on the homepage must navigate to separate service pages.

Example:

“Açık Hava Reklamcılığı” card
→ /acik-hava-reklamciligi

“Promosyon Ürünleri” card
→ /promosyon

“Matbaa ve Baskı” card
→ /matbaa

Do not reveal all service details on the homepage.

==================================================
4. SERVICE OVERVIEW PAGE TEMPLATE
==================================================

Each main service must have its own detailed overview page.

Example:
PROMOTIONAL PRODUCTS PAGE
/promosyon

PAGE STRUCTURE

1. Internal page header
2. Breadcrumb:
   Ana Sayfa / Faaliyet Alanları / Promosyon Ürünleri
3. Large service hero
4. Clear service introduction
5. Promotional product category grid
6. Featured product collections
7. Custom production capabilities
8. Printing and branding techniques
9. Corporate gift set showcase
10. Product catalogue CTA
11. How the ordering process works
12. Minimum order and delivery information placeholders
13. Selected promotional projects
14. Frequently asked questions
15. Detailed quote CTA
16. Shared footer

PROMOTIONAL PRODUCT CATEGORIES

- Kurumsal Hediye Setleri
- Teknolojik Ürünler
- Ofis Ürünleri
- Tekstil
- Çanta ve Seyahat
- Kupa, Termos ve Matara
- Ajanda, Defter ve Kalem
- Etkinlik ve Organizasyon

Each category card must open its own category page.

Do not use real pricing, minimum order numbers or delivery periods unless supplied. Use editable placeholders.

==================================================
5. PROMOTIONAL CATEGORY PAGE TEMPLATE
==================================================

Example:
/promosyon/kurumsal-hediye-setleri

Create:

1. Breadcrumb
2. Category hero
3. Category description
4. Product grid with filters
5. Product cards
6. Available customization methods
7. Material and color options
8. Packaging alternatives
9. Related projects
10. Frequently asked questions
11. Quote request panel
12. Related categories

PRODUCT FILTER EXAMPLES

- Kullanım Alanı
- Renk
- Malzeme
- Bütçe Aralığı
- Teslim Süresi
- Baskı Türü

Product cards should include:

- Product photograph
- Product name placeholder
- Short specification
- Color options
- Branding methods
- “Teklif İste” button

Do not add fake prices.

==================================================
6. OUTDOOR ADVERTISING PAGE
==================================================

Route:
/acik-hava-reklamciligi

Create a detailed professional service page with:

1. Cinematic page hero
2. Breadcrumb
3. Outdoor advertising introduction
4. Advertising format categories
5. Billboard
6. Giantboard
7. CLP / Citylight
8. LED screens
9. Building wraps
10. Vehicle wraps
11. Transport and airport media
12. Application locations
13. Project planning process
14. Design, printing and installation capabilities
15. Selected projects
16. Technical format information
17. Frequently asked questions
18. Location and quotation CTA

Each format must open its own page.

Example:
/acik-hava-reklamciligi/billboard

BILLBOARD DETAIL PAGE

- Large hero photograph
- Billboard service description
- Suitable campaign types
- Available format placeholders
- Printing and installation process
- Location selection process
- Selected billboard projects
- Frequently asked questions
- Quote form

==================================================
7. PRINTING PAGE
==================================================

Route:
/matbaa

Create:

1. Print services hero
2. Breadcrumb
3. Printing category grid
4. Corporate print products
5. Digital and offset printing
6. Special finishing techniques
7. Paper and material options
8. Production facility section
9. Quality control process
10. Selected print projects
11. File preparation guide
12. Frequently asked questions
13. Upload artwork and request quotation CTA

PRINTING CATEGORIES

- Kartvizit
- Katalog
- Broşür
- Dosya
- Antetli Kâğıt
- Zarf
- Ambalaj
- Etiket
- Davetiye
- Özel Baskı

SPECIAL PRODUCTION TECHNIQUES

- Varak
- Gofre
- Selefon
- Lak
- Özel Kesim
- Kabartma
- UV Baskı

==================================================
8. DIGITAL AND SOFTWARE PAGES
==================================================

Create separate pages for digital creative services and software development.

DIGITAL PAGE
/dijital

Sections:

- Web design
- E-commerce
- Social media design
- Digital campaigns
- Corporate identity
- Video production
- Digital project portfolio
- Design process
- CTA

SOFTWARE PAGE
/yazilim

Sections:

- Custom software
- Web applications
- Mobile applications
- Automation systems
- Maintenance and support
- Development process
- Technology stack placeholders
- Security approach
- Software project placeholders
- Consultation CTA

Do not invent technologies or client results without supplied information.

==================================================
9. PROJECT SYSTEM
==================================================

Create a full project listing page:

/projeler

PROJECT LIST PAGE

- Header and breadcrumb
- Large title
- Filter controls
- Project grid
- Load more or pagination
- CTA

PROJECT FILTERS

- Tüm Projeler
- Açık Hava
- Bina Giydirme
- Billboard
- CLP
- LED
- Matbaa
- Promosyon
- Dijital
- Yazılım
- İnşaat

Every project must open a separate detail page.

/projeler/[project-slug]

PROJECT DETAIL PAGE

- Project hero image
- Client placeholder
- Service category
- City and year placeholders
- Project summary
- Client need
- Proposed solution
- Design and production process
- Application photographs
- Technical details
- Result placeholder
- Related projects
- Quote CTA

Do not invent real client information.

==================================================
10. CORPORATE PAGES
==================================================

Create separate pages:

/hakkimizda
/ekibimiz
/kariyer

ABOUT PAGE

- Company story
- Mission
- Vision
- Core values
- Business divisions
- Production capabilities
- Service coverage
- Timeline
- Certifications placeholders
- Corporate CTA

TEAM PAGE

- Leadership placeholders
- Department structure
- Creative team
- Production team
- Field application team
- Software team
- Recruitment CTA

CAREER PAGE

- Employer brand message
- Company culture
- Departments
- Open positions placeholders
- Application form

==================================================
11. BLOG SYSTEM
==================================================

Create:

/blog
/blog/[article-slug]

BLOG LIST PAGE

- Featured article
- Article categories
- Article grid
- Search
- Pagination
- Newsletter CTA

ARTICLE DETAIL PAGE

- Breadcrumb
- Article title
- Date and category
- Large cover image
- Table of contents
- Article body
- Related articles
- CTA

BLOG CATEGORIES

- Açık Hava Reklamcılığı
- Matbaa
- Promosyon
- Tasarım
- Dijital
- Marka İletişimi
- Kurumsal Haberler

==================================================
12. CONTACT AND QUOTE SYSTEM
==================================================

Create separate pages:

/iletisim
/teklif-al

CONTACT PAGE

- Contact hero
- Office information
- Phone
- Email
- Working hours
- Department contacts
- Interactive map placeholder
- Contact form
- Social media
- FAQ

QUOTE PAGE

Create a professional multi-step quotation form.

STEP 1
Select service:

- Açık Hava
- Promosyon
- Matbaa
- Dijital
- Yazılım
- İnşaat

STEP 2
Project information:

- Product or application type
- Quantity
- Dimensions
- Application city
- Required delivery date
- Budget range

STEP 3
Upload files:

- PDF
- AI
- EPS
- PSD
- JPG
- PNG

STEP 4
Contact information:

- Name and surname
- Company
- Phone
- Email
- Project notes
- KVKK approval

Add a clear completion and confirmation screen.

==================================================
13. HEADER AND MEGA MENU
==================================================

The header must work across the entire website.

Desktop header:

- Original MÜTEKAVVİM logo
- Main navigation
- Mega menu
- Search icon
- “Teklif Al” button

Mega menu should contain:

- Service category title
- Short description
- Subservice links
- One featured image
- One featured project or CTA

Mobile header:

- Original proportional logo
- Hamburger menu
- Accordion service categories
- Fixed quote button

==================================================
14. SHARED PAGE COMPONENTS
==================================================

Build reusable components:

- Header
- Mega Menu
- Mobile Menu
- Footer
- Breadcrumb
- Page Hero
- Service Category Card
- Service Detail Card
- Project Card
- Product Card
- Blog Card
- Statistics Block
- Testimonial Card
- FAQ Accordion
- CTA Banner
- Quote Form
- Contact Form
- Filter Bar
- Pagination
- Newsletter Form
- Image Gallery

All components must use Auto Layout and variants.

==================================================
15. DESIGN SYSTEM
==================================================

Use the existing MÜTEKAVVİM brand direction.

COLORS

#0B0C11
#12131A
#1A1B22
#404044
#482D7F
#6841B6
#7B61FF
#71717A
#B8B8C1
#F5F4F1
#FAFAF8
#FFFFFF

TYPOGRAPHY

Headings:
Plus Jakarta Sans
Bold and ExtraBold

Body:
Inter
Regular and Medium

STYLE

- Premium
- Corporate
- Editorial
- Cinematic
- Visually rich
- Dark and warm-white alternation
- Controlled purple highlights
- Large photography
- Strong content hierarchy
- Professional whitespace
- No generic SaaS dashboard style
- No childish illustrations
- No excessive gradients
- No excessive rounded cards
- No repeated identical section layouts

==================================================
16. ORIGINAL LOGO RULE
==================================================

Use only the supplied original MÜTEKAVVİM logo file.

Do not:

- Redraw it
- Generate it
- Convert it into an approximate SVG
- Change its geometry
- Change its spacing
- Change its typography
- Distort its proportions
- Place an AI-generated imitation inside photographs

The logo must remain a separate editable asset.

==================================================
17. RESPONSIVE DELIVERABLES
==================================================

For every unique page template, create:

- Desktop: 1440 px
- Tablet: 768 px
- Mobile: 390 px

Do not simply shrink the desktop layout.

Recompose:

- Mega menu into accordion menu
- Multi-column layouts into mobile stacks
- Project galleries into swipeable cards
- Timelines into vertical layouts
- Forms into mobile-friendly step screens
- Buttons to minimum 48 px height

==================================================
18. FINAL DELIVERABLE
==================================================

Do not return only one homepage frame.

Build a complete website system.

Minimum required unique page designs:

1. Homepage
2. Activities overview
3. Outdoor advertising overview
4. Outdoor advertising detail
5. Promotional products overview
6. Promotional category detail
7. Printing overview
8. Printing detail
9. Digital overview
10. Software overview
11. Construction overview
12. Projects listing
13. Project detail
14. About
15. Team
16. Career
17. Blog listing
18. Article detail
19. Contact
20. Multi-step quote form
21. Search results
22. 404 page

Create desktop, tablet and mobile versions of these templates.

Connect all navigation links and buttons through working prototype interactions or real routes.

Before producing visual details, first show me:

1. Complete sitemap
2. Route structure
3. List of required page templates
4. Shared component architecture
5. Missing content and asset list

Do not begin another one-page homepage redesign.