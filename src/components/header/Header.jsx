import React, { useContext } from 'react'
import PokeContext from '../../context/pokeContext'
import './header.css'

const Header = () => {
  const { setQuery } = useContext(PokeContext)

  function handleChange(e) {
    setQuery(e.target.value.toLowerCase())
  }

  return (
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
        alt="pokemon-logo"
      ></img>
      <h1>Pokémon</h1>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="Busca a tu pokemon..."
      />
    </header>
  )
}

export default Header
