import React from "react";
import './pokecard.css'

const pokeCard = (props) => {
  return <div className="card">{props.pokemon.name}</div>;
};

export default pokeCard;
