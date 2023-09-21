const express = require('express');
const { searchByAuthor, createAuthor } = require('../controllers/author');

const authorRouter = express.Router();

authorRouter.post('/', createAuthor);

authorRouter.get('/:author', searchByAuthor);

module.exports = authorRouter;