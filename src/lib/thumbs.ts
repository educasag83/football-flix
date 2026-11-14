import { useEffect, useState } from 'react'
import type { Match } from '../data/types'

const KEY = 'ff:thumbs'
const subs = new Set<() => void>()

const readMap = (): Record<string, string> => {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}')
  } catch {
    return {}
  }
}

/** Saca el id de un vídeo de YouTube de una URL (youtube.com/watch?v=, youtu.be/, /embed/, /shorts/). */
export function youtubeId(url?: string): string | undefined {
  if (!url) return
  const m = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/)
  return m?.[1]
}

/** Miniaturas que pegas tú desde la ficha del partido; se guardan en este navegador. */
export function useCustomThumbs() {
  const [map, setMap] = useState(readMap)
  useEffect(() => {
    const sync = () => setMap(readMap())
    subs.add(sync)
    return () => {
      subs.delete(sync)
    }
  }, [])
  const set = (id: string, url: string | null) => {
    const next = readMap()
    if (url) next[id] = url
    else delete next[id]
    try {
      localStorage.setItem(KEY, JSON.stringify(next))
    } catch {
      /* sin almacenamiento */
    }
    subs.forEach((fn) => fn())
  }
  return { map, set }
}

/** La miniatura que toca mostrar para un partido, o undefined si hay que dibujarla. */
export function useThumb(m: Match): string | undefined {
  const { map } = useCustomThumbs()
  if (map[m.id]) return map[m.id]
  if (m.thumbnail) return m.thumbnail
  const yt = youtubeId(m.videoUrl)
  if (yt) return `https://i.ytimg.com/vi/${yt}/hqdefault.jpg`
}
