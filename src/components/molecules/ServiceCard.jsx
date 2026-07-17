import Badge from '../atoms/Badge.jsx'

/**
 * ServiceCard molecule — tarjeta de servicio con ícono, título, descripción y sub-items
 */
export default function ServiceCard({ icon: Icon, title, description, items = [], active = false }) {
  return (
    <div
      className={`flex flex-col gap-4 p-6 rounded-xl border transition-all duration-200
        ${active
          ? 'border-[var(--color-primary)] bg-[var(--color-surface)] shadow-md'
          : 'border-[var(--color-border)] bg-[var(--color-white)] hover:border-[var(--color-primary)] hover:shadow-sm'
        }`}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <span className="p-2 rounded-lg bg-[var(--color-surface)] text-[var(--color-primary)]">
            <Icon size={22} strokeWidth={1.5} />
          </span>
        )}
        <h3 className="text-lg font-semibold text-[var(--color-secondary)]" style={{ fontFamily: 'var(--font-serif)' }}>
          {title}
        </h3>
      </div>
      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{description}</p>
      {items.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-1">
          {items.map(item => (
            <Badge key={item} color="cream">{item}</Badge>
          ))}
        </div>
      )}
    </div>
  )
}
