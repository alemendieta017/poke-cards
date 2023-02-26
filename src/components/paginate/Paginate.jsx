import React, { useContext, useEffect, useState } from 'react'
import PokeContext from '../../context/pokeContext'
import styles from './paginate.module.css'

const Paginate = ({ current, setCurrent }) => {
  const itemsPerPage = 20
  const neighbors = 2
  const { pokemonsCount, setPokemons } = useContext(PokeContext)
  const [list, setList] = useState([])

  const totalPages = Math.ceil(pokemonsCount / itemsPerPage)

  function updatePokemons(offset) {
    console.log(offset)
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`)
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
  }

  useEffect(() => {
    console.log('total pagse', totalPages)
    const newList = []
    const end = Math.min(
      Math.max(neighbors * 2 + 2, neighbors + current + 1),
      totalPages + 1
    )
    const start = Math.min(
      Math.max(end - (neighbors * 2 + 1), 1),
      Math.max(current - neighbors, 1)
    )

    for (let i = start; i < end; i++) {
      newList.push(i)
    }

    setList(newList)
    console.log(newList, pokemonsCount)
  }, [current, neighbors, pokemonsCount, totalPages])

  return (
    <div className={styles.paginate}>
      <div
        onClick={() => {
          setCurrent(1)
          updatePokemons(0)
        }}
      >
        First
      </div>
      <div
        onClick={() => {
          if (current !== 1) {
            setCurrent(current - 1)
            updatePokemons(current * itemsPerPage)
          } else {
            return
          }
        }}
      >
        &lt;
      </div>
      {list.map((item) => {
        return (
          <div
            key={`Paginate-item${item}`}
            className={item === current ? styles['active-page'] : null}
            onClick={() => {
              setCurrent(item)
              updatePokemons((item - 1) * itemsPerPage)
            }}
          >
            {item}
          </div>
        )
      })}
      <div
        onClick={() => {
          if (current !== totalPages) {
            setCurrent(current + 1)
            updatePokemons(current * itemsPerPage)
          } else {
            return
          }
        }}
      >
        &gt;
      </div>
      <div
        onClick={() => {
          setCurrent(totalPages)
          updatePokemons((totalPages - 1) * itemsPerPage)
        }}
      >
        Last
      </div>
    </div>
  )
}

export default Paginate
