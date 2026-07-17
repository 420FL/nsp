import Badge from '../atoms/Badge.jsx'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from 'lucide-react'

/**
 * BlogCard molecule — tarjeta de artículo de blog
 */
export default function BlogCard({ title, excerpt, date, category, categoryKey, image }) {
  const { t } = useTranslation()
  const catLabel = t(`blog.categories.${categoryKey}`, { defaultValue: category })

  return (
    <article className="flex flex-col rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-white)] hover:shadow-md transition-shadow duration-200 group cursor-pointer">
      {/* Image */}
      <div className="h-44 bg-[var(--color-surface)] overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-5xl opacity-30">📝</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center justify-between">
          <Badge color="cream">{catLabel}</Badge>
          <span className="text-xs text-[var(--color-text-muted)]">{date}</span>
        </div>
        <h4
          className="font-semibold text-[var(--color-secondary)] text-base leading-snug group-hover:text-[var(--color-primary)] transition-colors"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {title}
        </h4>
        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed flex-1">{excerpt}</p>
        <span className="text-xs font-semibold text-[var(--color-primary)] flex items-center gap-1 mt-1">
          {t('blog.read_more')} <ArrowRight size={12} />
        </span>
      </div>
    </article>
  )
}
