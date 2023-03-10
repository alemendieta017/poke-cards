import { useState, useEffect } from 'react'

const useGetPokemons = (API) => {
  const [pokemons, setPokemons] = useState([])
  const [pokemonsCount, setPokemonsCount] = useState(0)

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        const results = data.results.map((poke) => {
          poke.name = poke.name.charAt(0).toUpperCase() + poke.name.slice(1) //toUpperCase first letter of each pokemon name
          return poke
        })
        setPokemons(results)
        setPokemonsCount(data.count)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [API])

  return { pokemons, setPokemons, pokemonsCount, setPokemonsCount }
}

export default useGetPokemons
