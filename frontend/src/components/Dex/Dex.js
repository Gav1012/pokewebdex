import React, { useState, useEffect } from 'react';

export default function Dex() {
    // holds all the pokemon or single pokemon from the database
    const [pokemon, setPokemon] = useState([]);

    // used to handle async grabs from the database
    useEffect(() => {
        getPokemon();
    }, [])

    // fetches pokemon from the django database
    const getPokemon = async () => {
        let response = await fetch('/api/pokemon/');
        let data = await response.json();
        console.log(data);
        setPokemon(data);
    }

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