const express = require('express');
const { createBook } = require('../controllers/book');

const bookRouter = express.Router();

bookRouter.post('/', createBook);

module.exports = bookRouter;