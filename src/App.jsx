import './App.css'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter> {/* Onde será agrupado tudo */}
      <Routes> {/*  Onde será armazenada todas as rotas */}
        <Route path='/'element={ <Home/> }/> {/* Rotas individuais */}
        <Route path='/menu'element={ <Menu/> }/> {/* Rotas individuais */}
        <Route path='/contact'element={ <Contact/> }/> {/* Rotas individuais */}
        <Route path='/*'element={ <NotFound/> }/> {/* Rota que leva para uma página que não existe (NOT FOUND) */}
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
