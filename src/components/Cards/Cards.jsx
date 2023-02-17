import { useState, useEffect } from 'react'
import PokeCard from '../pokeCard/PokeCard'
import data from './data'
import './cards.css'

export const Cards = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20%22')
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results)
      })
      .catch((err) => {
        console.log(err)
      })
    setPokemons(data)
  }, [])
  return (
    <div className="cards-container">
      {pokemons.map((i, index) => {
        return <PokeCard key={`${index}-${i.name}`} pokemon={i} />
      })}
    </div>
  )
}
