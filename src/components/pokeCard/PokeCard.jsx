import React, { useState, useEffect } from 'react'
import './pokecard.css'

function PokeCard({ pokemon }) {
  const [imageUrl, setImageUrl] = useState(null)
  const [pokemonNdex, setPokemonNdex] = useState(null)
  const [attack, setAttack] = useState(null)
  const [speed, setSpeed] = useState(null)

  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => {
        setPokemonNdex(data.id)
        setImageUrl(data.sprites.other['official-artwork'].front_default)
        setAttack(
          data.stats.filter((i) => {
            return i.stat.name === 'attack'
          })[0].base_stat
        )
        setSpeed(
          data.stats.filter((i) => {
            return i.stat.name === 'speed'
          })[0].base_stat
        )
      })
      .catch((err) => console.log(err))
  }, [pokemon.url])

  return (
    <div className="card">
      <img src={imageUrl} alt="pokemon"></img>
      <div className="card-info">
        <h2>{pokemon.name}</h2>
        <ul>
          <li>
            <span>Ndex: </span>
            {pokemonNdex}
          </li>
          <li>
            <span>Attack: </span>
            {attack}
          </li>
          <li>
            <span>Speed: </span>
            {speed}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PokeCard
