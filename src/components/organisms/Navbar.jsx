import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import LanguageToggle from '../atoms/LanguageToggle.jsx'
import AccessibilityToggle from '../atoms/AccessibilityToggle.jsx'
import { useScrollSpy } from '../../hooks/useScrollSpy.js'

const SECTION_IDS = ['home', 'testimonials', 'services', 'cases', 'catalog', 'about', 'blog', 'contact']

export default function Navbar() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  const navLinks = [
    { id: 'home',         label: t('nav.home') },
    { id: 'testimonials', label: t('nav.testimonials') },
    { id: 'services',     label: t('nav.services') },
    { id: 'cases',        label: t('nav.cases') },
    { id: 'catalog',      label: t('nav.catalog') },
    { id: 'about',        label: t('nav.about') },
    { id: 'blog',         label: t('nav.blog') },
    { id: 'contact',      label: t('nav.contact') },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled || menuOpen
          ? 'bg-[var(--color-secondary)] shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2 cursor-pointer" aria-label="NSP Home">
            <img
              src={`${import.meta.env.BASE_URL}NSP_logo.jpg`}
              alt="NSP Logo"
              className="h-9 w-9 rounded-full object-cover border-2 border-[var(--color-primary)]"
            />
            <span
              className="text-white font-bold text-lg tracking-wide hidden sm:block"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              NSP
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer
                  ${activeId === link.id
                    ? 'text-[var(--color-primary)]'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <AccessibilityToggle className="text-white/80 hover:text-white" />

            {/* Hamburger */}
            <button
              className="lg:hidden p-2 text-white/80 hover:text-white cursor-pointer"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-[var(--color-secondary)] border-t border-white/10 px-4 py-3">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-md mb-1 cursor-pointer
                ${activeId === link.id
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
