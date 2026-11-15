import { useCallback, useEffect, useState } from 'react'

/**
 * Estado guardado en el navegador (localStorage). Si el navegador lo bloquea,
 * la página sigue funcionando, solo que no recuerda nada.
 */
function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function write<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* sin almacenamiento disponible */
  }
}

const listeners = new Map<string, Set<() => void>>()

function useStoredList(key: string) {
  const [items, setItems] = useState<string[]>(() => read<string[]>(key, []))

  useEffect(() => {
    const sync = () => setItems(read<string[]>(key, []))
    const set = listeners.get(key) ?? new Set()
    set.add(sync)
    listeners.set(key, set)
    return () => {
      set.delete(sync)
    }
  }, [key])

  const toggle = useCallback(
    (id: string) => {
      const current = read<string[]>(key, [])
      const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
      write(key, next)
      listeners.get(key)?.forEach((fn) => fn())
    },
    [key],
  )

  return { items, has: (id: string) => items.includes(id), toggle }
}

/** Partidos guardados en "Mi lista". */
export const useMyList = () => useStoredList('ff:my-list')
/** Partidos marcados como vistos. */
export const useWatched = () => useStoredList('ff:watched')
/** Equipos favoritos. */
export const useFavoriteTeams = () => useStoredList('ff:favorite-teams')
/** Wonderkids que sigues. */
export const useFollowedKids = () => useStoredList('ff:wk-follow')
