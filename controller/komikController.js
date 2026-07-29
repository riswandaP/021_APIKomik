const db = require('../models');

async function getAllKomik(req, res) {
    try {
        const Komik = await db.Komik.findAll();
        res.status(200).json(Komik);
    } catch (err) {
        console.error('Error fetching Komik:', err.message);
        res.status(500).json({ error: 'Failed to fetch Komik'});
    }
}

async function getKomikByID(req, res) {
    const { id } = req.params;   // fix: req bukan res
    try {
        const Komik = await db.Komik.findByPk(id);
        if (!Komik) {
            return res.status(404).json({ error: 'Komik not found'});
        }
        res.status(200).json(Komik);
    } catch (err) {
        console.error('Error fetching Komik by ID:', err.message);
        res.status(500).json({ error:'Failed to fetch Komik by ID'});
    } 
}

async function createKomik(req, res) {
    const { title, description, author } = req.body;
    try {
        const newKomik = await db.Komik.create({ title, description, author});
        res.status(201).json(newKomik);
    } catch (err) {
        console.error('Error creating Komik:', err.message);
        res.status(500).json({ error: 'Failed to create Komik'});
    }
}

async function updateKomik(req, res) {   // fix: nama fungsi
    const { id } = req.params;
    const { title, description, author } = req.body;
    try {
        const Komik = await db.Komik.findByPk(id);
        if (!Komik) {
            return res.status(404).json({ error: 'Komik not found'});
        }
        await Komik.update({ title, description, author });
        res.status(200).json(Komik);
    } catch (err) {
        console.error('Error updating Komik:', err.message);
        res.status(500).json({ error: 'Failed to update Komik' });
    }
}

async function deleteKomik(req, res) {
    const { id } = req.params;
    try {
        const Komik = await db.Komik.findByPk(id);
        if (!Komik) {
            return res.status(404).json({ error: 'Komik not found'});
        }
        await Komik.destroy();
        res.status(200).json({ message: 'Komik deleted successfully'});
    } catch (err) {
        console.error('Error deleting Komik:', err.message);
        res.status(500).json({ error: 'Failed to delete Komik'});
    }    
}

module.exports = {
    getAllKomik,
    getKomikByID,   
    createKomik,
    updateKomik,    
    deleteKomik
}