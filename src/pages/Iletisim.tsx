import { useState } from 'react'
import { C } from '@/constants'
import PageHero from '@/components/PageHero'
import FAQAccordion from '@/components/FAQAccordion'

const DEPT_CONTACTS = [
  { dept: 'Genel İletişim', contact: 'Müşteri İlişkileri', email: 'info@mutekavvim.com' },
  { dept: 'Muhasebe', contact: 'Finans ve Muhasebe', email: 'muhasebe@mutekavvim.com' },
]

const FAQ = [
  { q: 'Teklif almak ne kadar sürer?', a: 'Standart teklif taleplerine 24 saat (1 iş günü) içinde dönülmektedir.' },
  { q: 'Yüz yüze görüşme yapılabilir mi?', a: 'Evet, randevu alarak İstanbul ofisimizde yüz yüze görüşme gerçekleştirebilirsiniz.' },
  { q: 'Türkiye dışında da hizmet veriliyor mu?', a: 'Şu an Türkiye genelinde 81 ilde üretim ve saha uygulama hizmeti sunulmaktadır.' },
]

export default function Iletisim() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', dept: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div style={{ background: '#fff' }}>
      <PageHero
        label="İLETİŞİM"
        title="Birlikte"
        titleAccent="Çalışalım"
        desc="Projenizi anlatın, en kısa sürede uzman ekibimiz size dönecektir."
        bgColor={C.dark}
        breadcrumb={[{ label: 'İletişim' }]}
      />

      <section style={{ padding: '88px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Office Info */}
          <div>
            <h2 className="font-display font-extrabold mb-8" style={{ fontSize: 26, color: C.dark }}>İletişim Bilgileri</h2>

            {[
              { icon: '📞', label: 'Telefon', value: '+90 212 916 23 44' },
              { icon: '✉️', label: 'E-posta', value: 'info@mutekavvim.com' },
              { icon: '📍', label: 'Adres', value: 'Fulya Mah. Mevlüt Pehlivan Sk. Erdoğanlar İş Hanı No:14 Kat:3 Ofis:7, Şişli / İstanbul' },
              { icon: '🕐', label: 'Çalışma Saatleri', value: 'Pazartesi - Cuma / 09:00 - 18:00' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 mb-6">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: C.offwhite }}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: C.muted, letterSpacing: '0.14em', fontSize: 10 }}>{item.label}</div>
                  <div style={{ fontSize: 15, color: C.dark }}>{item.value}</div>
                </div>
              </div>
            ))}

            {/* WhatsApp */}
            <a href="https://wa.me/905445091544" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full rounded-sm font-semibold text-white mb-8 transition-colors hover:bg-green-600"
              style={{ background: '#25D366', padding: '14px 24px', minHeight: 52, fontFamily: 'var(--font-display)', fontSize: 14, letterSpacing: '0.08em' }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WHATSAPP
            </a>

            {/* Department contacts */}
            <h3 className="font-display font-bold mb-5" style={{ fontSize: 18, color: C.dark }}>Departman İletişimleri</h3>
            {DEPT_CONTACTS.map((d) => (
              <div key={d.dept} className="py-3" style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                <div className="font-medium text-sm mb-0.5" style={{ color: C.dark }}>{d.dept}</div>
                <div className="text-sm" style={{ color: C.muted }}>{d.email}</div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="font-display font-extrabold mb-8" style={{ fontSize: 26, color: C.dark }}>Bize Yazın</h2>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center" style={{ background: C.offwhite, borderRadius: 4 }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})` }}>
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-bold mb-3" style={{ fontSize: 24, color: C.dark }}>Mesajınız İletildi!</h3>
                <p style={{ fontSize: 16, color: C.gray, maxWidth: 380 }}>24 saat içinde uzman ekibimiz sizinle iletişime geçecektir.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { key: 'name', label: 'Ad Soyad *', type: 'text', placeholder: 'Adınız ve soyadınız', required: true },
                  { key: 'company', label: 'Şirket', type: 'text', placeholder: 'Şirket adı', required: false },
                  { key: 'email', label: 'E-posta *', type: 'email', placeholder: 'ornek@email.com', required: true },
                  { key: 'phone', label: 'Telefon', type: 'tel', placeholder: '+90 5XX XXX XX XX', required: false },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium mb-2" style={{ color: C.dark }}>{field.label}</label>
                    <input
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm"
                      style={{ background: C.offwhite, border: '1px solid rgba(0,0,0,0.1)', color: C.dark, fontSize: 15, minHeight: 50 }}
                    />
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium mb-2" style={{ color: C.dark }}>Konu / Departman</label>
                  <select value={form.dept} onChange={(e) => setForm({ ...form, dept: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm"
                    style={{ background: C.offwhite, border: '1px solid rgba(0,0,0,0.1)', color: form.dept ? C.dark : C.muted, fontSize: 15, minHeight: 50 }}>
                    <option value="">Departman seçin</option>
                    <option>Açık Hava Reklamcılığı</option>
                    <option>Matbaa ve Baskı</option>
                    <option>Promosyon Ürünleri</option>
                    <option>Dijital Çözümler</option>
                    <option>Yazılım</option>
                    <option>İnşaat</option>
                    <option>Genel Bilgi</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium mb-2" style={{ color: C.dark }}>Mesajınız *</label>
                  <textarea required rows={5} placeholder="Projenizi, ihtiyacınızı veya sorunuzu kısaca açıklayın."
                    value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm resize-none"
                    style={{ background: C.offwhite, border: '1px solid rgba(0,0,0,0.1)', color: C.dark, fontSize: 15 }} />
                </div>

                <div className="sm:col-span-2">
                  <button type="submit"
                    className="w-full flex items-center justify-center rounded-sm font-semibold text-white transition-opacity hover:opacity-85"
                    style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, padding: '16px 32px', minHeight: 56, fontFamily: 'var(--font-display)', letterSpacing: '0.1em', fontSize: 15 }}>
                    MESAJI GÖNDER
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google Map */}
      <div style={{ background: C.offwhite, height: 340, borderTop: '1px solid rgba(0,0,0,0.07)' }}>
        <iframe
          title="Mütekavvim İstanbul Konum"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.6296202993!2d28.84737265!3d41.0052041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 className="font-display font-extrabold mb-10 text-center" style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: C.dark }}>Sık Sorulan Sorular</h2>
          <FAQAccordion items={FAQ} />
        </div>
      </section>
    </div>
  )
}
