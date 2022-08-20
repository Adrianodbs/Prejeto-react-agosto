import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/footer'

import Header from './components/header'
import Contato from './pages/contato'
import Home from './pages/home'
import Produtos from './pages/produtos'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="contato" element={<Contato />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default RoutesApp
