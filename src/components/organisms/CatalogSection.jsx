import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SectionTitle from '../atoms/SectionTitle.jsx'
import CatalogCard from '../molecules/CatalogCard.jsx'
import { catalog } from '../../data/catalog.js'
import { Filter, X } from 'lucide-react'

const BUDGETS = ['all', 'low', 'mid', 'high']
const OCCASIONS = ['all', 'christmas', 'birthday', 'onboarding', 'anniversary', 'recognition', 'event']
const CLIENTS = ['all', 'hr', 'exec', 'sales']

export default function CatalogSection() {
  const { t } = useTranslation()
  const [budget, setBudget] = useState('all')
  const [occasion, setOccasion] = useState('all')
  const [client, setClient] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = catalog.filter(item =>
    (budget === 'all' || item.budget === budget) &&
    (occasion === 'all' || item.occasionKey === occasion) &&
    (client === 'all' || item.clientKey === client)
  )

  const resetFilters = () => {
    setBudget('all')
    setOccasion('all')
    setClient('all')
  }

  const hasFilters = budget !== 'all' || occasion !== 'all' || client !== 'all'

  const FilterBtn = ({ value, current, setter, label }) => (
    <button
      onClick={() => setter(value)}
      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer
        ${current === value
          ? 'bg-[var(--color-primary)] text-white'
          : 'bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-2)] border border-[var(--color-border)]'
        }`}
    >
      {label}
    </button>
  )

  return (
    <section id="catalog" className="py-20 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('catalog.section_title')}
          subtitle={t('catalog.section_subtitle')}
        />

        {/* Filter controls */}
        <div className="mb-8">
          {/* Mobile toggle */}
          <button
            className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] mb-4 md:hidden cursor-pointer"
            onClick={() => setShowFilters(o => !o)}
          >
            <Filter size={16} />
            Filtros {hasFilters && <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] inline-block" />}
          </button>

          <div className={`flex flex-col gap-4 ${showFilters ? 'block' : 'hidden md:flex'}`}>
            {/* Budget */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide w-24 flex-shrink-0">
                {t('catalog.filter_budget')}
              </span>
              {BUDGETS.map(b => (
                <FilterBtn key={b} value={b} current={budget} setter={setBudget}
                  label={b === 'all' ? t('catalog.filter_all') : t(`catalog.budget_${b}`)} />
              ))}
            </div>
            {/* Occasion */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide w-24 flex-shrink-0">
                {t('catalog.filter_occasion')}
              </span>
              {OCCASIONS.map(o => (
                <FilterBtn key={o} value={o} current={occasion} setter={setOccasion}
                  label={o === 'all' ? t('catalog.filter_all') : t(`catalog.occasion_${o}`)} />
              ))}
            </div>
            {/* Client */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide w-24 flex-shrink-0">
                {t('catalog.filter_client')}
              </span>
              {CLIENTS.map(c => (
                <FilterBtn key={c} value={c} current={client} setter={setClient}
                  label={c === 'all' ? t('catalog.filter_all') : t(`catalog.client_${c}`)} />
              ))}
            </div>
          </div>

          {/* Reset */}
          {hasFilters && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 mt-3 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] cursor-pointer"
            >
              <X size={12} /> Limpiar filtros
            </button>
          )}
        </div>

        {/* Results count */}
        <p className="text-sm text-[var(--color-text-muted)] mb-6">
          {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map(item => (
              <CatalogCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-[var(--color-text-muted)]">
            <p className="text-lg">No hay productos con los filtros seleccionados.</p>
            <button onClick={resetFilters} className="mt-3 text-[var(--color-primary)] text-sm font-medium cursor-pointer hover:underline">
              Ver todos los productos
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
