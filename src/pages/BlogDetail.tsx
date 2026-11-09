import { useParams, Link } from 'react-router'
import { C } from '@/constants'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'

import acikHavaBlogImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__1_.png'
import binaBlogImg from '@/imports/204.jpg'
import markaBlogImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_26_54__5_.png'
import promosyonBlogImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__2_.png'
import matbaaBlogImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__3_.png'
import dijitalBlogImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__4_.png'

const ARTICLES: Record<string, { title: string; category: string; date: string; img: string; content: string[] }> = {
  'acik-hava-reklamin-gucu': {
    title: 'Açık Hava Reklamının Gücü: Neden Hâlâ En Etkili Kanal?',
    category: 'Açık Hava',
    date: '15 Mart 2026',
    img: acikHavaBlogImg,
    content: [
      'Açık hava reklamcılığı, markaların şehir hayatının doğal akışı içinde hedef kitlesiyle doğrudan ve kesintisiz bağ kurmasını sağlayan en güçlü iletişim kanallarından biridir. Günün her saatinde yaşayan caddeler, ana arterler ve meydanlar, markanızın mesajını binlerce kişiye aynı anda ulaştırır.',
      'Dijital ekranların yoğunlaştığı ve reklamların tek kaydırmayla geçildiği günümüzde, fiziksel dünyada yer alan güçlü bir görsel tasarım kapatılamaz ve göz ardı edilemez. Bu görünürlük, markanıza hem prestij hem de kalıcı bir güven kazandırır.',
      'Özellikle şehir girişlerinde, yoğun trafik akslarında ve merkezi yaya noktalarında konumlanan billboard, giantboard, CLP ve bina giydirme uygulamaları; yüksek erişim gücüyle marka bilinirliğini kısa sürede zirveye taşır.',
      'Doğru lokasyon seçimi, net bir mesaj ve yüksek baskı kalitesi bir araya geldiğinde açık hava reklamları yalnızca bir tanıtım aracı olmaktan çıkar; markanızın şehirdeki imzasına dönüşür.',
    ],
  },
  'bina-giydirme-rehberi': {
    title: 'Bina Giydirme Uygulamasında Dikkat Edilmesi Gerekenler',
    category: 'Açık Hava',
    date: '10 Mart 2026',
    img: binaBlogImg,
    content: [
      'Bina cephe giydirme uygulamaları, bir markanın şehir siluetinde bırakabileceği en büyük ve en çarpıcı görsel etkiyi sunar. Ancak bu ölçekteki projelerin başarısı, doğru mühendislik ve malzeme seçimiyle doğrudan ilişkilidir.',
      'Cephenin yapısına göre delikli mesh branda, cast folyo veya one-way vision malzemelerden en uygun olanı tercih edilmelidir. Özellikle yüksek katlı binalarda rüzgâr yükü hesaplaması ve gergi sistemlerinin güvenliği birinci önceliktir.',
      'Profesyonel dağcı ve vinç ekiplerimizle gerçekleştirdiğimiz montaj süreçlerinde hem iş güvenliği standartlarını hem de kusursuz görsel hizalamayı bir arada sağlıyoruz.',
    ],
  },
  'kurumsal-kimlik-neden-onemli': {
    title: 'Kurumsal Kimlik Neden Markanızın Temeli?',
    category: 'Marka',
    date: '4 Mart 2026',
    img: markaBlogImg,
    content: [
      'Güçlü bir kurumsal kimlik, markanızın müşterilerinizle kurduğu ilk temasta güven ve profesyonellik hissini oluşturur. Yalnızca bir logodan ibaret olmayan bu yapı; renk paleti, tipografi, basılı evraklar ve dijital duruşun bütünüdür.',
      'Kartvizitten kataloglara, açık hava reklamlarından promosyon ürünlerine kadar tüm mecralarda tutarlı bir görsel dil kullanmak, markanızın akılda kalıcılığını katbekat artırır.',
    ],
  },
  'promosyon-urunleri-secimi': {
    title: 'Doğru Promosyon Ürünü Nasıl Seçilir?',
    category: 'Promosyon',
    date: '25 Şubat 2026',
    img: promosyonBlogImg,
    content: [
      'Kurumsal promosyon ürünleri, markanızın müşterilerinizin günlük hayatında yer almasını sağlayan en samimi ve kalıcı iletişim araçlarından biridir. Doğru ürün seçimi, hediyenin uzun yıllar keyifle kullanılmasını sağlar.',
      'Hedef kitlenizin çalışma alışkanlıklarına uygun termos, ajanda, teknolojik aksesuar veya tekstil ürünleri seçildiğinde ve lazer gravür ya da UV baskı gibi kaliteli markalama teknikleriyle tamamlandığında markanızın prestiji doğrudan yansıtılır.',
    ],
  },
  'matbaa-dosya-hazirlama': {
    title: 'Matbaa İçin Dosya Hazırlamak: Eksiksiz Rehber',
    category: 'Matbaa',
    date: '18 Şubat 2026',
    img: matbaaBlogImg,
    content: [
      'Kusursuz bir baskı sonucu elde etmenin ilk adımı, tasarım dosyasını baskı standartlarına uygun hazırlamaktır. Çalışmaların CMYK renk modunda, en az 300 DPI çözünürlükte ve 3 mm taşma (kesim) payı bırakılarak kaydedilmesi gerekir.',
      'Yazı tiplerinin (fontların) vektörel forma dönüştürülmesi ve özel lak, varak veya gofre uygulanacak alanların ayrı katmanlarda belirtilmesi, üretim sürecinin hızlı ve hatasız tamamlanmasını sağlar.',
    ],
  },
  'dijital-kampanya-stratejisi': {
    title: 'Dijital Kampanyada Strateji Önce Gelir',
    category: 'Dijital',
    date: '12 Şubat 2026',
    img: dijitalBlogImg,
    content: [
      'Başarılı bir dijital reklam kampanyası, bütçeden önce doğru strateji ve net hedef kitle analiziyle başlar. Markanızın mesajını doğru platformda, doğru görsel dille sunmak dönüşüm oranlarını doğrudan etkiler.',
      'Web tasarımından sosyal medya yönetimine kadar tüm dijital temas noktalarının birbiriyle uyumlu çalışması, reklam yatırımlarınızın kalıcı müşteri kazanımına dönüşmesini sağlar.',
    ],
  },
}

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>()
  const article = (slug && ARTICLES[slug]) ? ARTICLES[slug] : ARTICLES['acik-hava-reklamin-gucu']
  const related = Object.entries(ARTICLES)
    .filter(([key]) => key !== (slug || 'acik-hava-reklamin-gucu'))
    .slice(0, 2)

  const title = article.title
  const img = article.img

  return (
    <div style={{ background: '#fff' }}>
      <PageHero
        label={article.category}
        title={title}
        bgImage={img}
        bgColor={C.dark}
        breadcrumb={[{ label: 'Blog', path: '/blog' }, { label: title.slice(0, 40) + '...' }]}
      />

      <article style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <div className="flex items-center gap-4 mb-8 pb-6" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
            <span className="px-3 py-1.5 rounded-sm text-sm font-semibold" style={{ background: `${C.purpleAccent}15`, color: C.purpleAccent }}>{article.category}</span>
            <span style={{ color: C.muted, fontSize: 14 }}>{article.date}</span>
          </div>

          <div className="mb-8 overflow-hidden" style={{ borderRadius: 6, height: 340, background: C.dark }}>
            <img src={img} alt={title} className="w-full h-full object-cover" />
          </div>

          {article.content.map((para, i) => (
            <p key={i} className="mb-6" style={{ fontSize: 17, color: C.gray, lineHeight: 1.9 }}>{para}</p>
          ))}

          {/* Related */}
          <div className="mt-16 pt-10" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <h3 className="font-display font-bold mb-6" style={{ fontSize: 22, color: C.dark }}>İlgili Yazılar</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map(([relSlug, relArt]) => (
                <Link key={relSlug} to={`/blog/${relSlug}`} className="group p-5 rounded-sm transition-all hover:-translate-y-1"
                  style={{ background: C.offwhite, border: '1px solid rgba(0,0,0,0.07)' }}>
                  <span className="block text-xs font-semibold uppercase tracking-widest mb-2 group-hover:text-purple-600"
                    style={{ color: C.purpleMid, letterSpacing: '0.12em' }}>{relArt.category}</span>
                  <p className="font-display font-bold" style={{ fontSize: 15, color: C.dark }}>{relArt.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CTABanner title="Projenizi Görüşelim." desc="Açık hava reklamcılığı veya diğer hizmetlerimiz hakkında bilgi alın." primaryLabel="İLETİŞİME GEÇ" />
    </div>
  )
}
