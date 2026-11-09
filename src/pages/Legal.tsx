import { Link, useLocation } from 'react-router'
import { C } from '@/constants'
import PageHero from '@/components/PageHero'

type LegalContent = {
  title: string
  intro: string
  sections: Array<{ heading: string; body: string }>
}

const LEGAL_PAGES: Record<string, LegalContent> = {
  '/kvkk-aydinlatma-metni': {
    title: 'KVKK Aydınlatma Metni',
    intro: 'MÜTEKAVVİM olarak kişisel verilerinizin güvenliğine önem veriyoruz. Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin işlenmesine ilişkin bilgilendirme amacı taşır.',
    sections: [
      { heading: 'Veri sorumlusu', body: 'Kişisel verileriniz, veri sorumlusu sıfatıyla MÜTEKAVVİM tarafından işlenmektedir.' },
      { heading: 'İşlenen veriler ve amaç', body: 'İletişim bilgileriniz; teklif taleplerini değerlendirmek, sizinle iletişim kurmak, hizmet süreçlerini yürütmek ve yasal yükümlülükleri yerine getirmek amacıyla işlenebilir.' },
      { heading: 'Aktarım ve saklama', body: 'Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle paylaşılmaz ve yalnızca gerekli süre boyunca güvenli şekilde saklanır.' },
      { heading: 'Haklarınız', body: 'Kanunun 11. maddesi kapsamındaki taleplerinizi info@mutekavvim.com adresinden bize iletebilirsiniz.' },
    ],
  },
  '/gizlilik-politikasi': {
    title: 'Gizlilik Politikası',
    intro: 'Bu politika, MÜTEKAVVİM web sitesi üzerinden edinilen bilgilerin korunmasına ve kullanımına ilişkin yaklaşımımızı açıklar.',
    sections: [
      { heading: 'Bilgi güvenliği', body: 'Kullanıcı bilgilerinin yetkisiz erişim, kayıp ve kötüye kullanıma karşı korunması için makul teknik ve idari önlemler alırız.' },
      { heading: 'Bilgi kullanımı', body: 'Bize ilettiğiniz bilgiler yalnızca talebinizi yanıtlamak, hizmet kalitemizi geliştirmek ve yasal yükümlülüklerimizi yerine getirmek için kullanılır.' },
      { heading: 'Üçüncü taraf bağlantıları', body: 'Sitemizde yer alan üçüncü taraf bağlantılarının gizlilik uygulamalarından MÜTEKAVVİM sorumlu değildir.' },
      { heading: 'İletişim', body: 'Gizlilik uygulamalarımızla ilgili sorularınızı info@mutekavvim.com adresine iletebilirsiniz.' },
    ],
  },
  '/cerez-politikasi': {
    title: 'Çerez Politikası',
    intro: 'MÜTEKAVVİM web sitesi, deneyiminizi iyileştirmek ve sitenin güvenli çalışmasını sağlamak için çerezlerden yararlanabilir.',
    sections: [
      { heading: 'Çerez nedir?', body: 'Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır.' },
      { heading: 'Kullanım amacı', body: 'Çerezler; temel site işlevlerini sağlamak, tercihlerinizi hatırlamak ve site performansını analiz etmek amacıyla kullanılabilir.' },
      { heading: 'Çerez tercihleri', body: 'Tarayıcı ayarlarınızdan çerezleri kabul edebilir, engelleyebilir veya silebilirsiniz. Bazı çerezleri devre dışı bırakmanız hâlinde sitenin belirli işlevleri etkilenebilir.' },
      { heading: 'Güncellemeler', body: 'Bu politika, yasal gereklilikler veya hizmetlerimizdeki değişiklikler doğrultusunda güncellenebilir.' },
    ],
  },
}

export default function Legal() {
  const { pathname } = useLocation()
  const content = LEGAL_PAGES[pathname] ?? LEGAL_PAGES['/gizlilik-politikasi']

  return (
    <div style={{ background: C.offwhite }}>
      <PageHero
        label="YASAL BİLGİLENDİRME"
        title={content.title}
        desc="MÜTEKAVVİM web sitesi ve hizmetlerine ilişkin yasal bilgilendirme metni."
        breadcrumb={[{ label: 'Ana Sayfa', path: '/' }, { label: content.title }]}
      />
      <section style={{ padding: '80px 24px 96px' }}>
        <article style={{ maxWidth: 820, margin: '0 auto', color: C.gray }}>
          <p style={{ fontSize: 17, lineHeight: 1.8, marginBottom: 40 }}>{content.intro}</p>
          <div className="space-y-8">
            {content.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display font-bold mb-3" style={{ color: C.dark, fontSize: 22 }}>{section.heading}</h2>
                <p style={{ fontSize: 16, lineHeight: 1.8 }}>{section.body}</p>
              </section>
            ))}
          </div>
          <Link to="/iletisim" className="inline-flex mt-12 font-semibold transition-colors hover:text-purple-700" style={{ color: C.purpleMid }}>
            Sorularınız için bizimle iletişime geçin →
          </Link>
        </article>
      </section>
    </div>
  )
}
