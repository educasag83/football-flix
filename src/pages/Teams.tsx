import { allTeams, matches } from '../data/matches'
import { useFavoriteTeams } from '../lib/storage'
import { Crest } from '../components/Crest'
import { Row } from '../components/Row'

export function Teams() {
  const fav = useFavoriteTeams()
  return (
    <main className="page">
      <h1 className="page-title">Mis equipos</h1>
      <p className="lead">Elige tus equipos favoritos y verás sus partidos históricos aquí y en la portada.</p>
      <div className="team-picker">
        {allTeams().map((t) => (
          <button key={t} className={`team-pick ${fav.has(t) ? 'on' : ''}`} onClick={() => fav.toggle(t)}>
            <Crest team={t} size={36} />
            <span>{t}</span>
            {fav.has(t) && <b>★</b>}
          </button>
        ))}
      </div>
      {fav.items.map((t) => (
        <Row key={t} title={t} matches={matches.filter((m) => m.home === t || m.away === t)} />
      ))}
    </main>
  )
}
