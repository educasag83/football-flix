import type { Lineup, TeamLineup } from '../data/lineups'
import { teamColors } from '../lib/teams'

const luminance = (hex: string) => {
  const n = parseInt(hex.slice(1), 16)
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255]
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255
}

function Side({ team, lineup, side }: { team: string; lineup: TeamLineup; side: 'home' | 'away' }) {
  const [main, second] = teamColors(team)
  const ink = luminance(main) > 0.6 ? '#111' : '#fff'
  const n = lineup.lines.length
  return (
    <>
      {lineup.lines.flatMap((line, li) =>
        line.map(([num, name], pi) => {
          // x: distancia desde la propia portería (4% portero → 41% delanteros)
          const x = 4 + (li * 37) / Math.max(n - 1, 1)
          // y: posición en el ancho del campo, de su banda izquierda a la derecha
          const y = ((pi + 1) / (line.length + 1)) * 100
          const left = side === 'home' ? x : 100 - x
          const top = side === 'home' ? y : 100 - y
          return (
            <div key={`${side}-${num}`} className="lp-player" style={{ ['--x' as string]: `${left}%`, ['--y' as string]: `${top}%` }}>
              <span className="lp-shirt" style={{ background: main, color: ink, borderColor: second }}>{num}</span>
              <span className="lp-name">{name}</span>
            </div>
          )
        }),
      )}
    </>
  )
}

export function LineupPitch({ lineup, home, away }: { lineup: Lineup; home: string; away: string }) {
  return (
    <section className="lineups">
      <h3>Alineaciones</h3>
      <div className="lp-heads">
        <span>
          <b>{home}</b> · {lineup.home.formation} · DT: {lineup.home.coach}
        </span>
        <span>
          <b>{away}</b> · {lineup.away.formation} · DT: {lineup.away.coach}
        </span>
      </div>
      <div className="lp-pitch" role="img" aria-label={`Alineaciones de ${home} y ${away}`}>
        <div className="lp-lines" aria-hidden="true">
          <i className="lp-half" />
          <i className="lp-circle" />
          <i className="lp-box l" />
          <i className="lp-box r" />
        </div>
        <Side team={home} lineup={lineup.home} side="home" />
        <Side team={away} lineup={lineup.away} side="away" />
      </div>
    </section>
  )
}
