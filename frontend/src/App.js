import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import Dex from './components/Dex/Dex';
import Search from './components/Search/Search';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  
  return (
    <div className="App">
      <h1 className="title">Welcome to PokeWebDex</h1>
      <Search pokemon={pokemon} setPokemon={setPokemon}/>
      <Dex pokemon={pokemon} setPokemon={setPokemon}/>
    </div>
  );
}
