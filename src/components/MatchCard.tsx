import type { Match } from '../data/types'
import { formatDate } from '../lib/links'
import { useOpenMatch } from '../lib/useOpenMatch'
import { useWatched } from '../lib/storage'
import { useHideScores } from '../lib/settings'
import { MatchArt } from './MatchArt'

/** Tarjeta estilo portal de noticias: imagen grande, degradado y título encima. */
export function MatchCard({ match }: { match: Match }) {
  const { open } = useOpenMatch()
  const watched = useWatched()
  const [hide] = useHideScores()
  const score = hide ? 'vs' : `${match.homeScore}-${match.awayScore}`
  return (
    <button className="card" onClick={() => open(match.id)} aria-label={`${match.home} vs ${match.away}, ${match.date.slice(0, 4)}`}>
      <div className="card-art">
        <MatchArt match={match} />
        <div className="card-shade" />
        <span className="card-tag">{match.competition}</span>
        {watched.has(match.id) && <span className="card-watched">✓ Visto</span>}
        <span className="card-play" aria-hidden="true">▶</span>
        <div className="card-overlay">
          {match.nickname && <span className="card-nick">{match.nickname}</span>}
          <strong className="card-title">
            {match.home} <span className="card-score">{score}</span> {match.away}
            {!hide && match.scoreNote && <small> ({match.scoreNote})</small>}
          </strong>
          <span className="card-sub">
            {match.stage} · {formatDate(match.date)}
          </span>
        </div>
      </div>
    </button>
  )
}
