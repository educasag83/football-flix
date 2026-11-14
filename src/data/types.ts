export type Competition =
  | 'Mundial'
  | 'Champions League'
  | 'Copa América'
  | 'Eurocopa'
  | 'Copa Libertadores'
  | 'LaLiga'

export interface Match {
  /** Identificador único, en minúsculas y con guiones. */
  id: string
  home: string
  away: string
  homeScore: number
  awayScore: number
  /** Texto extra del marcador: "pr." (prórroga) o "4-2 pen." */
  scoreNote?: string
  /** Fecha ISO, AAAA-MM-DD */
  date: string
  competition: Competition
  /** Fase o jornada: "Final", "Semifinal", "Cuartos"... */
  stage: string
  stadium: string
  city: string
  /** Apodo con el que se recuerda el partido */
  nickname?: string
  synopsis: string
  /** Figuras del partido */
  stars: string[]
  /** Colecciones (filas) en las que aparece */
  collections: string[]
  /**
   * Enlace directo al partido completo (Footballia u otra fuente).
   * Si no está, la ficha ofrece búsquedas en Footballia y YouTube.
   */
  videoUrl?: string
  /** Partido destacado en la portada */
  featured?: boolean
}

export interface Collection {
  id: string
  title: string
  subtitle: string
  /** Colores del degradado de la portada de la colección */
  colors: [string, string]
  emoji: string
}
