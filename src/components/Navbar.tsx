import { useEffect, useState } from 'react'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { useHideScores } from '../lib/settings'

const LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/culto', label: 'Equipos de culto' },
  { to: '/mi-lista', label: 'Mi lista' },
  { to: '/equipos', label: 'Mis equipos' },
  { to: '/resultados', label: 'Resultados' },
  { to: '/wonderkids', label: 'Wonderkids' },
  { to: '/estadisticas', label: 'Estadísticas' },
]

export function Navbar() {
  const [solid, setSolid] = useState(false)
  const [menu, setMenu] = useState(false)
  const [params] = useSearchParams()
  const [q, setQ] = useState(params.get('q') ?? '')
  const [hide, setHide] = useHideScores()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${solid ? 'solid' : ''}`}>
      <NavLink to="/" className="logo">FOOTBALL<span>FLIX</span></NavLink>
      <button className="nav-burger" onClick={() => setMenu(!menu)} aria-label="Menú">☰</button>
      <ul className={`nav-links ${menu ? 'open' : ''}`} onClick={() => setMenu(false)}>
        {LINKS.map((l) => (
          <li key={l.to}>
            <NavLink to={l.to} end={l.to === '/'}>{l.label}</NavLink>
          </li>
        ))}
      </ul>
      <form
        className="nav-search"
        onSubmit={(e) => {
          e.preventDefault()
          navigate(`/buscar?q=${encodeURIComponent(q)}`)
        }}
      >
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Equipo, jugador, año..." aria-label="Buscar" />
      </form>
      <label className="spoiler" title="Oculta los marcadores para ver los partidos sin saber el resultado">
        <input type="checkbox" checked={hide} onChange={(e) => setHide(e.target.checked)} />
        <span>Sin spoilers</span>
      </label>
    </nav>
  )
}
