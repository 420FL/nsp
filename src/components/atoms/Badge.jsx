/**
 * Badge atom — etiqueta de categoría/tipo
 * color: 'gold' | 'navy' | 'cream' | 'neutral'
 */
export default function Badge({ children, color = 'gold', className = '' }) {
  const colors = {
    gold: 'bg-[var(--color-primary)] text-white',
    navy: 'bg-[var(--color-secondary)] text-white',
    cream: 'bg-[var(--color-surface)] text-[var(--color-secondary)] border border-[var(--color-border)]',
    neutral: 'bg-[var(--color-surface-2)] text-[var(--color-text-muted)]',
  }

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full tracking-wide ${colors[color]} ${className}`}
    >
      {children}
    </span>
  )
}
