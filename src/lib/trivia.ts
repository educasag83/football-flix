import { triviaPlayers } from '../data/triviaPlayers'

interface Stint {
  team: string
  from: number
  to: number
}

const parse = (s: string): Stint => {
  const i = s.lastIndexOf(':')
  const [from, to] = s.slice(i + 1).split('-').map(Number)
  return { team: s.slice(0, i), from, to }
}

export const PLAYERS = triviaPlayers.map((p) => p.name)
const STINTS = new Map(triviaPlayers.map((p) => [p.name, p.stints.map(parse)]))

/** Dónde coincidieron dos jugadores: lista de [equipo, desde, hasta]. */
export function sharedTeams(a: string, b: string): Stint[] {
  const out: Stint[] = []
  for (const x of STINTS.get(a) ?? [])
    for (const y of STINTS.get(b) ?? []) {
      if (x.team !== y.team) continue
      const from = Math.max(x.from, y.from)
      const to = Math.min(x.to, y.to)
      if (from <= to) out.push({ team: x.team, from, to })
    }
  return out
}

/** Mapa de compañeros, calculado una sola vez. */
const MATES = new Map<string, Set<string>>(PLAYERS.map((p) => [p, new Set<string>()]))
for (let i = 0; i < PLAYERS.length; i++)
  for (let j = i + 1; j < PLAYERS.length; j++)
    if (sharedTeams(PLAYERS[i], PLAYERS[j]).length) {
      MATES.get(PLAYERS[i])!.add(PLAYERS[j])
      MATES.get(PLAYERS[j])!.add(PLAYERS[i])
    }

export const playedWith = (a: string, b: string) => MATES.get(a)?.has(b) ?? false

export interface Clue {
  with: string
  notWith: string
  /** Jugadores que quedan después de aplicar esta pista */
  remaining: string[]
}

export interface Trivia {
  answer: string
  start: number
  clues: Clue[]
}

/** Aplica una pista a una lista de candidatos. */
export const applyClue = (cands: string[], w: string, nw: string) =>
  cands.filter((c) => c !== w && c !== nw && playedWith(c, w) && !playedWith(c, nw))

/** Generador pseudoaleatorio con semilla, para que la trivia del día sea igual para todos. */
export function rng(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export const daySeed = (d = new Date()) => d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate()

/**
 * Elige un jugador y va sumando pistas "Jugó con X, pero no con Y" hasta que
 * solo queda él. Busca entre 3 y 5 pistas que vayan reduciendo poco a poco,
 * como en el tweet original (260 → 2 → 1).
 */
export function generate(random: () => number, tries = 200): Trivia {
  let best: Trivia | null = null
  for (let t = 0; t < tries; t++) {
    const answer = PLAYERS[Math.floor(random() * PLAYERS.length)]
    const mates = PLAYERS.filter((p) => playedWith(answer, p))
    const others = PLAYERS.filter((p) => p !== answer && !playedWith(answer, p))
    if (mates.length < 3) continue

    let cands = [...PLAYERS]
    const clues: Clue[] = []
    const used = new Set<string>()
    while (cands.length > 1 && clues.length < 5) {
      const options: Clue[] = []
      for (const w of mates) {
        if (used.has(w)) continue
        for (const nw of others) {
          if (used.has(nw)) continue
          const remaining = applyClue(cands, w, nw)
          if (remaining.length < cands.length) options.push({ with: w, notWith: nw, remaining })
        }
      }
      if (!options.length) break
      // Las primeras pistas no deben resolverlo de golpe: buscamos que quede
      // aproximadamente la mitad o menos, pero sin llegar a 1 antes de la 3ª.
      const step = clues.length
      const target = step < 2 ? Math.max(2, Math.round(cands.length * (step === 0 ? 0.25 : 0.2))) : 1
      const ok = options.filter((o) => (step < 2 ? o.remaining.length >= 2 : true))
      const pool = ok.length ? ok : options
      pool.sort((a, b) => Math.abs(a.remaining.length - target) - Math.abs(b.remaining.length - target))
      const top = pool.slice(0, Math.min(6, pool.length))
      const pick = top[Math.floor(random() * top.length)]
      clues.push(pick)
      used.add(pick.with).add(pick.notWith)
      cands = pick.remaining
    }
    if (cands.length === 1 && cands[0] === answer && clues.length >= 3) return { answer, start: PLAYERS.length, clues }
    if (cands.length === 1 && cands[0] === answer && !best) best = { answer, start: PLAYERS.length, clues }
  }
  if (best) return best
  throw new Error('No se pudo generar una trivia')
}

export const fmtYears = (s: Stint) => (s.from === s.to ? `${s.from}-${String(s.from + 1).slice(2)}` : `${s.from}-${String(s.to + 1).slice(2)}`)
