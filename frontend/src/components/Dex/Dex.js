import React, { useState, useEffect } from 'react';

export default function Dex() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        getPokemon();
    }, [])

    const getPokemon = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/pokemon/');
        let data = await response.json();
        console.log(data);
        setPokemon(data);
    }

    return (
        <div className="Dex">
            This is where dex info about Pokemon will be displayed
        </div>
    );
}