import { Link } from 'react-router-dom'
import { collections } from '../data/collections'
import { matches, matchesInCollection, matchById } from '../data/matches'
import { useFavoriteTeams, useMyList } from '../lib/storage'
import { Hero } from '../components/Hero'
import { Row } from '../components/Row'

export function Home() {
  const featured = matches.filter((m) => m.featured)
  const myList = useMyList()
  const favTeams = useFavoriteTeams()
  const saved = myList.items.map(matchById).filter((m) => m !== undefined)
  const ofFavTeams = matches.filter((m) => favTeams.has(m.home) || favTeams.has(m.away))

  return (
    <>
      <Hero matches={featured} />
      <main className="rows">
        <Row title="Mi lista" matches={saved} to="/mi-lista" />
        <Row title="De tus equipos favoritos" matches={ofFavTeams} to="/equipos" />
        {collections.map((c) => (
          <Row key={c.id} title={`${c.emoji} ${c.title}`} matches={matchesInCollection(c.id)} to={`/coleccion/${c.id}`} />
        ))}
        <section className="row">
          <h2 className="row-title">Explorar colecciones</h2>
          <div className="collection-tiles">
            {collections.map((c) => (
              <Link key={c.id} to={`/coleccion/${c.id}`} className="tile" style={{ background: `linear-gradient(135deg, ${c.colors[0]}, ${c.colors[1]})` }}>
                <span className="tile-emoji">{c.emoji}</span>
                <strong>{c.title}</strong>
                <small>{matchesInCollection(c.id).length} partidos</small>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
