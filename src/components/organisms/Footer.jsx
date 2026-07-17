import { useTranslation } from 'react-i18next'
import { Share2, Briefcase, Mail, Phone } from 'lucide-react'

const SECTIONS = ['home', 'services', 'cases', 'catalog', 'about', 'blog', 'contact']

export default function Footer() {
  const { t } = useTranslation()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="bg-[var(--color-secondary)] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}NSP_logo.jpg`}
                alt="NSP Logo"
                className="h-10 w-10 rounded-full object-cover border-2 border-[var(--color-primary)]"
              />
              <span className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-serif)' }}>NSP</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/10 hover:bg-[var(--color-primary)] transition-colors">
                <Share2 size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-md bg-white/10 hover:bg-[var(--color-primary)] transition-colors">
                <Briefcase size={16} />
              </a>
              <a href="mailto:contacto@nsp-chile.com"
                className="p-2 rounded-md bg-white/10 hover:bg-[var(--color-primary)] transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-white/50 text-xs uppercase tracking-widest mb-4">{t('footer.links_title')}</h5>
            <ul className="flex flex-col gap-2">
              {SECTIONS.map(id => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-white/70 hover:text-[var(--color-primary)] text-sm transition-colors cursor-pointer"
                  >
                    {t(`nav.${id}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h5 className="text-white/50 text-xs uppercase tracking-widest mb-4">{t('footer.contact_title')}</h5>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail size={14} className="text-[var(--color-primary)]" />
                contacto@nsp-chile.com
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone size={14} className="text-[var(--color-primary)]" />
                +56 9 1234 5678
              </li>
              <li className="text-sm text-white/70 mt-2">
                Santiago, Chile
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} NSP — Nanda Service Platform. {t('footer.rights')}</span>
          <span>{t('footer.made_chile')}</span>
        </div>
      </div>
    </footer>
  )
}
