import { useTranslation } from 'react-i18next'
import SectionTitle from '../atoms/SectionTitle.jsx'
import { team, values } from '../../data/about.js'
import { Star, Search, Shield, Lightbulb, Leaf } from 'lucide-react'

const VALUE_ICONS = { Star, Search, Shield, Lightbulb, Leaf }

export default function AboutSection() {
  const { t, i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  return (
    <section id="about" className="py-20 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('about.section_title')}
          subtitle={t('about.section_subtitle')}
        />

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            { key: 'mission', titleKey: 'about.mission_title', textKey: 'about.mission_text' },
            { key: 'vision', titleKey: 'about.vision_title', textKey: 'about.vision_text' },
          ].map(({ key, titleKey, textKey }) => (
            <div key={key} className="p-8 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-3 h-3 rounded-full bg-[var(--color-primary)]" />
                <h3 className="text-xl font-semibold text-[var(--color-secondary)]" style={{ fontFamily: 'var(--font-serif)' }}>
                  {t(titleKey)}
                </h3>
              </div>
              <p className="text-[var(--color-text-muted)] leading-relaxed">{t(textKey)}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[var(--color-secondary)] text-center mb-8"
            style={{ fontFamily: 'var(--font-serif)' }}>
            {t('about.values_title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map(v => {
              const Icon = VALUE_ICONS[v.icon]
              const vData = t(`about.values.${v.key}`, { returnObjects: true })
              return (
                <div key={v.key} className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
                  {Icon && <Icon size={28} strokeWidth={1.5} className="text-[var(--color-primary)]" />}
                  <h4 className="font-semibold text-sm text-[var(--color-secondary)]">{vData.title}</h4>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{vData.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-semibold text-[var(--color-secondary)] text-center mb-8"
            style={{ fontFamily: 'var(--font-serif)' }}>
            {t('about.team_title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(member => (
              <div key={member.id} className="flex flex-col items-center text-center gap-3 p-6 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:shadow-md transition-shadow">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--color-secondary)]" style={{ fontFamily: 'var(--font-serif)' }}>
                    {member.name}
                  </h4>
                  <p className="text-xs text-[var(--color-primary)] font-medium">
                    {isEn ? member.roleEn : member.role}
                  </p>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {isEn ? member.bioEn : member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
