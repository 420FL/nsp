/**
 * SectionTitle atom — título de sección con acento dorado
 * align: 'left' | 'center'
 */
export default function SectionTitle({ title, subtitle, align = 'center', className = '' }) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 mb-12 ${alignCls} ${className}`}>
      {/* Decorative gold line */}
      <div className="flex items-center gap-3">
        <span className="block h-px w-8 bg-[var(--color-primary)]" />
        <h2
          className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-secondary)]"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {title}
        </h2>
        <span className="block h-px w-8 bg-[var(--color-primary)]" />
      </div>
      {subtitle && (
        <p className="text-[var(--color-text-muted)] text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
