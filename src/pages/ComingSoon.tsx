interface Props {
  title: string
  emoji: string
  description: string
  plan: string[]
}

export function ComingSoon({ title, emoji, description, plan }: Props) {
  return (
    <main className="page">
      <div className="soon">
        <span className="soon-emoji">{emoji}</span>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        <span className="soon-badge">Próximamente</span>
        <h3>Lo que tendrá esta sección</h3>
        <ul>
          {plan.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export const Results = () => (
  <ComingSoon
    title="Resultados y calendario"
    emoji="📅"
    description="Resultados en vivo, próximos partidos y tablas de tus ligas y equipos favoritos."
    plan={[
      'Resultados del día y en directo de las principales ligas',
      'Calendario de los próximos partidos de tus equipos favoritos',
      'Tablas de posiciones',
      'Datos desde una API de fútbol (por ejemplo football-data.org o API-Football), con enlaces a BeSoccer, SofaScore, Transfermarkt y ceroacero para ampliar',
    ]}
  />
)

export const Stats = () => (
  <ComingSoon
    title="Estadísticas de jugadores"
    emoji="📊"
    description="Datos de rendimiento de los jugadores, comparadores y gráficos."
    plan={[
      'Ficha de jugador con goles, asistencias, xG y minutos por temporada',
      'Comparador de dos jugadores lado a lado',
      'Rankings por posición y liga',
      'Gráficos de radar estilo scouting',
    ]}
  />
)
