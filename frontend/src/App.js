import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import Dex from './components/Dex/Dex';
import Search from './components/Search/Search';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  
  return (
    <div className="App">
      <Search pokemon={pokemon} setPokemon={setPokemon}/>
      <Dex pokemon={pokemon} setPokemon={setPokemon}/>
    </div>
  );
}
