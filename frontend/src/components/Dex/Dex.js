import React from 'react';
import pokeball from "./pokeball.png";
import "./Dex.css";

export default function Dex({ pokemon, setPokemon }) {
    // need to update database to include pokemon type(s)
    // will update so that box will change colors based on
    // the Pokemon's first type
    // class name will be updated to className={`single-pokemon ${pokemon.type}`}
    // css will just add .grass, .fire, .water, etc etc will match colors closely hopefully
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