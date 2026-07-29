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

async function createGenre(req, res) {
    const { nama } = req.body;
    try {
        const newGenre = await db.Genre.create({ nama });
        res.status(201).json(newGenre);
    } catch (err) {
        console.error('Error creating Genre:', err.message);
        res.status(500).json({ error: 'Failed to create Genre' });
    }
}

async function updateGenre(req, res) {
    const { id } = req.params;
    const { nama } = req.body;
    try {
        const genre = await db.Genre.findByPk(id);
        if (!genre) {
            return res.status(404).json({ error: 'Genre not found' });
        }
        await genre.update({ nama });
        res.status(200).json(genre);
    } catch (err) {
        console.error('Error updating Genre:', err.message);
        res.status(500).json({ error: 'Failed to update Genre' });
    }
}

async function deleteGenre(req, res) {
    const { id } = req.params;
    try {
        const genre = await db.Genre.findByPk(id);
        if (!genre) {
            return res.status(404).json({ error: 'Genre not found' });
        }
        await genre.destroy();
        res.status(200).json({ message: 'Genre deleted successfully' });
    } catch (err) {
        console.error('Error deleting Genre:', err.message);
        res.status(500).json({ error: 'Failed to delete Genre' });
    }
}

module.exports = {
    getAllGenre,
    getGenreByID,
    createGenre,
    updateGenre,
    deleteGenre
}