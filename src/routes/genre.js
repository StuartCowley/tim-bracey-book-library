const express = require('express');
const { createGenre, searchByGenre } = require('../controllers/genre');

const genreRouter = express.Router();

genreRouter.post('/', createGenre);

genreRouter.get('/:genre', searchByGenre);

module.exports = genreRouter;