import Badge from '../atoms/Badge.jsx'
import Button from '../atoms/Button.jsx'
import { useTranslation } from 'react-i18next'

/**
 * CatalogCard molecule — tarjeta de producto para el catálogo
 */
export default function CatalogCard({ name, description, priceRange, occasion, clientType, image, category }) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-white)] hover:shadow-md transition-shadow duration-200">
      {/* Image */}
      <div className="h-44 bg-[var(--color-surface)] flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-[var(--color-text-muted)]">
            <span className="text-4xl">🎁</span>
            <span className="text-xs">{category}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex flex-wrap gap-1">
          <Badge color="cream">{occasion}</Badge>
          <Badge color="neutral">{clientType}</Badge>
        </div>
        <h4 className="font-semibold text-[var(--color-secondary)] text-sm leading-snug">{name}</h4>
        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed flex-1">{description}</p>
        <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border)]">
          <span className="text-sm font-semibold text-[var(--color-primary)]">{priceRange}</span>
          <Button variant="outline" size="sm">{t('catalog.quote_btn')}</Button>
        </div>
      </div>
    </div>
  )
}
