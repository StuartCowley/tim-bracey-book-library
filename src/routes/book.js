const express = require('express');
const { createBook, getAllBooks, getBookById } = require('../controllers/book');

const bookRouter = express.Router();

bookRouter.post('/', createBook);

bookRouter.get('/', getAllBooks);

bookRouter.get('/:id', getBookById);

module.exports = bookRouter;