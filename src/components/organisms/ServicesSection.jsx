import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../atoms/SectionTitle.jsx'
import ServiceCard from '../molecules/ServiceCard.jsx'
import { services } from '../../data/services.js'

export default function ServicesSection() {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="py-20 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('services.section_title')}
          subtitle={t('services.section_subtitle')}
        />

        {/* Service tabs */}
        <div className="flex flex-col sm:flex-row gap-2 justify-center mb-10">
          {services.map((svc, idx) => (
            <button
              key={svc.id}
              onClick={() => setActive(idx)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer
                ${active === idx
                  ? 'bg-[var(--color-primary)] text-white shadow-md'
                  : 'bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-2)]'
                }`}
            >
              <svc.icon size={16} strokeWidth={1.5} />
              {t(svc.titleKey)}
            </button>
          ))}
        </div>

        {/* Active service detail */}
        {services.map((svc, idx) => (
          <div
            key={svc.id}
            className={`transition-opacity duration-300 ${active === idx ? 'block' : 'hidden'}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Main card */}
              <ServiceCard
                icon={svc.icon}
                title={t(svc.titleKey)}
                description={t(svc.descKey)}
                items={t(svc.itemsKey, { returnObjects: true })}
                active={true}
              />

              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-4">
                {svc.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-2 p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors"
                  >
                    <feat.icon size={24} strokeWidth={1.5} className="text-[var(--color-primary)]" />
                    <p className="text-sm font-medium text-[var(--color-secondary)]">{feat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
