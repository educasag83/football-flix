import { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { MatchModal } from './components/MatchModal'
import { Home } from './pages/Home'
import { CollectionPage } from './pages/CollectionPage'
import { Search } from './pages/Search'
import { MyList } from './pages/MyList'
import { Teams } from './pages/Teams'
import { CultTeams } from './pages/CultTeams'
import { Results, Stats, Wonderkids } from './pages/ComingSoon'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coleccion/:id" element={<CollectionPage />} />
        <Route path="/buscar" element={<Search />} />
        <Route path="/mi-lista" element={<MyList />} />
        <Route path="/equipos" element={<Teams />} />
        <Route path="/culto" element={<CultTeams />} />
        <Route path="/resultados" element={<Results />} />
        <Route path="/wonderkids" element={<Wonderkids />} />
        <Route path="/estadisticas" element={<Stats />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <MatchModal />
      <footer className="footer">
        Football Flix · Proyecto personal de un fanático del fútbol. Los vídeos pertenecen a sus fuentes originales (Footballia, YouTube…); aquí solo se enlazan.
      </footer>
    </HashRouter>
  )
}
