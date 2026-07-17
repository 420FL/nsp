import Badge from '../atoms/Badge.jsx'
import { useTranslation } from 'react-i18next'
import { TrendingUp } from 'lucide-react'

/**
 * CaseCard molecule — tarjeta de caso de éxito
 */
export default function CaseCard({ client, industry, challenge, solution, result, logo }) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-5 p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-white)] hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-semibold text-[var(--color-secondary)] text-base" style={{ fontFamily: 'var(--font-serif)' }}>
            {client}
          </h4>
          <Badge color="navy" className="mt-1">{industry}</Badge>
        </div>
        <TrendingUp size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-1" strokeWidth={1.5} />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-3 text-sm">
        <div className="p-3 rounded-lg bg-[var(--color-surface)] border-l-2 border-[var(--color-primary)]">
          <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-1">{t('cases.challenge')}</p>
          <p className="text-[var(--color-text)] leading-snug">{challenge}</p>
        </div>
        <div className="p-3 rounded-lg bg-[var(--color-surface)]">
          <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-1">{t('cases.solution')}</p>
          <p className="text-[var(--color-text)] leading-snug">{solution}</p>
        </div>
        <div className="p-3 rounded-lg bg-[var(--color-secondary)] text-white">
          <p className="text-xs font-semibold opacity-70 uppercase tracking-wide mb-1">{t('cases.result')}</p>
          <p className="leading-snug font-medium">{result}</p>
        </div>
      </div>
    </div>
  )
}
