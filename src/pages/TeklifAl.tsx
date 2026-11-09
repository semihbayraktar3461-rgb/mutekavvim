import { useState, useRef, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router'
import { C } from '@/constants'
import PageHero from '@/components/PageHero'

const TARGET_EMAIL = 'info@mutekavvim.com'

const SERVICES = [
  { slug: 'promosyon', label: 'Promosyon Ürünleri', icon: '🎁', desc: 'Adet, baskı yöntemi, kutu ve ambalaj tercihi' },
  { slug: 'acik-hava', label: 'Açık Hava Reklamcılığı', icon: '🏙️', desc: 'Mecra türü, yüzey m², yayın süresi ve lokasyon' },
  { slug: 'matbaa', label: 'Matbaa ve Baskı', icon: '🖨️', desc: 'Baskı türü, kağıt gramajı, ebat ve işçilik' },
  { slug: 'yazilim', label: 'Yazılım Geliştirme', icon: '⚙️', desc: 'Yazılım türü, modüller, entegrasyon ve bakım' },
  { slug: 'insaat', label: 'İnşaat / Kurumsal Yapı', icon: '🏗️', desc: 'Proje alanı m², mimari çizim ve bütçe aralığı' },
  { slug: 'dijital', label: 'Dijital Çözümler', icon: '💻', desc: 'Web, e-ticaret, sosyal medya ve prodüksiyon' },
]

const BUDGET_OPTIONS = ['Belirtmek istemiyorum', '10.000 ₺ altı', '10.000–50.000 ₺', '50.000–150.000 ₺', '150.000–500.000 ₺', '500.000 ₺ üzeri']

const STEPS = ['Hizmet Seçimi', 'Alana Özel Detaylar', 'Dosya Yükleme', 'İletişim & Gönderim']

// High-contrast dark text styling guarantee for all form controls
const inputControlStyle = {
  color: '#0B0C11',
  backgroundColor: '#FFFFFF',
  WebkitTextFillColor: '#0B0C11',
  border: '1px solid #D1D5DB',
}

type FileItem = { name: string; size: number }

export default function TeklifAl() {
  const [searchParams] = useSearchParams()
  const [step, setStep] = useState(1)
  const [completed, setCompleted] = useState(false)

  // Step 1: Selected Services
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  // Auto-detect service & product from URL query params (e.g. ?hizmet=promosyon&urun=Hardcover+Ajanda)
  useEffect(() => {
    const paramService = searchParams.get('hizmet') || searchParams.get('kategori') || searchParams.get('slug')
    const paramProduct = searchParams.get('urun')

    if (paramService && SERVICES.some(s => s.slug === paramService)) {
      setSelectedServices([paramService])
      setStep(2)
    }

    if (paramProduct) {
      setProjectDesc(`Talep Edilen Ürün: ${paramProduct}\n`)
    }
  }, [searchParams])

  // Step 2: Shared & Tailored fields
  const [city, setCity] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')
  const [budget, setBudget] = useState('')
  const [projectDesc, setProjectDesc] = useState('')

  // 1. Promosyon Tailored Fields
  const [promosyonCategory, setPromosyonCategory] = useState('')
  const [promosyonQty, setPromosyonQty] = useState('')
  const [promosyonPrintMethod, setPromosyonPrintMethod] = useState('')
  const [promosyonPackaging, setPromosyonPackaging] = useState('')

  // 2. Açık Hava Tailored Fields
  const [acikHavaMedium, setAcikHavaMedium] = useState('')
  const [acikHavaArea, setAcikHavaArea] = useState('')
  const [acikHavaDuration, setAcikHavaDuration] = useState('')
  const [acikHavaLighting, setAcikHavaLighting] = useState('')
  const [acikHavaLocation, setAcikHavaLocation] = useState('')

  // 3. Matbaa Tailored Fields
  const [matbaaType, setMatbaaType] = useState('')
  const [matbaaQty, setMatbaaQty] = useState('')
  const [matbaaPaper, setMatbaaPaper] = useState('')
  const [matbaaFinishing, setMatbaaFinishing] = useState<string[]>([])

  // 4. Yazılım Tailored Fields
  const [yazilimType, setYazilimType] = useState('')
  const [yazilimModules, setYazilimModules] = useState<string[]>([])
  const [yazilimInfrastructure, setYazilimInfrastructure] = useState('')
  const [yazilimSupport, setYazilimSupport] = useState('')

  // 5. İnşaat Tailored Fields
  const [insaatScope, setInsaatScope] = useState('')
  const [insaatArea, setInsaatArea] = useState('')
  const [insaatDesignStatus, setInsaatDesignStatus] = useState('')
  const [insaatTimeline, setInsaatTimeline] = useState('')

  // 6. Dijital Tailored Fields
  const [dijitalScope, setDijitalScope] = useState<string[]>([])
  const [dijitalAssets, setDijitalAssets] = useState('')
  const [dijitalGoal, setDijitalGoal] = useState('')

  // Step 3: Files
  const [files, setFiles] = useState<FileItem[]>([])
  const fileRef = useRef<HTMLInputElement>(null)

  // Step 4: Contact
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [kvkk, setKvkk] = useState(false)

  const toggleService = (slug: string) => {
    setSelectedServices((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )
  }

  const toggleMultiSelect = (item: string, state: string[], setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter((prev) => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item])
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files || []).map((f) => ({ name: f.name, size: f.size }))
    setFiles((prev) => [...prev, ...picked])
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const dropped = Array.from(e.dataTransfer.files).map((f) => ({ name: f.name, size: f.size }))
    setFiles((prev) => [...prev, ...dropped])
  }

  const formatBytes = (b: number) => b < 1024 * 1024 ? `${(b / 1024).toFixed(0)} KB` : `${(b / 1024 / 1024).toFixed(1)} MB`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCompleted(true)
  }

  if (completed) {
    const mailSubject = encodeURIComponent(`Yeni Teklif Talebi: ${selectedServices.map(s => SERVICES.find(srv => srv.slug === s)?.label).join(', ')}`)
    const mailBody = encodeURIComponent(`
Ad Soyad: ${name}
Şirket: ${company || '-'}
E-posta: ${email}
Telefon: ${phone}

Hizmetler: ${selectedServices.map(s => SERVICES.find(srv => srv.slug === s)?.label).join(', ')}
Şehir: ${city || '-'}
İstenen Teslim Tarihi: ${deliveryDate || '-'}
Bütçe: ${budget || '-'}

Proje Detayları & Açıklama:
${projectDesc || '-'}
    `.trim())

    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-16"
        style={{ background: C.offwhite }}>
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8"
          style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})` }}>
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
          style={{ background: `${C.purpleAccent}15`, color: C.purpleAccent, border: `1px solid ${C.purpleAccent}30` }}>
          BİLGİLER DOĞRUDAN İLETİLDİ
        </span>

        <h1 className="font-display font-extrabold mb-4" style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: C.dark }}>
          Teklif Talebiniz Başarıyla Alındı!
        </h1>

        <p className="mb-6 mx-auto" style={{ maxWidth: 520, fontSize: 16, color: C.gray, lineHeight: 1.75 }}>
          Alana özel hazırladığınız teklif detayları ve iletişim bilgileriniz doğrudan <strong style={{ color: C.dark }}>{TARGET_EMAIL}</strong> e-posta adresimize yönlendirilmiştir.
        </p>

        <div className="p-6 rounded-sm mb-10 text-left w-full max-w-lg" style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
          <h4 className="font-display font-bold mb-3" style={{ fontSize: 16, color: C.dark }}>Talebinizin Özeti</h4>
          <div className="space-y-2 text-sm" style={{ color: C.gray }}>
            <p><strong>Alıcı E-posta:</strong> {TARGET_EMAIL}</p>
            <p><strong>İlgili Hizmetler:</strong> {selectedServices.map(s => SERVICES.find(srv => srv.slug === s)?.label).join(', ')}</p>
            <p><strong>Ad Soyad:</strong> {name} ({company ? `${company}` : 'Bireysel'})</p>
            <p><strong>İletişim:</strong> {phone} — {email}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href={`mailto:${TARGET_EMAIL}?subject=${mailSubject}&body=${mailBody}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm font-semibold text-white transition-opacity hover:opacity-85"
            style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, minHeight: 52, fontFamily: 'var(--font-display)', letterSpacing: '0.08em', fontSize: 14 }}>
            ✉️ E-POSTA UYGULAMASI İLE AÇ
          </a>
          <Link to="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-sm font-semibold transition-all hover:bg-white"
            style={{ border: '1px solid rgba(0,0,0,0.15)', color: C.gray, minHeight: 52, fontFamily: 'var(--font-display)', letterSpacing: '0.08em', fontSize: 14 }}>
            ANA SAYFAYA DÖN
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: C.offwhite, minHeight: '100vh' }}>
      <PageHero
        label="ALANA ÖZEL TEKLİF AL"
        title="Projeniz İçin"
        titleAccent="Kategoriye Özel Teklif"
        desc={`İhtiyacınız olan hizmet alanını seçin; promosyondan yazılıma, inşaattan matbaaya kadar her alana özel hazırlanan formumuzla teklif talebinizi doğrudan ${TARGET_EMAIL} adresimize iletin.`}
        bgColor={C.dark}
        breadcrumb={[{ label: 'Teklif Al' }]}
      />

      <section style={{ padding: '64px 24px 96px' }}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>

          {/* Target Email Notice Bar */}
          <div className="mb-8 p-4 rounded-sm flex items-center justify-between gap-4"
            style={{ background: '#fff', borderLeft: `4px solid ${C.purpleAccent}`, boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
            <div className="flex items-center gap-3">
              <span className="text-xl">📩</span>
              <div>
                <p style={{ fontSize: 13, color: C.muted }}>Teklif Taleplerinin İletildiği Adres:</p>
                <p className="font-display font-bold" style={{ fontSize: 15, color: C.dark }}>{TARGET_EMAIL}</p>
              </div>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
              style={{ background: `${C.purpleAccent}15`, color: C.purpleAccent }}>
              7/24 Aktif Destek
            </span>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center mb-12">
            {STEPS.map((label, i) => {
              const n = i + 1
              const done = n < step
              const active = n === step
              return (
                <div key={label} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all"
                      style={{
                        background: done || active ? `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})` : '#fff',
                        color: done || active ? '#fff' : C.muted,
                        border: `2px solid ${done || active ? 'transparent' : 'rgba(0,0,0,0.12)'}`,
                        fontFamily: 'var(--font-display)',
                      }}>
                      {done ? (
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" /></svg>
                      ) : n}
                    </div>
                    <span className="mt-2 text-center hidden sm:block"
                      style={{ fontSize: 11, color: active ? C.purpleMid : C.muted, fontWeight: active ? 600 : 400, letterSpacing: '0.05em' }}>
                      {label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="flex-1 mx-2 h-0.5 transition-all" style={{ background: done ? C.purpleAccent : 'rgba(0,0,0,0.1)' }} />
                  )}
                </div>
              )
            })}
          </div>

          {/* Form Card */}
          <div className="p-8 lg:p-12" style={{ background: '#fff', borderRadius: 6, border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 4px 30px rgba(0,0,0,0.05)' }}>

            {/* STEP 1: SERVICE SELECTION */}
            {step === 1 && (
              <div>
                <h2 className="font-display font-extrabold mb-2" style={{ fontSize: 26, color: C.dark }}>Hangi hizmet alanında teklif almak istiyorsunuz?</h2>
                <p className="mb-8" style={{ fontSize: 15, color: C.gray }}>Seçtiğiniz alana özel teklif parametreleri adım 2'de otomatik olarak yüklenecektir.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {SERVICES.map((svc) => {
                    const sel = selectedServices.includes(svc.slug)
                    return (
                      <button key={svc.slug} onClick={() => toggleService(svc.slug)}
                        className="flex flex-col items-start gap-2 p-5 rounded-sm transition-all text-left relative"
                        style={{
                          border: `2px solid ${sel ? C.purpleAccent : 'rgba(0,0,0,0.09)'}`,
                          background: sel ? `${C.purpleAccent}08` : C.offwhite,
                        }}>
                        {sel && (
                          <div className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                            style={{ background: C.purpleAccent }}>
                            <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                          </div>
                        )}
                        <span className="text-3xl mb-1">{svc.icon}</span>
                        <span className="font-display font-bold" style={{ fontSize: 15, color: C.dark }}>{svc.label}</span>
                        <span style={{ fontSize: 12, color: C.muted, lineHeight: 1.4 }}>{svc.desc}</span>
                      </button>
                    )
                  })}
                </div>

                <button disabled={selectedServices.length === 0} onClick={() => setStep(2)}
                  className="w-full flex items-center justify-center rounded-sm font-semibold text-white transition-opacity"
                  style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, padding: '16px 32px', minHeight: 56, fontFamily: 'var(--font-display)', letterSpacing: '0.1em', fontSize: 15, opacity: selectedServices.length === 0 ? 0.4 : 1 }}>
                  ALANA ÖZEL FORMA GEÇ →
                </button>
              </div>
            )}

            {/* STEP 2: TAILORED FIELDS BY CATEGORY */}
            {step === 2 && (
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold" style={{ color: C.purpleAccent }}>
                      SEÇİLEN ALAN: {selectedServices.map(s => SERVICES.find(srv => srv.slug === s)?.label).join(' + ')}
                    </span>
                    <h2 className="font-display font-extrabold mt-1" style={{ fontSize: 24, color: C.dark }}>
                      Alana Özel Detaylı Parametreler
                    </h2>
                  </div>
                  <button onClick={() => setStep(1)} className="text-xs underline font-medium" style={{ color: C.muted }}>
                    Hizmeti Değiştir
                  </button>
                </div>

                {/* --- 1. PROMOSYON ÜRÜNLERİ DYNAMIC FIELDS --- */}
                {selectedServices.includes('promosyon') && (
                  <div className="mb-8 p-6 rounded-sm space-y-5" style={{ background: C.offwhite, border: '1px solid rgba(0,0,0,0.06)' }}>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🎁</span>
                      <h3 className="font-display font-bold" style={{ fontSize: 17, color: C.dark }}>Promosyon Ürünleri Parametreleri</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Ürün Grubu / Türü</label>
                        <select value={promosyonCategory} onChange={(e) => setPromosyonCategory(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium">
                          <option value="">Seçiniz</option>
                          <option>Kurumsal Hediye Setleri</option>
                          <option>Ajanda, Defter ve Kalem</option>
                          <option>Teknolojik Ürünler (Powerbank, Kulaklık)</option>
                          <option>Tekstil Ürünleri (T-Shirt, Şapka, Sweatshirt)</option>
                          <option>Kupa, Termos ve Matara</option>
                          <option>Ofis ve Masaüstü Gereçleri</option>
                          <option>Çanta ve Seyahat Ürünleri</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Sipariş Miktarı (Adet) *</label>
                        <input type="text" placeholder="Örn: 100 Adet / 500 Adet" value={promosyonQty}
                          onChange={(e) => setPromosyonQty(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Baskı & Markalama Yöntemi</label>
                        <select value={promosyonPrintMethod} onChange={(e) => setPromosyonPrintMethod(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium">
                          <option value="">Seçiniz</option>
                          <option>Lazer Gravür</option>
                          <option>Serigrafi / Tampon Baskı</option>
                          <option>Gömme Varak / Kabartma</option>
                          <option>UV Dijital Baskı</option>
                          <option>Nakış (Tekstil için)</option>
                          <option>Kararsızım / Uzman Önerisi İstiyorum</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Kutu & Ambalaj Tercihi</label>
                        <select value={promosyonPackaging} onChange={(e) => setPromosyonPackaging(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium">
                          <option value="">Seçiniz</option>
                          <option>Özel Lüks Ahşap / Sert Kutu</option>
                          <option>Standart Kurumsal Hediye Kutusu</option>
                          <option>Kişiye Özel İsim Baskılı Ambalaj</option>
                          <option>Ambalajsız / Toplu Paket</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* --- 2. AÇIK HAVA REKLAMCILIĞI DYNAMIC FIELDS --- */}
                {selectedServices.includes('acik-hava') && (
                  <div className="mb-8 p-6 rounded-sm space-y-5" style={{ background: C.offwhite, border: '1px solid rgba(0,0,0,0.06)' }}>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🏙️</span>
                      <h3 className="font-display font-bold" style={{ fontSize: 17, color: C.dark }}>Açık Hava Reklam Parametreleri</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Mecra / Reklam Türü</label>
                        <select value={acikHavaMedium} onChange={(e) => setAcikHavaMedium(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium">
                          <option value="">Seçiniz</option>
                          <option>Billboard Ağı</option>
                          <option>CLP / Citylight Durak Raketleri</option>
                          <option>Bina / Gökdelen Cephe Giydirme (Mesh/Vinil)</option>
                          <option>Dev 4K Dış Mekan LED Ekran</option>
                          <option>Otoyol Giantboard Totem Kulesi</option>
                          <option>Araç & Otobüs Giydirme</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Tahmini Yüzey Alanı (m²)</label>
                        <input type="text" placeholder="Örn: 150 m² veya 50 CLP Durak" value={acikHavaArea}
                          onChange={(e) => setAcikHavaArea(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>İstenen Yayın Süresi</label>
                        <select value={acikHavaDuration} onChange={(e) => setAcikHavaDuration(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium">
                          <option value="">Seçiniz</option>
                          <option>1 Hafta (Lansman)</option>
                          <option>2 Hafta</option>
                          <option>1 Ay</option>
                          <option>3 Ay</option>
                          <option>6 Ay ve Üzeri (Uzun Dönem)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Aydınlatma İhtiyacı</label>
                        <select value={acikHavaLighting} onChange={(e) => setAcikHavaLighting(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium">
                          <option value="">Seçiniz</option>
                          <option>İçten Aydınlatmalı (Backlit)</option>
                          <option>Dış Harici LED Projeksiyonlu</option>
                          <option>Standart (Aydınlatmasız)</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Hedef Şehir ve Lokasyon Detayı</label>
                        <input type="text" placeholder="Örn: İstanbul Maslak / Ankara Kızılay / 81 İl Geneli" value={acikHavaLocation}
                          onChange={(e) => setAcikHavaLocation(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium" />
                      </div>
                    </div>
                  </div>
                )}

                {/* --- 3. MATBAA VE BASKI DYNAMIC FIELDS --- */}
                {selectedServices.includes('matbaa') && (
                  <div className="mb-8 p-6 rounded-sm space-y-5" style={{ background: C.offwhite, border: '1px solid rgba(0,0,0,0.06)' }}>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🖨️</span>
                      <h3 className="font-display font-bold" style={{ fontSize: 17, color: C.dark }}>Matbaa ve Baskı Parametreleri</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Baskı Ürün Türü</label>
                        <select value={matbaaType} onChange={(e) => setMatbaaType(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium">
                          <option value="">Seçiniz</option>
                          <option>Katalog & Broşür</option>
                          <option>Kartvizit & Kurumsal Evrak</option>
                          <option>Kutu Ambalajı & Etiket</option>
                          <option>Ofset Baskı (Büyük Ebat)</option>
                          <option>Dijital Baskı</option>
                          <option>Özel Dergi / Kitapçık</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Baskı Adedi *</label>
                        <input type="text" placeholder="Örn: 1.000 Adet / 5.000 Adet" value={matbaaQty}
                          onChange={(e) => setMatbaaQty(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Kağıt Türü ve Gramajı</label>
                        <select value={matbaaPaper} onChange={(e) => setMatbaaPaper(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium">
                          <option value="">Seçiniz</option>
                          <option>350gr Mat/Parlak Kuşe</option>
                          <option>170gr İç Sayfa Kuşe</option>
                          <option>1. Hamur Beyaz Kağıt</option>
                          <option>Özel Dokulu Fantezi Kağıt</option>
                          <option>Kraft / Geri Dönüştürülmüş Kağıt</option>
                          <option>Uzman Önerisi İstiyorum</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Özel İşçilikler (Çoklu Seçilebilir)</label>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {['Kısmi Lak', 'Gömme Altın Varak', 'Kadife Selefon', 'Özel Bıçak Kesim', 'Tel Dikiş / Cilt'].map((opt) => (
                            <button type="button" key={opt} onClick={() => toggleMultiSelect(opt, matbaaFinishing, setMatbaaFinishing)}
                              className={`px-3 py-1.5 rounded-sm text-xs font-semibold border transition-all ${matbaaFinishing.includes(opt) ? 'bg-purple-600 text-white border-transparent' : 'bg-white text-gray-900 border-gray-300'}`}>
                              {matbaaFinishing.includes(opt) ? '✓ ' : '+ '}{opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* --- 4. YAZILIM GELİŞTİRME DYNAMIC FIELDS --- */}
                {selectedServices.includes('yazilim') && (
                  <div className="mb-8 p-6 rounded-sm space-y-5" style={{ background: C.offwhite, border: '1px solid rgba(0,0,0,0.06)' }}>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">⚙️</span>
                      <h3 className="font-display font-bold" style={{ fontSize: 17, color: C.dark }}>Yazılım Proje Parametreleri</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Yazılım Türü</label>
                        <select value={yazilimType} onChange={(e) => setYazilimType(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium">
                          <option value="">Seçiniz</option>
                          <option>Kurumsal Web Uygulaması / Portal</option>
                          <option>Mobil Uygulama (iOS & Android)</option>
                          <option>ERP / CRM Entegrasyonu</option>
                          <option>İş Otomasyonu & Veritabanı Sistemleri</option>
                          <option>E-Ticaret Yazılımı & Ödeme Sistemleri</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Mevcut Altyapı Durumu</label>
                        <select value={yazilimInfrastructure} onChange={(e) => setYazilimInfrastructure(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium">
                          <option value="">Seçiniz</option>
                          <option>Sıfırdan Yeni Proje</option>
                          <option>Mevcut Yazılımın Yenilenmesi / Kod Revizyonu</option>
                          <option>Mevcut Sisteme API Entegrasyonu</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Gerekli Modüller / Özellikler</label>
                        <div className="flex flex-wrap gap-2">
                          {['Kullanıcı & Rol Yönetimi', 'iyzico / Stripe Ödeme Altyapısı', 'REST API Entegrasyonu', 'Çoklu Dil Desteği', 'Gelişmiş Raporlama Paneli', 'SMS / E-Posta Bildirimi'].map((mod) => (
                            <button type="button" key={mod} onClick={() => toggleMultiSelect(mod, yazilimModules, setYazilimModules)}
                              className={`px-3 py-1.5 rounded-sm text-xs font-semibold border transition-all ${yazilimModules.includes(mod) ? 'bg-purple-600 text-white border-transparent' : 'bg-white text-gray-900 border-gray-300'}`}>
                              {yazilimModules.includes(mod) ? '✓ ' : '+ '}{mod}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* --- 5. İNŞAAT & KURUMSAL YAPI DYNAMIC FIELDS --- */}
                {selectedServices.includes('insaat') && (
                  <div className="mb-8 p-6 rounded-sm space-y-5" style={{ background: C.offwhite, border: '1px solid rgba(0,0,0,0.06)' }}>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🏗️</span>
                      <h3 className="font-display font-bold" style={{ fontSize: 17, color: C.dark }}>İnşaat ve Yapı Parametreleri</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Proje Kapsamı</label>
                        <select value={insaatScope} onChange={(e) => setInsaatScope(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium">
                          <option value="">Seçiniz</option>
                          <option>Kurumsal Ofis Dekorasyon & İç Mimari</option>
                          <option>Ticari Mağaza / Restoran Yapımı</option>
                          <option>Mimari Proje Çizimi & Uygulama</option>
                          <option>Anahtar Teslim Kurumsal Yapı</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Toplam Uygulama Alanı (m²)</label>
                        <input type="text" placeholder="Örn: 250 m² veya 1.200 m²" value={insaatArea}
                          onChange={(e) => setInsaatArea(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Mimari Çizim Durumu</label>
                        <select value={insaatDesignStatus} onChange={(e) => setInsaatDesignStatus(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium">
                          <option value="">Seçiniz</option>
                          <option>Mimari / 3D Çizimlerimiz Hazır</option>
                          <option>Çizim ve Tasarım Hizmeti Dahil İstiyorum</option>
                          <option>Rölöve Alınması Gerekiyor</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Başlangıç Zamanlaması</label>
                        <select value={insaatTimeline} onChange={(e) => setInsaatTimeline(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium">
                          <option value="">Seçiniz</option>
                          <option>Hemen Başlanacak (Acil)</option>
                          <option>1 Ay İçinde</option>
                          <option>1-3 Ay İçinde</option>
                          <option>Planlama Aşamasında</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* --- 6. DİJİTAL ÇÖZÜMLER DYNAMIC FIELDS --- */}
                {selectedServices.includes('dijital') && (
                  <div className="mb-8 p-6 rounded-sm space-y-5" style={{ background: C.offwhite, border: '1px solid rgba(0,0,0,0.06)' }}>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">💻</span>
                      <h3 className="font-display font-bold" style={{ fontSize: 17, color: C.dark }}>Dijital Çözümler Parametreleri</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Dijital Hizmet Kapsamı (Çoklu Seçilebilir)</label>
                        <div className="flex flex-wrap gap-2">
                          {['Web Tasarımı', 'E-Ticaret Kurulumu', 'Sosyal Medya Yönetimi', 'Google / Meta Reklam Kampanyası', 'Kurumsal Kimlik Tasarımı', 'Video Prodüksiyon & Tanıtım Filmi'].map((dOpt) => (
                            <button type="button" key={dOpt} onClick={() => toggleMultiSelect(dOpt, dijitalScope, setDijitalScope)}
                              className={`px-3 py-1.5 rounded-sm text-xs font-semibold border transition-all ${dijitalScope.includes(dOpt) ? 'bg-purple-600 text-white border-transparent' : 'bg-white text-gray-900 border-gray-300'}`}>
                              {dijitalScope.includes(dOpt) ? '✓ ' : '+ '}{dOpt}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Kurumsal Kimlik Durumu</label>
                        <select value={dijitalAssets} onChange={(e) => setDijitalAssets(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium">
                          <option value="">Seçiniz</option>
                          <option>Logo ve Kurumsal Materyallerimiz Hazır</option>
                          <option>Sıfırdan Tasarlanmasını İstiyorum</option>
                          <option>Yenilenmesi / Modernize Edilmesi Gerekiyor</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>Ana Kampanya Hedefiniz</label>
                        <select value={dijitalGoal} onChange={(e) => setDijitalGoal(e.target.value)}
                          style={inputControlStyle}
                          className="w-full px-4 py-3 rounded-sm text-sm font-medium">
                          <option value="">Seçiniz</option>
                          <option>Marka Bilinirliği ve İmaj Artışı</option>
                          <option>Doğrudan Satış ve Müşteri Talebi (Lead) Elde Etmek</option>
                          <option>Yeni Ürün / Hizmet Lansmanı</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* COMMON FIELDS FOR ALL CATEGORIES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: C.dark }}>Projenin Uygulanacağı Şehir / Bölge</label>
                    <input type="text" placeholder="Örn: İstanbul / Ankara / Tüm Türkiye" value={city}
                      onChange={(e) => setCity(e.target.value)}
                      style={inputControlStyle}
                      className="w-full px-4 py-3 rounded-sm text-sm font-medium" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: C.dark }}>İstenen Teslim / Lansman Tarihi</label>
                    <input type="date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)}
                      style={inputControlStyle}
                      className="w-full px-4 py-3 rounded-sm text-sm font-medium" />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-2" style={{ color: C.dark }}>Tahmini Bütçe Aralığı</label>
                    <select value={budget} onChange={(e) => setBudget(e.target.value)}
                      style={inputControlStyle}
                      className="w-full px-4 py-3 rounded-sm text-sm font-medium">
                      <option value="">Bütçe Seçin (İsteğe Bağlı)</option>
                      {BUDGET_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-2" style={{ color: C.dark }}>Ek Açıklamalar ve Özel Notlarınız</label>
                    <textarea rows={4} placeholder="Projeniz hakkında belirtmek istediğiniz ek detaylar, özel renk kodu, ebat bilgileri vb."
                      value={projectDesc} onChange={(e) => setProjectDesc(e.target.value)}
                      style={inputControlStyle}
                      className="w-full px-4 py-3 rounded-sm text-sm font-medium resize-none" />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="flex-1 px-6 py-4 rounded-sm font-semibold border border-gray-300 text-gray-700 text-sm">
                    ← GERİ
                  </button>
                  <button onClick={() => setStep(3)}
                    className="flex-1 sm:flex-none sm:px-10 flex items-center justify-center rounded-sm font-semibold text-white transition-opacity hover:opacity-85"
                    style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, minHeight: 52, letterSpacing: '0.08em', fontSize: 14 }}>
                    İLERİ (DOSYA YÜKLEME) →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: FILE UPLOAD */}
            {step === 3 && (
              <div>
                <h2 className="font-display font-extrabold mb-2" style={{ fontSize: 26, color: C.dark }}>Tasarım / Vektör Dosyaları Yükleme</h2>
                <p className="mb-8" style={{ fontSize: 15, color: C.gray }}>Varsa ambalaj, logo veya mimari projenize ait çizim dosyalarını ekleyin. Şimdilik yoksa bu adımı atlayabilirsiniz.</p>

                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  onClick={() => fileRef.current?.click()}
                  className="flex flex-col items-center justify-center gap-4 mb-6 cursor-pointer transition-colors"
                  style={{ border: `2px dashed ${C.purpleAccent}60`, borderRadius: 6, padding: '48px 24px', background: `${C.purpleAccent}06` }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: `${C.purpleAccent}15` }}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: C.purpleAccent }}>
                      <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold mb-1" style={{ color: C.dark }}>Dosyaları buraya sürükleyin veya tıklayın</p>
                    <p style={{ fontSize: 13, color: C.muted }}>PDF, AI, EPS, DWG, PSD, JPG, PNG — maks. 50 MB</p>
                  </div>
                  <input ref={fileRef} type="file" multiple accept=".pdf,.ai,.eps,.dwg,.psd,.jpg,.jpeg,.png" className="hidden" onChange={handleFileChange} />
                </div>

                {files.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {files.map((f, i) => (
                      <li key={i} className="flex items-center justify-between px-4 py-3 rounded-sm bg-gray-50 border border-gray-200">
                        <div>
                          <span className="text-sm font-medium text-gray-800">{f.name}</span>
                          <span className="ml-3 text-xs text-gray-500">{formatBytes(f.size)}</span>
                        </div>
                        <button onClick={() => setFiles((prev) => prev.filter((_, j) => j !== i))}
                          className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-red-50 text-gray-500">×</button>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <button onClick={() => setStep(2)} className="flex-1 px-6 py-4 rounded-sm font-semibold border border-gray-300 text-gray-700 text-sm">
                      ← GERİ
                    </button>
                    <button onClick={() => setStep(4)}
                      className="flex-1 sm:flex-none sm:px-10 flex items-center justify-center rounded-sm font-semibold text-white transition-opacity hover:opacity-85"
                      style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, minHeight: 52, letterSpacing: '0.08em', fontSize: 14 }}>
                      SON ADIM (İLETİŞİM BİLGİLERİ) →
                    </button>
                  </div>
                  <button onClick={() => setStep(4)} className="text-center text-xs underline text-gray-500 hover:text-gray-800">
                    Dosya yüklemeden devam etmek istiyorum →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: CONTACT & DIRECT EMAIL SUBMISSION */}
            {step === 4 && (
              <form onSubmit={handleSubmit}>
                <h2 className="font-display font-extrabold mb-2" style={{ fontSize: 26, color: C.dark }}>İletişim & Gönderim Bilgileri</h2>
                <p className="mb-6" style={{ fontSize: 15, color: C.gray }}>
                  Teklif talebiniz doğrudan <strong className="text-purple-700">{TARGET_EMAIL}</strong> adresimize iletilecektir.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                  {[
                    { label: 'Ad Soyad *', value: name, set: setName, type: 'text', placeholder: 'Adınız ve soyadınız', required: true },
                    { label: 'Şirket Adı', value: company, set: setCompany, type: 'text', placeholder: 'Şirketiniz (opsiyonel)', required: false },
                    { label: 'E-posta Adresiniz *', value: email, set: setEmail, type: 'email', placeholder: 'ornek@sirket.com', required: true },
                    { label: 'Telefon Numarası *', value: phone, set: setPhone, type: 'tel', placeholder: '+90 5XX XXX XX XX', required: true },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: C.dark }}>{f.label}</label>
                      <input type={f.type} required={f.required} placeholder={f.placeholder} value={f.value}
                        onChange={(e) => f.set(e.target.value)}
                        style={inputControlStyle}
                        className="w-full px-4 py-3 rounded-sm text-sm font-medium" />
                    </div>
                  ))}
                </div>

                <label className="flex items-start gap-3 mb-8 cursor-pointer">
                  <input type="checkbox" required checked={kvkk} onChange={(e) => setKvkk(e.target.checked)}
                    className="mt-1 flex-shrink-0 w-4 h-4 rounded-sm accent-purple-600" />
                  <span style={{ fontSize: 13, color: C.gray, lineHeight: 1.6 }}>
                    Kişisel verilerimin <Link to="/kvkk-aydinlatma-metni" className="text-purple-600 underline">KVKK Aydınlatma Metni</Link> kapsamında <strong className="text-gray-800">{TARGET_EMAIL}</strong> adresine iletilmesini kabul ediyorum. *
                  </span>
                </label>

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(3)} className="flex-1 px-6 py-4 rounded-sm font-semibold border border-gray-300 text-gray-700 text-sm">
                    ← GERİ
                  </button>
                  <button type="submit"
                    className="flex-1 sm:flex-none sm:px-10 flex items-center justify-center rounded-sm font-semibold text-white transition-opacity hover:opacity-85"
                    style={{ background: `linear-gradient(135deg, ${C.purpleDeep}, ${C.purpleAccent})`, minHeight: 54, fontFamily: 'var(--font-display)', letterSpacing: '0.08em', fontSize: 14 }}>
                    TEKLİFİ INFO@MUTEKAVVIM.COM'A GÖNDER
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
