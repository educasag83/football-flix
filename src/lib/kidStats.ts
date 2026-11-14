import { useEffect, useState } from 'react'
import type { WonderkidStats } from '../data/wonderkids'

const KEY = 'ff:wk-stats'
const subs = new Set<() => void>()
type Store = Record<string, WonderkidStats[]>

const read = (): Store => {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}')
  } catch {
    return {}
  }
}

/** Estadísticas que cargas tú desde la ficha; se guardan en este navegador. */
export function useKidStats(id: string) {
  const [store, setStore] = useState(read)
  useEffect(() => {
    const sync = () => setStore(read())
    subs.add(sync)
    return () => {
      subs.delete(sync)
    }
  }, [])
  const save = (rows: WonderkidStats[]) => {
    const next = read()
    next[id] = rows
    try {
      localStorage.setItem(KEY, JSON.stringify(next))
    } catch {
      /* sin almacenamiento */
    }
    subs.forEach((fn) => fn())
  }
  const rows = store[id] ?? []
  return {
    rows,
    add: (r: WonderkidStats) => save([...rows.filter((x) => x.season !== r.season), r].sort((a, b) => b.season.localeCompare(a.season))),
    remove: (season: string) => save(rows.filter((x) => x.season !== season)),
  }
}
