const express = require('express');
const { searchByAuthor, createAuthor, getAllAuthors } = require('../controllers/author');

const authorRouter = express.Router();

authorRouter.post('/', createAuthor);

authorRouter.get('/', getAllAuthors);

authorRouter.get('/:author', searchByAuthor);

module.exports = authorRouter;