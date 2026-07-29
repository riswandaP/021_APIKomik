const db = require('../models');

async function getAllGenre(req, res) {
    try {
        const genre = await db.Genre.findAll();
        res.status(200).json(genre);
    } catch (err) {
        console.error('Error fetching Genre:', err.message);
        res.status(500).json({ error: 'Failed to fetch Genre' });
    }
}

async function getGenreByID(req, res) {
    const { id } = req.params;
    try {
        const genre = await db.Genre.findByPk(id);
        if (!genre) {
            return res.status(404).json({ error: 'Genre not found' });
        }
        res.status(200).json(genre);
    } catch (err) {
        console.error('Error fetching Genre by ID:', err.message);
        res.status(500).json({ error: 'Failed to fetch Genre by ID' });
    }
}

module.exports = {
    
}