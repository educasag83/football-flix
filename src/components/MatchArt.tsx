import { useState } from 'react'
import type { Match } from '../data/types'
import { teamColors } from '../lib/teams'
import { useThumb } from '../lib/thumbs'
import { Crest } from './Crest'

/**
 * Imagen del partido: la miniatura si existe; si no (o si no carga),
 * una ilustración de un campo de fútbol con los colores de ambos equipos.
 */
export function MatchArt({ match, crestSize = 46 }: { match: Match; crestSize?: number }) {
  const src = useThumb(match)
  const [failed, setFailed] = useState<string | null>(null)
  if (src && failed !== src) {
    return <img className="art-img" src={src} alt="" loading="lazy" onError={() => setFailed(src)} />
  }
  const [h] = teamColors(match.home)
  const [a] = teamColors(match.away)
  return (
    <div className="art-pitch" style={{ ['--h' as string]: h, ['--a' as string]: a }}>
      <svg className="art-lines" viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g fill="none" stroke="rgba(255,255,255,.28)" strokeWidth=".6">
          <rect x="4" y="4" width="152" height="82" />
          <line x1="80" y1="4" x2="80" y2="86" />
          <circle cx="80" cy="45" r="12" />
          <rect x="4" y="25" width="20" height="40" />
          <rect x="136" y="25" width="20" height="40" />
          <rect x="4" y="35" width="7" height="20" />
          <rect x="149" y="35" width="7" height="20" />
        </g>
        <circle cx="80" cy="45" r="1" fill="rgba(255,255,255,.4)" />
      </svg>
      <div className="art-crests">
        <Crest team={match.home} size={crestSize} />
        <span className="art-vs">VS</span>
        <Crest team={match.away} size={crestSize} />
      </div>
    </div>
  )
}
