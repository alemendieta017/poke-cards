import { useContext, useState } from 'react'
import PokeCard from '../pokeCard/PokeCard'
import PokeContext from '../../context/pokeContext'
import './cards.css'
import Paginate from '../paginate/Paginate'

export const Cards = (props) => {
  const [current, setCurrent] = useState(1)
  const { pokemons, query } = useContext(PokeContext)

  return (
    <>
      <Paginate current={current} setCurrent={setCurrent} />
      <div className="cards-container">
        {pokemons
          .filter((i) => i.name.toLowerCase().includes(query))
          .map((i, index) => {
            return <PokeCard key={`${index}-${i.name}`} pokemon={i} />
          })}
      </div>
      <Paginate current={current} setCurrent={setCurrent} />
    </>
  )
}
