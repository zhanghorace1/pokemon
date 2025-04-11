import React, { useState } from 'react';

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

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            padding: '20px',
        },
        input: {
            padding: '10px',
            fontSize: '16px',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
        },
        button: {
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007BFF',
            color: '#fff',
            cursor: 'pointer',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
        resultContainer: {
            border: '1px solid #ccc',
            padding: '10px',
            marginTop: '20px',
            textAlign: 'center',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        image: {
            marginTop: '10px',
        },
    };

    return (
        <div style={styles.container}>
            <h1>Pokemon Search</h1>
            <input
                type="text"
                placeholder="Enter Pokemon name or ID"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={styles.input}
            />
            <button
                onClick={fetchPokemon}
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            >
                Search
            </button>
            {pokemon && (
                <div style={styles.resultContainer}>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} style={styles.image} />
                </div>
            )}
        </div>
    );
}

export default App;
