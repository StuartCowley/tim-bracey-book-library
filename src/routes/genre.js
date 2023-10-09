const express = require('express');
const { createGenre, getAllGenres, getGenreById, searchByGenre } = require('../controllers/genre');

const genreRouter = express.Router();

genreRouter.post('/', createGenre);

genreRouter.get('/', getAllGenres);

genreRouter.get('/:genre', searchByGenre);

module.exports = genreRouter;