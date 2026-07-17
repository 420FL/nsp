import { useTranslation } from 'react-i18next'

/**
 * LanguageToggle atom — alterna entre ES y EN
 */
export default function LanguageToggle({ className = '' }) {
  const { i18n, t } = useTranslation()

  const toggle = () => {
    const next = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(next)
    localStorage.setItem('nsp-lang', next)
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch language to ${i18n.language === 'es' ? 'English' : 'Español'}`}
      className={`text-sm font-semibold px-3 py-1 rounded border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors cursor-pointer ${className}`}
    >
      {t('lang_toggle')}
    </button>
  )
}
