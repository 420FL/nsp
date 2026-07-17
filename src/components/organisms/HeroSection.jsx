import { useTranslation } from 'react-i18next'
import Button from '../atoms/Button.jsx'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const { t } = useTranslation()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')`,
        }}
      />
      {/* Dark + warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f00]/80 via-[#2C3E50]/70 to-[#1a0f00]/75" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="block h-px w-12 bg-[var(--color-primary)]" />
          <span className="text-[var(--color-primary)] text-sm font-semibold tracking-[0.3em] uppercase">
            Nanda Service Platform
          </span>
          <span className="block h-px w-12 bg-[var(--color-primary)]" />
        </div>

        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {t('hero.title')}
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          {t('hero.subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollTo('contact')}
          >
            {t('hero.cta_quote')}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo('contact')}
            className="border-white text-white hover:bg-white hover:text-[var(--color-secondary)]"
          >
            {t('hero.cta_meeting')}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('testimonials')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white cursor-pointer transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </button>
    </section>
  )
}
