import { Route, Routes } from 'react-router-dom'

import './App.css'
import * as Pages from './pages'
import Header from './components/Header'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Pages.HomePage/>}/>
        <Route path="pokedex" element={<Pages.PokedexPage/>}/>
        <Route path="pokedex/:name" element={<Pages.PokemonPage/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
