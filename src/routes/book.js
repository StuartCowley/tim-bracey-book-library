const express = require('express');
const { createBook, getAllBooks, getBookById, updateBook } = require('../controllers/book');

const bookRouter = express.Router();

bookRouter.post('/', createBook);

bookRouter.get('/', getAllBooks);

bookRouter.get('/:id', getBookById);

bookRouter.patch('/:id', updateBook);

module.exports = bookRouter;