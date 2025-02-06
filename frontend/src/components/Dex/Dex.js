import React from 'react';
import pokeball from "./pokeball.png";
import "./Dex.css";

// function handles the displaying of the Pokemon Dex slots/entries
export default function Dex({ pokemon, setPokemon }) {
    return (
        <div className="Dex">
            <div className="pokemon-list">
                {pokemon.map((pokemon) => (
                    <div className={`single-pokemon type-${pokemon.type[0]}`}>
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