const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/pokemon/:idOrName', async (req, res) => {
    const { idOrName } = req.params;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from PokeAPI' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
