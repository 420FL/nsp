import { Eye, EyeOff } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useHighContrast } from '../../hooks/useHighContrast.js'

/**
 * AccessibilityToggle atom — activa/desactiva el modo alto contraste
 */
export default function AccessibilityToggle({ className = '' }) {
  const { isHighContrast, toggle } = useHighContrast()
  const { t } = useTranslation()

  return (
    <button
      onClick={toggle}
      aria-label={isHighContrast ? t('accessibility.toggle_off') : t('accessibility.toggle_label')}
      title={isHighContrast ? t('accessibility.toggle_off') : t('accessibility.toggle_label')}
      className={`p-2 rounded-md transition-colors cursor-pointer
        ${isHighContrast
          ? 'bg-[var(--color-primary)] text-white'
          : 'text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)]'
        } ${className}`}
    >
      {isHighContrast ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
  )
}
