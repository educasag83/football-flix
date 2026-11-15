import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { collectionById } from '../data/collections'
import { matchesInCollection } from '../data/matches'
import { Grid } from '../components/Grid'

export function CollectionPage() {
  const { id = '' } = useParams()
  const c = collectionById(id)
  const all = matchesInCollection(id)
  const decades = Array.from(new Set(all.map((m) => `${m.date.slice(0, 3)}0`)))
  const [decade, setDecade] = useState<string | null>(null)

  if (!c) return <main className="page"><h1>Colección no encontrada</h1></main>
  const list = decade ? all.filter((m) => m.date.startsWith(decade.slice(0, 3))) : all

  return (
    <main className="page">
      <header className="page-head" style={{ background: `linear-gradient(135deg, ${c.colors[0]}, ${c.colors[1]})` }}>
        <span className="tile-emoji">{c.emoji}</span>
        <h1>{c.title}</h1>
        <p>{c.subtitle}</p>
      </header>
      <div className="filters">
        <button className={`chip ${decade === null ? 'on' : ''}`} onClick={() => setDecade(null)}>Todas las décadas</button>
        {decades.map((d) => (
          <button key={d} className={`chip ${decade === d ? 'on' : ''}`} onClick={() => setDecade(d)}>Años {d.slice(2)}</button>
        ))}
      </div>
      <Grid matches={list} />
    </main>
  )
}
