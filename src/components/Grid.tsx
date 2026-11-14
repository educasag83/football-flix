import type { Match } from '../data/types'
import { MatchCard } from './MatchCard'

export function Grid({ matches }: { matches: Match[] }) {
  return (
    <div className="grid">
      {matches.map((m) => (
        <MatchCard key={m.id} match={m} />
      ))}
    </div>
  )
}
