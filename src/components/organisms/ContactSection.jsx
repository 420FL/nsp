import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../atoms/SectionTitle.jsx'
import Button from '../atoms/Button.jsx'
import { MessageCircle, Calendar, CheckCircle } from 'lucide-react'

const SERVICES = [
  'services.catering.title',
  'services.gifts.title',
  'services.programs.title',
]

const INITIAL = { name: '', company: '', email: '', phone: '', service: '', message: '' }

export default function ContactSection() {
  const { t } = useTranslation()
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = t('contact.required')
    if (!form.email.trim()) e.email = t('contact.required')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t('contact.invalid_email')
    if (!form.message.trim()) e.message = t('contact.required')
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSending(true)
    // Simulate async send
    setTimeout(() => { setSending(false); setSent(true) }, 1200)
  }

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: undefined }))
  }

  const inputCls = (field) =>
    `w-full px-4 py-3 rounded-lg border text-sm bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-colors
    ${errors[field] ? 'border-red-400' : 'border-[var(--color-border)]'}`

  return (
    <section id="contact" className="py-20 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('contact.section_title')}
          subtitle={t('contact.section_subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <CheckCircle size={48} className="text-[var(--color-primary)]" strokeWidth={1.5} />
                <h3 className="text-2xl font-semibold text-[var(--color-secondary)]" style={{ fontFamily: 'var(--font-serif)' }}>
                  {t('contact.success_title')}
                </h3>
                <p className="text-[var(--color-text-muted)]">{t('contact.success_text')}</p>
                <Button variant="outline" size="sm" onClick={() => { setSent(false); setForm(INITIAL) }}>
                  Enviar otra consulta
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1 uppercase tracking-wide">{t('contact.name')}</label>
                    <input name="name" value={form.name} onChange={handleChange} className={inputCls('name')} placeholder="María González" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1 uppercase tracking-wide">{t('contact.company')}</label>
                    <input name="company" value={form.company} onChange={handleChange} className={inputCls('company')} placeholder="Empresa S.A." />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1 uppercase tracking-wide">{t('contact.email')}</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} className={inputCls('email')} placeholder="maria@empresa.cl" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1 uppercase tracking-wide">{t('contact.phone')}</label>
                    <input name="phone" value={form.phone} onChange={handleChange} className={inputCls('phone')} placeholder="+56 9 1234 5678" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1 uppercase tracking-wide">{t('contact.service')}</label>
                  <select name="service" value={form.service} onChange={handleChange} className={inputCls('service')}>
                    <option value="">{t('contact.select_service')}</option>
                    {SERVICES.map(s => <option key={s} value={t(s)}>{t(s)}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text-muted)] mb-1 uppercase tracking-wide">{t('contact.message')}</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} className={inputCls('message')} placeholder={t('contact.placeholder_message')} />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <Button type="submit" variant="primary" size="lg" disabled={sending} className="w-full mt-2">
                  {sending ? t('contact.sending') : t('contact.send')}
                </Button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-5 justify-start pt-2">
            <div className="p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
              <h4 className="font-semibold text-[var(--color-secondary)] mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                Otras formas de contacto
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/56912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 hover:bg-green-100 transition-colors text-sm font-medium"
                >
                  <MessageCircle size={18} />
                  {t('contact.whatsapp')}
                </a>
                <a
                  href="https://calendly.com/nsp-chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 transition-colors text-sm font-medium"
                >
                  <Calendar size={18} />
                  {t('contact.calendly')}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[var(--color-secondary)] text-white">
              <h4 className="font-semibold mb-2" style={{ fontFamily: 'var(--font-serif)' }}>¿Tienes un evento próximo?</h4>
              <p className="text-sm text-white/80 leading-relaxed">
                No importa el tamaño ni el plazo. NSP trabaja con tu agenda para hacer que cada detalle quede impecable.
              </p>
              <div className="mt-4 text-[var(--color-primary)] font-semibold text-sm">
                contacto@nsp-chile.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
