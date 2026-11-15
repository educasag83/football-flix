import { useSearchParams } from 'react-router-dom'

/** La ficha de un partido se abre con ?p=<id> en la URL, así se puede compartir el enlace. */
export function useOpenMatch() {
  const [params, setParams] = useSearchParams()
  const openId = params.get('p')
  const open = (id: string) => {
    const next = new URLSearchParams(params)
    next.set('p', id)
    setParams(next)
  }
  const close = () => {
    const next = new URLSearchParams(params)
    next.delete('p')
    setParams(next)
  }
  return { openId, open, close }
}
