import { useTranslation } from 'react-i18next'
import SectionTitle from '../atoms/SectionTitle.jsx'
import CaseCard from '../molecules/CaseCard.jsx'
import { cases } from '../../data/cases.js'

export default function CasesSection() {
  const { t } = useTranslation()

  return (
    <section id="cases" className="py-20 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('cases.section_title')}
          subtitle={t('cases.section_subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map(c => (
            <CaseCard key={c.id} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}
