const express = require('express');
const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require('../controllers/book');
// const { createItem } = require('../controllers/helper');
// const { Book } = require('../models');

const bookRouter = express.Router();

bookRouter.post('/', createBook);

bookRouter.get('/', getAllBooks);

bookRouter.get('/:id', getBookById);

bookRouter.patch('/:id', updateBook);

bookRouter.delete('/:id', deleteBook);

module.exports = bookRouter;