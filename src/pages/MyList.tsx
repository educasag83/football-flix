import { matchById } from '../data/matches'
import { useMyList } from '../lib/storage'
import { Grid } from '../components/Grid'

export function MyList() {
  const { items } = useMyList()
  const list = items.map(matchById).filter((m) => m !== undefined)
  return (
    <main className="page">
      <h1 className="page-title">Mi lista</h1>
      {list.length ? <Grid matches={list} /> : <p className="empty">Todavía no guardaste partidos. Pulsa “+ Mi lista” en cualquier partido.</p>}
    </main>
  )
}
