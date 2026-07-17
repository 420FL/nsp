/**
 * Button atom — variantes: primary | outline | ghost
 * Soporta `as="a"` para links, `href`, `onClick`, `disabled`
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer select-none'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary:
      'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dk)] focus-visible:ring-[var(--color-primary)] disabled:opacity-50 disabled:cursor-not-allowed',
    outline:
      'border border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-primary)] hover:text-white focus-visible:ring-[var(--color-primary)] disabled:opacity-50',
    ghost:
      'text-[var(--color-text)] bg-transparent hover:bg-[var(--color-surface-2)] focus-visible:ring-[var(--color-border)] disabled:opacity-50',
    secondary:
      'bg-[var(--color-secondary)] text-white hover:opacity-90 focus-visible:ring-[var(--color-secondary)] disabled:opacity-50',
  }

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
