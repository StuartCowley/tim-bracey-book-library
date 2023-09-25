const express = require('express');
const { createGenre, searchByGenre, getAllGenres } = require('../controllers/genre');

const genreRouter = express.Router();

genreRouter.post('/', createGenre);

genreRouter.get('/', getAllGenres);

genreRouter.get('/:genre', searchByGenre);

module.exports = genreRouter;