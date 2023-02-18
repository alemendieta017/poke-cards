import { useContext } from 'react'
import PokeCard from '../pokeCard/PokeCard'
import PokeContext from '../../context/pokeContext'
import './cards.css'

export const Cards = (props) => {
  const { pokemons, query } = useContext(PokeContext)

  return (
    <div className="cards-container">
      {pokemons
        .filter((i) => i.name.toLowerCase().includes(query))
        .map((i, index) => {
          return <PokeCard key={`${index}-${i.name}`} pokemon={i} />
        })}
    </div>
  )
}
