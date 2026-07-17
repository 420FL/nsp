import { Quote } from 'lucide-react'

/**
 * TestimonialCard molecule — tarjeta de testimonio para el carrusel
 */
export default function TestimonialCard({ quote, name, role, company, initials, bgColor = '#C8962E' }) {
  return (
    <div className="flex flex-col gap-5 p-8 rounded-xl bg-[var(--color-white)] border border-[var(--color-border)] h-full">
      {/* Quote icon */}
      <Quote size={28} className="text-[var(--color-primary)] opacity-60" strokeWidth={1.5} />

      {/* Testimony text */}
      <blockquote className="text-[var(--color-text)] text-sm md:text-base leading-relaxed flex-1 italic">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
        {/* Avatar with initials */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0"
          style={{ backgroundColor: bgColor }}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-secondary)]">{name}</p>
          <p className="text-xs text-[var(--color-text-muted)]">{role} · {company}</p>
        </div>
      </div>
    </div>
  )
}
