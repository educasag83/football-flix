import { useMemo, useState } from 'react'
import { PLAYERS, applyClue, daySeed, fmtYears, generate, rng, sharedTeams, type Trivia as T } from '../lib/trivia'

/** La trivia del tweet original de @ManuHeredia21 (30/03/2020). */
function classic(): T {
  const pairs: [string, string][] = [
    ['Cristiano Ronaldo', 'Gerard Piqué'],
    ['Lionel Messi', 'Sergio Agüero'],
    ['Zlatan Ibrahimović', 'Paul Pogba'],
    ['Wayne Rooney', 'Gareth Bale'],
  ]
  let cands = [...PLAYERS]
  const clues = pairs.map(([w, nw]) => {
    cands = applyClue(cands, w, nw)
    return { with: w, notWith: nw, remaining: cands }
  })
  return { answer: 'Henrik Larsson', start: PLAYERS.length, clues }
}

type Mode = 'dia' | 'clasica' | 'libre'
const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()

export function Trivia() {
  const [mode, setMode] = useState<Mode>('dia')
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1e9))
  const trivia = useMemo(() => (mode === 'clasica' ? classic() : generate(rng(mode === 'dia' ? daySeed() : seed))), [mode, seed])
  const [shown, setShown] = useState(1)
  const [guess, setGuess] = useState('')
  const [tries, setTries] = useState<string[]>([])
  const [done, setDone] = useState<null | 'win' | 'lose'>(null)
  const [copied, setCopied] = useState(false)
  const [usedClues, setUsedClues] = useState(0)

  const reset = (m: Mode) => {
    setMode(m)
    if (m === 'libre') setSeed(Math.floor(Math.random() * 1e9))
    setShown(1)
    setGuess('')
    setTries([])
    setDone(null)
    setCopied(false)
  }

  const submit = () => {
    const g = PLAYERS.find((p) => norm(p) === norm(guess))
    if (!g || done) return
    setGuess('')
    if (g === trivia.answer) {
      setUsedClues(shown)
      setDone('win')
      setShown(trivia.clues.length)
    } else {
      setTries([...tries, g])
      if (shown < trivia.clues.length) setShown(shown + 1)
      else setDone('lose')
    }
  }

  const visible = trivia.clues.slice(0, done ? trivia.clues.length : shown)
  const counts = [trivia.start, ...visible.map((c) => c.remaining.length)]
  const shareText = `⚽ ¿Quién es?\n\n${trivia.clues.map((c, i) => `${i + 1}. Jugó con ${c.with}, pero no con ${c.notWith}.`).join('\n')}\n\n${counts.length === trivia.clues.length + 1 ? counts.join(' → ') : ''}\n#FootballFlix`

  return (
    <main className="page">
      <header className="page-head" style={{ background: 'linear-gradient(135deg, #b3122e, #1a0308)' }}>
        <span className="tile-emoji">🧠</span>
        <h1>Trivia: ¿quién es?</h1>
        <p>“Jugó con X, pero no con Y”. Cada pista deja menos jugadores posibles hasta que solo queda uno. Clubes y selecciones cuentan.</p>
      </header>

      <div className="filters">
        <button className={`chip ${mode === 'dia' ? 'on' : ''}`} onClick={() => reset('dia')}>📅 Trivia del día</button>
        <button className={`chip ${mode === 'libre' ? 'on' : ''}`} onClick={() => reset('libre')}>🎲 Nueva trivia</button>
        <button className={`chip ${mode === 'clasica' ? 'on' : ''}`} onClick={() => reset('clasica')}>🐦 La del tweet original</button>
      </div>

      <section className="tv-board">
        <div className="tv-counter" aria-label="Jugadores posibles">
          {counts.map((n, i) => (
            <span key={i} className={i === counts.length - 1 ? 'now' : ''}>
              {i > 0 && <em>→</em>}
              {n}
            </span>
          ))}
          <small>jugadores posibles</small>
        </div>

        <ol className="tv-clues">
          {visible.map((c, i) => (
            <li key={i} className="tv-clue">
              <span className="tv-n">{i + 1}</span>
              <p>
                Jugó con <b className="yes">{c.with}</b>, pero no con <b className="no">{c.notWith}</b>.
              </p>
              <span className="tv-left">quedan {c.remaining.length}</span>
            </li>
          ))}
          {!done &&
            trivia.clues.slice(shown).map((_, i) => (
              <li key={`h${i}`} className="tv-clue hidden">
                <span className="tv-n">{shown + i + 1}</span>
                <p>Pista oculta</p>
              </li>
            ))}
        </ol>

        {!done ? (
          <form
            className="tv-guess"
            onSubmit={(e) => {
              e.preventDefault()
              submit()
            }}
          >
            <input list="tv-players" value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Escribe un jugador…" aria-label="Tu respuesta" />
            <datalist id="tv-players">
              {PLAYERS.filter((p) => !tries.includes(p)).map((p) => (
                <option key={p} value={p} />
              ))}
            </datalist>
            <button className="btn primary" type="submit">Responder</button>
            {shown < trivia.clues.length && (
              <button type="button" className="btn ghost" onClick={() => setShown(shown + 1)}>Otra pista</button>
            )}
            <button type="button" className="btn ghost" onClick={() => setDone('lose')}>Me rindo</button>
          </form>
        ) : (
          <div className={`tv-result ${done}`}>
            <h2>{done === 'win' ? `¡Correcto! Es ${trivia.answer}` : `Era ${trivia.answer}`}</h2>
            <p className="muted">
              {done === 'win' ? `Lo sacaste con ${usedClues} pista${usedClues > 1 ? 's' : ''}${tries.length ? ` y ${tries.length} fallo${tries.length > 1 ? 's' : ''}` : ''}.` : 'Para la próxima.'}
            </p>
            <ul className="tv-explain">
              {trivia.clues.map((c, i) => (
                <li key={i}>
                  Con <b>{c.with}</b>:{' '}
                  {sharedTeams(trivia.answer, c.with)
                    .map((s) => `${s.team} (${fmtYears(s)})`)
                    .join(', ')}
                </li>
              ))}
            </ul>
            <div className="tv-actions">
              <button className="btn primary" onClick={() => reset('libre')}>🎲 Otra trivia</button>
              <button
                className="btn ghost"
                onClick={() => {
                  navigator.clipboard?.writeText(shareText).then(() => setCopied(true), () => setCopied(false))
                }}
              >
                {copied ? '✓ Copiada' : '📋 Copiar para redes'}
              </button>
            </div>
          </div>
        )}
        {tries.length > 0 && !done && <p className="muted tv-tries">No es: {tries.join(', ')}</p>}
      </section>

      <p className="muted wk-note">
        Base de {PLAYERS.length} jugadores con sus clubes y selecciones por temporada (datos aproximados, en <code>src/data/triviaPlayers.ts</code>). Cuantos más jugadores tenga la base, más difíciles salen las trivias.
      </p>
    </main>
  )
}
