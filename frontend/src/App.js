import React, { useState } from 'react';
import './App.css';

function App() {
    const [pokemon, setPokemon] = useState(null);
    const [query, setQuery] = useState('');

    const fetchPokemon = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/pokemon/${query}`);
            const data = await response.json();
            setPokemon(data);
        } catch (error) {
            console.error('Error fetching Pokemon:', error);
        }
    };

    return (
        <div>
            <h1>Pokemon Search</h1>
            <input
                type="text"
                placeholder="Enter Pokemon name or ID"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={fetchPokemon}>Search</button>
            {pokemon && (
                <div className="pokemon-container">
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            )}
        </div>
    );
}

export default App;
