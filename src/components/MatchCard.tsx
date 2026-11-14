import type { Match } from '../data/types'
import { teamColors } from '../lib/teams'
import { useOpenMatch } from '../lib/useOpenMatch'
import { useWatched } from '../lib/storage'
import { Crest } from './Crest'
import { Score } from './Score'

export function MatchCard({ match }: { match: Match }) {
  const { open } = useOpenMatch()
  const watched = useWatched()
  const [h] = teamColors(match.home)
  const [a] = teamColors(match.away)
  return (
    <button className="card" onClick={() => open(match.id)} aria-label={`${match.home} vs ${match.away}, ${match.date.slice(0, 4)}`}>
      <div className="card-art" style={{ background: `linear-gradient(120deg, ${h}cc 0%, #111 48%, #111 52%, ${a}cc 100%)` }}>
        <span className="card-year">{match.date.slice(0, 4)}</span>
        {watched.has(match.id) && <span className="card-watched">✓ Visto</span>}
        <div className="card-teams">
          <Crest team={match.home} />
          <Score match={match} />
          <Crest team={match.away} />
        </div>
        {match.nickname && <span className="card-nick">{match.nickname}</span>}
      </div>
      <div className="card-info">
        <strong>
          {match.home} vs {match.away}
        </strong>
        <span>
          {match.competition} · {match.stage}
        </span>
      </div>
    </button>
  )
}
