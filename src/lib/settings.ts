import { useEffect, useState } from 'react'

const KEY = 'ff:hide-scores'
const subs = new Set<(v: boolean) => void>()

const readHide = () => {
  try {
    return localStorage.getItem(KEY) === '1'
  } catch {
    return false
  }
}

/** Modo sin spoilers: oculta los marcadores para ver el partido sin saber el resultado. */
export function useHideScores(): [boolean, (v: boolean) => void] {
  const [hide, setHide] = useState(readHide)
  useEffect(() => {
    subs.add(setHide)
    return () => {
      subs.delete(setHide)
    }
  }, [])
  const update = (v: boolean) => {
    try {
      localStorage.setItem(KEY, v ? '1' : '0')
    } catch {
      /* ignorar */
    }
    subs.forEach((fn) => fn(v))
  }
  return [hide, update]
}
