import React, { useState, useEffect } from 'react'
import "./Search.css";

// handles the search bar functionality, including finding the Pokemon based
// on Name, Type (Future), and Number (Future)
export default function Search({ pokemon, setPokemon }) {
    // holds the search values
    const [search, setSearch] = useState('');
    // handles Pokemon displayed when user clicks search button
    const [invokeSearch, setInvokeSearch] = useState(false);
    // handles which Pokemon are grabbed from the database
    // whether it's all of them or a specified one from the user
    const getPokemon = async () => {
        try {
            let response;
            if (search === '') {
                response = await fetch('/api/pokemon/');
            } else {
                response = await fetch(`/api/pokemon/${search}`);
            }
            const data = await response.json();
            console.log(data);
            setPokemon(Array.isArray(data) ? data : [data]);
        } catch (error) {
            console.error('Error: ', error);
            setPokemon([]);
        };
    }
    // grabs all the Pokemon at the start (will update this later, temp fix)
    useEffect(() => {
        getPokemon();
    }, []);
    // handles when the user clicks the search button
    useEffect(() => {
        if (invokeSearch) {
            getPokemon();
            setInvokeSearch(false);
        } 
    }, [invokeSearch, search]);
    // handles when the user types into the search bar
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    // handles when user clicks on search button
    const handleSearch = () => {
        setInvokeSearch(true);
    }
    return (
        <div className="search">
            <input
                className="search-bar"
                size="50"
                type="text"
                placeholder="Enter Pokemon Name"
                onChange={handleChange}
            />
            <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
    );
}