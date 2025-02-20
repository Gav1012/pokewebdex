import React, { useState }  from 'react';
import Dex from './components/Dex/Dex';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  // this state is used to keep Pokemon list for when using the
  const [pokemon, setPokemon] = useState([]);
  
  return (
    <div className="App">
      <h1 className="title">Welcome to PokeWebDex</h1>
      <Search pokemon={pokemon} setPokemon={setPokemon}/>
      <Dex pokemon={pokemon} setPokemon={setPokemon}/>
      <Footer />
    </div>
  );
}
