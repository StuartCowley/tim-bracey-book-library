const express = require('express');
const { createReader, getAllReaders, getReader, updateReader, deleteReader } = require('../controllers/reader');
const reader = require('../models/reader');

const readerRouter = express.Router();

readerRouter.post('/', createReader);

readerRouter.get('/', getAllReaders);

readerRouter.get('/:id', getReader);

readerRouter.patch('/:id', updateReader);

readerRouter.delete('/:id', deleteReader);

module.exports = readerRouter;