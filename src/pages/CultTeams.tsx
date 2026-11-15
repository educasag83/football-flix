import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { cultTeams, type CultTeam } from '../data/cultTeams'

const initials = (t: string) =>
  t
    .replace(/^(RCD|FC|CF)\s+|\s+(CF|FC|City|United|1907)$/g, '')
    .split(/\s+/)
    .filter((w) => !['de', 'La'].includes(w))
    .map((w) => w[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()

const youtube = (c: CultTeam) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`${c.team} ${c.coach} mejores partidos`)}`

export function CultBadge({ team, size = 64 }: { team: CultTeam; size?: number }) {
  const [a, b] = team.colors
  return (
    <div className="crest" style={{ width: size, height: size, fontSize: size * 0.3, background: `linear-gradient(135deg, ${a} 0 50%, ${b} 50% 100%)` }}>
      <span>{initials(team.team)}</span>
    </div>
  )
}

export function CultTeams() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }, [hash])
  return (
    <main className="page">
      <header className="page-head" style={{ background: 'linear-gradient(135deg, #4a2a7a, #120a24)' }}>
        <span className="tile-emoji">💎</span>
        <h1>Equipos revelación y de culto</h1>
        <p>Los equipos que enamoraron sin ser los más ricos: proyectos, entrenadores y generaciones que todavía se recuerdan.</p>
      </header>
      <div className="cult-grid">
        {cultTeams.map((c) => (
          <article key={c.id} id={c.id} className="cult-card">
            <div className="cult-top" style={{ background: `linear-gradient(120deg, ${c.colors[0]}cc, #15151c 70%)` }}>
              <CultBadge team={c} />
              <div>
                <span className="cult-era">{c.era} · {c.country}</span>
                <h2>{c.title}</h2>
                <span className="cult-coach">Entrenador: {c.coach}</span>
              </div>
            </div>
            <div className="cult-body">
              <p>{c.story}</p>
              <h4>Hitos</h4>
              <ul>
                {c.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <h4>Figuras</h4>
              <div className="chips">
                {c.players.map((p) => (
                  <span key={p} className="chip">{p}</span>
                ))}
              </div>
              <a className="btn ghost cult-btn" href={youtube(c)} target="_blank" rel="noreferrer">▶ Ver partidos en YouTube</a>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
