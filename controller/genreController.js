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

module.exports = {
    
}