import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { matchById } from '../data/matches'
import { collectionById } from '../data/collections'
import { footballiaCompetitionUrl, formatDate, youtubeSearchUrl } from '../lib/links'
import { teamColors } from '../lib/teams'
import { useOpenMatch } from '../lib/useOpenMatch'
import { useMyList, useWatched } from '../lib/storage'
import { Crest } from './Crest'
import { Score } from './Score'

export function MatchModal() {
  const { openId, close } = useOpenMatch()
  const myList = useMyList()
  const watched = useWatched()
  const m = openId ? matchById(openId) : undefined

  useEffect(() => {
    if (!m) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  })

  if (!m) return null
  const [h] = teamColors(m.home)
  const [a] = teamColors(m.away)

  return (
    <div className="modal-backdrop" onClick={close}>
      <article className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={`${m.home} vs ${m.away}`}>
        <button className="modal-close" onClick={close} aria-label="Cerrar">✕</button>
        <div className="modal-head" style={{ background: `linear-gradient(120deg, ${h}aa, #141414 45%, #141414 55%, ${a}aa)` }}>
          <div className="modal-teams">
            <div className="modal-team"><Crest team={m.home} size={84} /><span>{m.home}</span></div>
            <Score match={m} big />
            <div className="modal-team"><Crest team={m.away} size={84} /><span>{m.away}</span></div>
          </div>
          {m.nickname && <h2 className="modal-nick">{m.nickname}</h2>}
        </div>
        <div className="modal-body">
          <div className="modal-actions">
            {m.videoUrl ? (
              <a className="btn primary" href={m.videoUrl} target="_blank" rel="noreferrer">▶ Ver partido completo</a>
            ) : (
              <>
                <a className="btn primary" href={youtubeSearchUrl(m)} target="_blank" rel="noreferrer">▶ Buscar en YouTube</a>
                <a className="btn ghost" href={footballiaCompetitionUrl(m)} target="_blank" rel="noreferrer">Buscar en Footballia</a>
              </>
            )}
            <button className="btn ghost" onClick={() => myList.toggle(m.id)}>{myList.has(m.id) ? '✓ En mi lista' : '+ Mi lista'}</button>
            <button className="btn ghost" onClick={() => watched.toggle(m.id)}>{watched.has(m.id) ? '✓ Visto' : 'Marcar como visto'}</button>
          </div>
          <p className="modal-synopsis">{m.synopsis}</p>
          <dl className="modal-meta">
            <div><dt>Competición</dt><dd>{m.competition} · {m.stage}</dd></div>
            <div><dt>Fecha</dt><dd>{formatDate(m.date)}</dd></div>
            <div><dt>Estadio</dt><dd>{m.stadium}, {m.city}</dd></div>
            <div><dt>Figuras</dt><dd>{m.stars.join(', ')}</dd></div>
            <div>
              <dt>Colecciones</dt>
              <dd className="chips">
                {m.collections.map((c) => (
                  <Link key={c} to={`/coleccion/${c}`} className="chip">{collectionById(c)?.title ?? c}</Link>
                ))}
              </dd>
            </div>
          </dl>
          {!m.videoUrl && (
            <p className="modal-note">
              Todavía no hay un enlace directo a este partido. Cuando lo encuentres en Footballia u otra web, pégalo en el campo
              <code>videoUrl</code> de <code>src/data/matches.ts</code> y este botón llevará directo al vídeo.
            </p>
          )}
        </div>
      </article>
    </div>
  )
}
