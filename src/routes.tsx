import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cardapio from './pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cardapio/:id" element={<Cardapio />} />
  </Routes>
)

export default Rotas
