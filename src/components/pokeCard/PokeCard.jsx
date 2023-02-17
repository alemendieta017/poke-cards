import React, { useState, useEffect } from 'react'
import './pokecard.css'

function PokeCard({pokemon}) {
  const [imageUrl, setImageUrl] = useState(null)
  const [attack, setAttack] = useState(null)
  const [speed, setSpeed] = useState(null)

  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.sprites.other['official-artwork'].front_default)
        const attackStat = data.stats.filter((i) => {
          return i.stat.name === 'attack'
        })
        const speedStat = data.stats.filter((i) => {
          return i.stat.name === 'speed'
        })
        setAttack(attackStat[0].base_stat)
        setSpeed(speedStat[0].base_stat)
      })
      .catch((err) => console.log(err))
  }, [pokemon.url])

  return (
    <div className="card">
      <img src={imageUrl} alt="pokemon"></img>
      <div className="card-info">
        <h2>{pokemon.name}</h2>
        <p>Attack : {attack}</p>
        <p>Speed : {speed}</p>
      </div>
    </div>
  )
}

export default PokeCard
