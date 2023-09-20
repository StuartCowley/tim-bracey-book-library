const express = require('express');
const { createBook, getAllBooks } = require('../controllers/book');

const bookRouter = express.Router();

bookRouter.post('/', createBook);

bookRouter.get('/', getAllBooks);

module.exports = bookRouter;