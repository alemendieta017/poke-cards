import { useContext } from 'react'
import PokeCard from '../pokeCard/PokeCard'
import PokeContext from '../../context/pokeContext'
import './cards.css'
import Paginate from '../paginate/Paginate'

export const Cards = (props) => {
  const { pokemons, query } = useContext(PokeContext)

  return (
    <>
      <Paginate />
      <div className="cards-container">
        {pokemons
          .filter((i) => i.name.toLowerCase().includes(query))
          .map((i, index) => {
            return <PokeCard key={`${index}-${i.name}`} pokemon={i} />
          })}
      </div>
      <Paginate />
    </>
  )
}
