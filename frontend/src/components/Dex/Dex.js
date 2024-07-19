import React from 'react';

export default function Dex({ pokemon, setPokemon }) {
    return (
        <div className="Dex">
            <div className="pokemon-list">
                {pokemon.map((pokemon) => (
                    <h4 key={pokemon.pokedex_number}>
                        <div>{'#'}{pokemon.pokedex_number}</div>
                        {pokemon.name}
                        {' '} Dex Entry: {' '}
                        <div>{pokemon.description}</div>
                    </h4>  
                ))}
            </div>
        </div>
    );
}