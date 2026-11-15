import { useSearchParams } from 'react-router-dom'
import { matches } from '../data/matches'
import { Grid } from '../components/Grid'

const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export function Search() {
  const [params] = useSearchParams()
  const q = params.get('q') ?? ''
  const terms = norm(q).split(/\s+/).filter(Boolean)
  const results = matches.filter((m) => {
    const text = norm([m.home, m.away, m.competition, m.stage, m.stadium, m.city, m.nickname ?? '', m.date.slice(0, 4), ...m.stars].join(' '))
    return terms.every((t) => text.includes(t))
  })
  return (
    <main className="page">
      <h1 className="page-title">{q ? `Resultados para "${q}"` : 'Buscar'}</h1>
      {results.length ? <Grid matches={results} /> : <p className="empty">No hay partidos que coincidan. Prueba con un equipo, un jugador o un año.</p>}
    </main>
  )
}
