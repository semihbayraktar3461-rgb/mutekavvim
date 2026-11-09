import { C } from '@/constants'
import insaatHeroImg from '@/imports/ChatGPT_Image_11_A_u_2026_17_14_28__6_.png'
import kurumsalYapiImg from '@/imports/gen_proj_1.jpg'
import ticariProjeImg from '@/imports/204.jpg'
import anahtarTeslimImg from '@/imports/ChatGPT_Image_11_A_u_2026_14_05_27.png'
import PageHero from '@/components/PageHero'
import CTABanner from '@/components/CTABanner'

const TYPES = [
  { title: 'Kurumsal Yapı Çözümleri', desc: 'Ofis, fabrika ve ticari mekânlara yönelik kurumsal yapı projeleri.', img: kurumsalYapiImg },
  { title: 'Ticari Projeler', desc: 'AVM, otel ve büyük ölçekli ticari proje geliştirme ve yönetimi.', img: ticariProjeImg },
  { title: 'Mimari Uygulama', desc: 'Mimari projeye uygun, kalite odaklı inşaat uygulamaları.', img: insaatHeroImg },
  { title: 'Anahtar Teslim Projeler', desc: 'Tasarımdan teslimata tek sorumlu, anahtar teslim proje yönetimi.', img: anahtarTeslimImg },
]

export default function Insaat() {
  return (
    <div style={{ background: C.dark }}>
      <PageHero
        label="İNŞAAT"
        title="Kurumsal Yapı"
        titleAccent="Çözümleri"
        desc="Ticari projelerden anahtar teslim yapılara, mimari uygulamalardan kurumsal yapı çözümlerine."
        bgImage={insaatHeroImg}
        breadcrumb={[{ label: 'Faaliyet Alanları', path: '/faaliyet-alanlari' }, { label: 'İnşaat' }]}
      />

      <div className="py-3 px-6" style={{ background: 'rgba(72,45,127,0.15)', borderBottom: '1px solid rgba(123,97,255,0.15)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p style={{ fontSize: 14, color: C.lightText }}>
            <span style={{ color: C.purpleAccent }}>Bilgi:</span> İnşaat ve kurumsal yapı uygulamalarımız, kurumsal müşterilerimizin proje taleplerine özel olarak anahtar teslim yürütülmektedir.
          </p>
        </div>
      </div>

      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TYPES.map((t) => (
              <div key={t.title} className="group overflow-hidden"
                style={{ background: C.card, borderRadius: 4, border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ height: 220, overflow: 'hidden' }}>
                  <img src={t.img} alt={t.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-white mb-2" style={{ fontSize: 20 }}>{t.title}</h3>
                  <p style={{ fontSize: 15, color: C.lightText, lineHeight: 1.7 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Yapı Projenizi Birlikte Planlayalım." desc="Ticari yapı ihtiyaçlarınız için ücretsiz ön görüşme talep edin." primaryLabel="GÖRÜŞME TALEBİ" />
    </div>
  )
}
