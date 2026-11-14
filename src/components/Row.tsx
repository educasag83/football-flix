import { useRef } from 'react'
import { Link } from 'react-router-dom'
import type { Match } from '../data/types'
import { MatchCard } from './MatchCard'

export function Row({ title, matches, to }: { title: string; matches: Match[]; to?: string }) {
  const track = useRef<HTMLDivElement>(null)
  if (matches.length === 0) return null
  const scroll = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.85, behavior: 'smooth' })
  return (
    <section className="row">
      <h2 className="row-title">
        {to ? <Link to={to}>{title} <span className="row-more">Ver todo ›</span></Link> : title}
      </h2>
      <div className="row-wrap">
        <button className="row-arrow left" onClick={() => scroll(-1)} aria-label="Anterior">‹</button>
        <div className="row-track" ref={track}>
          {matches.map((m) => (
            <MatchCard key={m.id} match={m} />
          ))}
        </div>
        <button className="row-arrow right" onClick={() => scroll(1)} aria-label="Siguiente">›</button>
      </div>
    </section>
  )
}
