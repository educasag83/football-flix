import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PROFILE_LABELS, wonderkids, type Position, type Wonderkid } from '../data/wonderkids'
import { useFollowedKids } from '../lib/storage'
import { useKidStats } from '../lib/kidStats'
import { Radar } from '../components/Radar'

const POSITIONS: Position[] = ['Defensa', 'Centrocampista', 'Mediapunta', 'Extremo', 'Delantero']
const NOW_YEAR = new Date().getFullYear()
const age = (k: Wonderkid) => NOW_YEAR - k.born
const stars = (n: number) => '★'.repeat(n) + '☆'.repeat(5 - n)
const initials = (name: string) => name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase()

const tm = (k: Wonderkid) => `https://www.transfermarkt.es/schnellsuche/ergebnis/schnellsuche?query=${encodeURIComponent(k.name)}`
const fbref = (k: Wonderkid) => `https://fbref.com/search/search.fcgi?search=${encodeURIComponent(k.name)}`
const yt = (k: Wonderkid) => `https://www.youtube.com/results?search_query=${encodeURIComponent(`${k.name} skills goals`)}`

function Avatar({ k, size = 64 }: { k: Wonderkid; size?: number }) {
  return (
    <div className="wk-avatar" style={{ width: size, height: size, fontSize: size * 0.34, background: `linear-gradient(135deg, ${k.colors[0]}, ${k.colors[1]})` }}>
      <span>{initials(k.name)}</span>
    </div>
  )
}

function StatsBlock({ k }: { k: Wonderkid }) {
  const mine = useKidStats(k.id)
  const rows = [...mine.rows, ...(k.stats ?? []).filter((s) => !mine.rows.some((m) => m.season === s.season))]
  const [form, setForm] = useState({ season: '', matches: '', goals: '', assists: '', minutes: '' })
  const [open, setOpen] = useState(false)
  return (
    <section className="wk-section">
      <h4>Estadísticas</h4>
      {rows.length ? (
        <table className="wk-table">
          <thead>
            <tr><th>Temporada</th><th>PJ</th><th>Goles</th><th>Asist.</th><th>Min.</th><th>G+A / 90</th><th /></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.season}>
                <td>{r.season}</td><td>{r.matches}</td><td>{r.goals}</td><td>{r.assists}</td><td>{r.minutes ?? '–'}</td>
                <td>{r.minutes ? (((r.goals + r.assists) * 90) / r.minutes).toFixed(2) : '–'}</td>
                <td>{mine.rows.some((m) => m.season === r.season) && <button className="wk-x" onClick={() => mine.remove(r.season)} aria-label="Borrar">✕</button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="muted">Todavía no hay números cargados. Míralos en Transfermarkt o FBref y añádelos aquí para seguir su evolución.</p>
      )}
      {open ? (
        <form
          className="wk-form"
          onSubmit={(e) => {
            e.preventDefault()
            if (!form.season) return
            mine.add({ season: form.season, matches: +form.matches || 0, goals: +form.goals || 0, assists: +form.assists || 0, minutes: form.minutes ? +form.minutes : undefined })
            setForm({ season: '', matches: '', goals: '', assists: '', minutes: '' })
            setOpen(false)
          }}
        >
          <input placeholder="Temporada (2025-26)" value={form.season} onChange={(e) => setForm({ ...form, season: e.target.value })} required />
          <input type="number" min="0" placeholder="PJ" value={form.matches} onChange={(e) => setForm({ ...form, matches: e.target.value })} />
          <input type="number" min="0" placeholder="Goles" value={form.goals} onChange={(e) => setForm({ ...form, goals: e.target.value })} />
          <input type="number" min="0" placeholder="Asist." value={form.assists} onChange={(e) => setForm({ ...form, assists: e.target.value })} />
          <input type="number" min="0" placeholder="Minutos" value={form.minutes} onChange={(e) => setForm({ ...form, minutes: e.target.value })} />
          <button className="btn primary" type="submit">Guardar</button>
        </form>
      ) : (
        <button className="btn ghost wk-add" onClick={() => setOpen(true)}>+ Añadir temporada</button>
      )}
    </section>
  )
}

function KidDetail({ k, onClose }: { k: Wonderkid; onClose: () => void }) {
  const follow = useFollowedKids()
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])
  const keys = Object.keys(PROFILE_LABELS) as (keyof Wonderkid['profile'])[]
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <article className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={k.name}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        <header className="wk-head" style={{ background: `linear-gradient(120deg, ${k.colors[0]}bb, #141414 70%)` }}>
          <Avatar k={k} size={96} />
          <div>
            <span className="cult-era">{k.flag} {k.nationality} · {age(k)} años</span>
            <h2>{k.name}</h2>
            <span className="cult-coach">{k.role} · {k.club}</span>
            <div className="wk-stars" title={`Potencial ${k.potential} de 5`}>{stars(k.potential)}</div>
          </div>
        </header>
        <div className="modal-body">
          <div className="wk-actions">
            <button className="btn primary" onClick={() => follow.toggle(k.id)}>{follow.has(k.id) ? '✓ Siguiendo' : '+ Seguir'}</button>
            <a className="btn ghost" href={yt(k)} target="_blank" rel="noreferrer">▶ Vídeos</a>
            <a className="btn ghost" href={tm(k)} target="_blank" rel="noreferrer">Transfermarkt</a>
            <a className="btn ghost" href={fbref(k)} target="_blank" rel="noreferrer">FBref</a>
          </div>
          <p className="modal-synopsis">{k.review}</p>
          <div className="wk-grid2">
            <div>
              <dl className="wk-facts">
                <div><dt>Posición</dt><dd>{k.position}</dd></div>
                <div><dt>Pie</dt><dd>{k.foot}</dd></div>
                <div><dt>Nacido en</dt><dd>{k.born}</dd></div>
                <div><dt>Formado en</dt><dd>{k.formedAt}</dd></div>
              </dl>
              <h4>Puntos fuertes</h4>
              <ul className="wk-list good">{k.strengths.map((s) => <li key={s}>{s}</li>)}</ul>
              <h4>A mejorar</h4>
              <ul className="wk-list bad">{k.toImprove.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
            <div className="wk-radar">
              <Radar values={keys.map((x) => k.profile[x])} labels={keys.map((x) => PROFILE_LABELS[x])} color={k.colors[0] === '#ffffff' ? k.colors[1] : k.colors[0]} />
              <small className="muted">Perfil estilo FM (1-20) estimado por Football Flix. No son los atributos oficiales del juego.</small>
            </div>
          </div>
          <section className="wk-section">
            <h4>Proyección</h4>
            <p className="wk-projection">{k.projection}</p>
          </section>
          <StatsBlock k={k} />
        </div>
      </article>
    </div>
  )
}

export function Wonderkids() {
  const [params, setParams] = useSearchParams()
  const [pos, setPos] = useState<Position | 'Todos' | 'Siguiendo'>('Todos')
  const [sort, setSort] = useState<'potencial' | 'edad'>('potencial')
  const follow = useFollowedKids()
  const openId = params.get('wk')
  const open = wonderkids.find((k) => k.id === openId)
  const setOpen = (id: string | null) => {
    const next = new URLSearchParams(params)
    if (id) next.set('wk', id)
    else next.delete('wk')
    setParams(next)
  }

  const list = wonderkids
    .filter((k) => (pos === 'Todos' ? true : pos === 'Siguiendo' ? follow.has(k.id) : k.position === pos))
    .sort((a, b) => (sort === 'potencial' ? b.potential - a.potential || b.born - a.born : b.born - a.born))

  return (
    <main className="page">
      <header className="page-head" style={{ background: 'linear-gradient(135deg, #0f7a4a, #04140a)' }}>
        <span className="tile-emoji">🌟</span>
        <h1>Wonderkids</h1>
        <p>Las joyas que todo mánager de Football Manager quiere fichar: reseña, perfil, proyección y su evolución temporada a temporada.</p>
      </header>
      <div className="filters">
        {(['Todos', 'Siguiendo', ...POSITIONS] as const).map((p) => (
          <button key={p} className={`chip ${pos === p ? 'on' : ''}`} onClick={() => setPos(p)}>
            {p === 'Siguiendo' ? `★ Siguiendo (${follow.items.length})` : p}
          </button>
        ))}
        <select className="chip wk-sort" value={sort} onChange={(e) => setSort(e.target.value as 'potencial' | 'edad')} aria-label="Ordenar">
          <option value="potencial">Ordenar: potencial</option>
          <option value="edad">Ordenar: más jóvenes</option>
        </select>
      </div>
      {list.length === 0 && <p className="empty">Todavía no sigues a ningún jugador. Abre una ficha y pulsa “+ Seguir”.</p>}
      <div className="wk-cards">
        {list.map((k) => (
          <button key={k.id} className="wk-card" onClick={() => setOpen(k.id)}>
            <div className="wk-card-top" style={{ background: `linear-gradient(135deg, ${k.colors[0]}, #15151c 80%)` }}>
              <Avatar k={k} />
              <span className="wk-age">{age(k)}<small>años</small></span>
              {follow.has(k.id) && <span className="card-watched">★ Siguiendo</span>}
            </div>
            <div className="wk-card-body">
              <strong>{k.flag} {k.name}</strong>
              <span>{k.position} · {k.club}</span>
              <span className="wk-stars">{stars(k.potential)}</span>
            </div>
          </button>
        ))}
      </div>
      <p className="muted wk-note">Clubes según la situación a mediados de 2026. Las valoraciones son una estimación propia, no datos oficiales de Football Manager.</p>
      {open && <KidDetail k={open} onClose={() => setOpen(null)} />}
    </main>
  )
}
