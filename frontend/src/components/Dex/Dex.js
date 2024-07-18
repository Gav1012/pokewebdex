import React, { useState, useEffect } from 'react';

export default function Dex() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        getPokemon();
    }, [])

    const getPokemon = async () => {
        let response = await fetch('/api/pokemon/');
        let data = await response.json();
        console.log(data);
        setPokemon(data);
    }

    return (
        <div className="Dex">
            <div className="pokemon-list">
                {pokemon.map((pokemon, index) => (
                    <p key={index}>{pokemon.body}</p>  
                ))}
            </div>
        </div>
    );
}