import React, { useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import Dex from './components/Dex/Dex';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';

export default function App() {
  // this state is used to keep Pokemon list for when using the
  // search bar
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
