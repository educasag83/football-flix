import { useEffect, useState } from 'react'
import type { Match } from '../data/types'
import { teamColors } from '../lib/teams'
import { formatDate } from '../lib/links'
import { useOpenMatch } from '../lib/useOpenMatch'
import { useMyList } from '../lib/storage'
import { Crest } from './Crest'
import { Score } from './Score'

export function Hero({ matches }: { matches: Match[] }) {
  const [i, setI] = useState(0)
  const { open } = useOpenMatch()
  const myList = useMyList()

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % matches.length), 9000)
    return () => clearInterval(t)
  }, [matches.length])

  const m = matches[i]
  if (!m) return null
  const [h] = teamColors(m.home)
  const [a] = teamColors(m.away)

  return (
    <header className="hero" style={{ ['--h' as string]: h, ['--a' as string]: a }}>
      <div className="hero-bg" key={m.id} />
      <div className="hero-content" key={`c-${m.id}`}>
        <span className="hero-tag">
          {m.competition} · {m.stage} · {formatDate(m.date)}
        </span>
        <h1 className="hero-title">{m.nickname ?? `${m.home} vs ${m.away}`}</h1>
        <div className="hero-match">
          <Crest team={m.home} size={56} />
          <span className="hero-team">{m.home}</span>
          <Score match={m} big />
          <span className="hero-team">{m.away}</span>
          <Crest team={m.away} size={56} />
        </div>
        <p className="hero-synopsis">{m.synopsis}</p>
        <div className="hero-actions">
          <button className="btn primary" onClick={() => open(m.id)}>▶ Ver partido</button>
          <button className="btn ghost" onClick={() => myList.toggle(m.id)}>
            {myList.has(m.id) ? '✓ En mi lista' : '+ Mi lista'}
          </button>
        </div>
      </div>
      <div className="hero-dots">
        {matches.map((x, idx) => (
          <button key={x.id} className={idx === i ? 'on' : ''} onClick={() => setI(idx)} aria-label={`Destacado ${idx + 1}`} />
        ))}
      </div>
    </header>
  )
}
