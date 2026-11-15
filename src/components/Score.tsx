import type { Match } from '../data/types'
import { useHideScores } from '../lib/settings'

export function Score({ match, big = false }: { match: Match; big?: boolean }) {
  const [hide] = useHideScores()
  if (hide) return <span className={`score hidden ${big ? 'big' : ''}`}>? - ?</span>
  return (
    <span className={`score ${big ? 'big' : ''}`}>
      {match.homeScore} - {match.awayScore}
      {match.scoreNote && <small> ({match.scoreNote})</small>}
    </span>
  )
}
