import React from 'react';
import pokeball from "./pokeball.png";
import "./Dex.css";

export default function Dex({ pokemon, setPokemon }) {
    return (
        <div className="Dex">
            <div className="pokemon-list">
                {pokemon.map((pokemon) => (
                    <div className="single-pokemon">
                        <h4 key={pokemon.pokedex_number} />
                        <p>{'#' + pokemon.pokedex_number + ' ' + pokemon.name}</p>
                        {' '} Dex Entry: {' '}
                        <p>{pokemon.description}</p>
                        <img className="image" src={pokeball} alt="Pokemon Image" />
                    </div>
                ))}
            </div>
        </div>
    );
}