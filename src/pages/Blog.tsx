import { useState } from 'react'
import { Link } from 'react-router'
import { C } from '@/constants'
import PageHero from '@/components/PageHero'

const CATEGORIES = ['Tümü', 'Açık Hava', 'Matbaa', 'Promosyon', 'Tasarım', 'Dijital', 'Marka', 'Kurumsal']

import blogHeroImg from '@/imports/ChatGPT_Image_23_Tem_2026_15_03_44.png'
import acikHavaBlogImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__1_.png'
import binaBlogImg from '@/imports/204.jpg'
import markaBlogImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_26_54__5_.png'
import promosyonBlogImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__2_.png'
import matbaaBlogImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__3_.png'
import dijitalBlogImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__4_.png'

const BLOG_HERO_IMAGE = blogHeroImg

const ARTICLES = [
  { slug: 'acik-hava-reklamin-gucu', title: 'Açık Hava Reklamının Gücü: Neden Hâlâ En Etkili Kanal?', category: 'Açık Hava', date: '15 Mart 2026', readTime: '5 dk', excerpt: 'Markaların şehir hayatının doğal akışı içinde hedef kitlesiyle doğrudan ve kesintisiz bağ kurmasını sağlayan açık hava reklamcılığının stratejik avantajlarını inceliyoruz.', img: acikHavaBlogImg, featured: true },
  { slug: 'bina-giydirme-rehberi', title: 'Bina Giydirme Uygulamasında Dikkat Edilmesi Gerekenler', category: 'Açık Hava', date: '10 Mart 2026', readTime: '4 dk', excerpt: 'Başarılı bir bina cephe giydirme uygulaması için doğru malzeme seçimi, rüzgâr yükü analizi ve profesyonel montaj sürecine dair kapsamlı rehber.', img: binaBlogImg, featured: false },
  { slug: 'kurumsal-kimlik-neden-onemli', title: 'Kurumsal Kimlik Neden Markanızın Temeli?', category: 'Marka', date: '4 Mart 2026', readTime: '6 dk', excerpt: 'Logo, renk sistemi ve tipografiden oluşan kurumsal kimliğin markanıza sağladığı güven ve prestij avantajları.', img: markaBlogImg, featured: false },
  { slug: 'promosyon-urunleri-secimi', title: 'Doğru Promosyon Ürünü Nasıl Seçilir?', category: 'Promosyon', date: '25 Şubat 2026', readTime: '4 dk', excerpt: 'Kurumsal hediye seçiminde bütçe, hedef kitle, kullanım ömrü ve baskı tekniği dengesini kurmanın yolları.', img: promosyonBlogImg, featured: false },
  { slug: 'matbaa-dosya-hazirlama', title: 'Matbaa İçin Dosya Hazırlamak: Eksiksiz Rehber', category: 'Matbaa', date: '18 Şubat 2026', readTime: '7 dk', excerpt: 'Kartvizit, katalog ve broşür baskısı öncesinde tasarım dosyanızı hatasız hazırlamak için bilmeniz gereken teknik detaylar.', img: matbaaBlogImg, featured: false },
  { slug: 'dijital-kampanya-stratejisi', title: 'Dijital Kampanyada Strateji Önce Gelir', category: 'Dijital', date: '12 Şubat 2026', readTime: '5 dk', excerpt: 'Sosyal medya ve dijital reklam kampanyalarında doğru hedefleme ve yaratıcı stratejiyle bütçenizi en verimli şekilde yönetin.', img: dijitalBlogImg, featured: false },
]

function ArticleCard({ article, large }: { article: typeof ARTICLES[0]; large?: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link to={`/blog/${article.slug}`}
      className="group block overflow-hidden"
      style={{ background: '#fff', borderRadius: 4, border: '1px solid rgba(0,0,0,0.07)', boxShadow: hovered ? '0 16px 48px rgba(72,45,127,0.12)' : '0 2px 8px rgba(0,0,0,0.04)', transform: hovered ? 'translateY(-3px)' : 'none', transition: 'all 0.3s ease' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ height: large ? 320 : 200, overflow: 'hidden' }}>
        <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }} />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold px-2 py-1 rounded-sm" style={{ background: `${C.purpleAccent}18`, color: C.purpleAccent }}>{article.category}</span>
          <span style={{ fontSize: 12, color: C.muted }}>{article.date} · {article.readTime}</span>
        </div>
        <h3 className="font-display font-bold mb-3 group-hover:text-purple-700 transition-colors" style={{ fontSize: large ? 22 : 17, color: C.dark, lineHeight: 1.35 }}>{article.title}</h3>
        <p style={{ fontSize: 14, color: C.gray, lineHeight: 1.7 }}>{article.excerpt}</p>
      </div>
    </Link>
  )
}

export default function Blog() {
  const [active, setActive] = useState('Tümü')
  const [search, setSearch] = useState('')

  const featured = ARTICLES.find((a) => a.featured)
  const rest = ARTICLES.filter((a) => !a.featured)

  const filtered = rest.filter((a) => {
    const matchCat = active === 'Tümü' || a.category === active
    const matchSearch = search === '' || a.title.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div style={{ background: C.offwhite }}>
      <PageHero
        label="BLOG"
        title="Sektör Bilgisi ve"
        titleAccent="Kurumsal Haberler"
        desc="Açık hava reklamcılığı, matbaa, promosyon, dijital tasarım ve marka iletişimi üzerine yazılar."
        bgColor={C.dark}
        bgImage={BLOG_HERO_IMAGE}
        breadcrumb={[{ label: 'Blog' }]}
      />

      <section style={{ padding: '72px 24px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Search + filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-sm">
              <svg viewBox="0 0 24 24" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: C.muted }}>
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <input type="text" placeholder="Ara..." value={search} onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-sm" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', color: C.dark, fontSize: 14, minHeight: 48 }} />
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button key={cat} onClick={() => setActive(cat)}
                  className="px-3 py-2 rounded-sm text-sm transition-all"
                  style={{ background: active === cat ? `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})` : '#fff', color: active === cat ? '#fff' : C.gray, border: `1px solid ${active === cat ? 'transparent' : 'rgba(0,0,0,0.1)'}`, minHeight: 40 }}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured */}
          {featured && active === 'Tümü' && search === '' && (
            <div className="mb-8">
              <ArticleCard article={featured} large />
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p style={{ color: C.muted }}>Aramanızla eşleşen makale bulunamadı.</p>
            </div>
          )}

          {/* Newsletter */}
          <div className="mt-16 p-8 lg:p-12 text-center rounded-sm"
            style={{ background: `linear-gradient(135deg, ${C.purpleDeep}18, ${C.purpleAccent}10)`, border: `1px solid rgba(123,97,255,0.2)` }}>
            <h3 className="font-display font-extrabold mb-3" style={{ fontSize: 26, color: C.dark }}>Bültenimize Abone Olun</h3>
            <p className="mb-6 mx-auto" style={{ maxWidth: 420, fontSize: 15, color: C.gray, lineHeight: 1.7 }}>
              Sektör haberleri, proje duyuruları ve faydalı içerikler doğrudan e-postanıza gelsin.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
              <input type="email" placeholder="E-posta adresiniz" className="flex-1 px-4 py-3 rounded-sm"
                style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.1)', color: C.dark, fontSize: 14, minHeight: 50 }} />
              <button className="flex-shrink-0 px-6 py-3 rounded-sm font-semibold text-white"
                style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, minHeight: 50, fontFamily: 'var(--font-display)', letterSpacing: '0.06em', fontSize: 14 }}>
                ABONE OL
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
