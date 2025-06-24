import './App.css'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter> {/* Onde será agrupado tudo */}
      <Routes> {/*  Onde será armazenada todas as rotas */}
        <Route path='/'element={ <Home/> }/> {/* Rotas individuais */}
        <Route path='/menu'element={ <Menu/> }/> {/* Rotas individuais */}
        <Route path='/contact'element={ <Contact/> }/> {/* Rotas individuais */}
      </Routes>
    </BrowserRouter>
    // <>
    // <Home/> 
    // <Menu/> 
    // <Contact/>
    // </>
  )
}

export default App
