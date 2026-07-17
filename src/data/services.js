// ============================================================
// Data de prueba — Servicios
// ============================================================

import { Coffee, Gift, Calendar, Utensils, Star, Users, Package } from 'lucide-react'

export const services = [
  {
    id: 'catering',
    icon: Utensils,
    titleKey: 'services.catering.title',
    descKey: 'services.catering.description',
    itemsKey: 'services.catering.items',
    color: '#C8962E',
    features: [
      { icon: Coffee, label: 'Coffee Break' },
      { icon: Utensils, label: 'Almuerzos Ejecutivos' },
      { icon: Star, label: 'Cócteles Premium' },
      { icon: Users, label: 'Eventos Corporativos' },
    ],
  },
  {
    id: 'gifts',
    icon: Gift,
    titleKey: 'services.gifts.title',
    descKey: 'services.gifts.description',
    itemsKey: 'services.gifts.items',
    color: '#2C3E50',
    features: [
      { icon: Gift, label: 'Gourmet & Vinos' },
      { icon: Star, label: 'Spa & Bienestar' },
      { icon: Package, label: 'Tecnología' },
      { icon: Users, label: 'Personalizados' },
    ],
  },
  {
    id: 'programs',
    icon: Calendar,
    titleKey: 'services.programs.title',
    descKey: 'services.programs.description',
    itemsKey: 'services.programs.items',
    color: '#8B6914',
    features: [
      { icon: Calendar, label: 'Contratos Anuales' },
      { icon: Star, label: 'Reconocimiento Mensual' },
      { icon: Users, label: 'Programas RRHH' },
      { icon: Gift, label: 'Navidad Corporativa' },
    ],
  },
]
