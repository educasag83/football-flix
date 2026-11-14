import type { Match } from '../data/types'

/** Páginas de competición de Footballia cuya URL está comprobada. */
const FOOTBALLIA_COMPETITIONS: Partial<Record<Match['competition'], string>> = {
  Mundial: 'https://footballia.eu/es/competiciones/world-cup',
  'Champions League': 'https://footballia.eu/es/competiciones/champions-league',
  LaLiga: 'https://footballia.eu/es/competiciones/liga-1-division',
}

export const FOOTBALLIA_HOME = 'https://footballia.eu/es'

export const footballiaCompetitionUrl = (m: Match) => FOOTBALLIA_COMPETITIONS[m.competition] ?? FOOTBALLIA_HOME

export const youtubeSearchUrl = (m: Match) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(
    `${m.home} vs ${m.away} ${m.date.slice(0, 4)} ${m.competition} partido completo`,
  )}`

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })

export const scoreLine = (m: Match) => `${m.homeScore} - ${m.awayScore}`
