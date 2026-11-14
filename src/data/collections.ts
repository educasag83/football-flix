import type { Collection } from './types'

/** El orden de este array es el orden de las filas en la portada. */
export const collections: Collection[] = [
  {
    id: 'legendarios',
    title: 'Partidos legendarios',
    subtitle: 'Los partidos que cambiaron la historia del fútbol',
    colors: ['#b8860b', '#3a2a00'],
    emoji: '🏆',
  },
  {
    id: 'mundiales',
    title: 'Copas del Mundo',
    subtitle: 'De Uruguay 1950 a Qatar 2022',
    colors: ['#8a1538', '#2b0010'],
    emoji: '🌍',
  },
  {
    id: 'champions',
    title: 'Noches de Champions',
    subtitle: 'Finales y remontadas de la Copa de Europa',
    colors: ['#1b3a8a', '#060f2b'],
    emoji: '⭐',
  },
  {
    id: 'copa-america',
    title: 'Copa América',
    subtitle: 'El torneo de selecciones más antiguo del mundo',
    colors: ['#0b6e4f', '#012219'],
    emoji: '🌎',
  },
  {
    id: 'eurocopa',
    title: 'Eurocopa',
    subtitle: 'Finales del campeonato de Europa',
    colors: ['#1f4f9e', '#0a1a33'],
    emoji: '🇪🇺',
  },
  {
    id: 'el-clasico',
    title: 'El Clásico: Real Madrid vs Barcelona',
    subtitle: 'La rivalidad más vista del planeta',
    colors: ['#a50044', '#004d98'],
    emoji: '⚔️',
  },
  {
    id: 'superclasico',
    title: 'Superclásico: Boca vs River',
    subtitle: 'La pasión del fútbol argentino',
    colors: ['#103f79', '#e30613'],
    emoji: '🔥',
  },
  {
    id: 'remontadas',
    title: 'Remontadas imposibles',
    subtitle: 'Cuando nadie creía, pasó',
    colors: ['#5b2a86', '#140626'],
    emoji: '🔄',
  },
  {
    id: 'finales-penales',
    title: 'Decididos en los penales',
    subtitle: 'Once metros de pura tensión',
    colors: ['#7a3b00', '#1f0f00'],
    emoji: '🎯',
  },
]

export const collectionById = (id: string) => collections.find((c) => c.id === id)
