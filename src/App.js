import { useState } from 'react'
import { Cards } from './components/Cards/Cards'
import Header from './components/header/Header'
import PokeContext from './context/pokeContext'
import useGetPokemons from './hooks/useGetPokemons'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useGetPokemons(
    'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20%22'



    )
  const [query, setQuery] = useState('')

  const initialState = {
    pokemons,
    setPokemons,
    query,
    setQuery,
  }

  return (
    <div className="App">
      <PokeContext.Provider value={initialState}>
        <Header />
        <Cards />
      </PokeContext.Provider>
    </div>
  )
}

export default App
