const express = require('express');
const router = express.Router();

const komikController = require('../controller/komikController');
const userController = require('../controller/userController');
const genreController = require('../controller/genreController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', userController.register);
router.post('/login', userController.login);

// Public
router.get('/Komik', komikController.getAllKomik);
router.get('/Komik/:id', komikController.getKomikByID);
router.get('/Genre', genreController.getAllGenre);
router.get('/Genre/:id', genreController.getGenreByID);

// Komik routes (dilindungi authMiddleware)
router.post('/Komik', authMiddleware, komikController.createKomik);
router.put('/Komik/:id', authMiddleware, komikController.updateKomik);
router.delete('/Komik/:id', authMiddleware, komikController.deleteKomik);

// Genre routes (dilindungi authMiddleware)
router.post('/Genre', authMiddleware, genreController.createGenre);
router.put('/Genre/:id', authMiddleware, genreController.updateGenre);
router.delete('/Genre/:id', authMiddleware, genreController.deleteGenre);

module.exports = router;