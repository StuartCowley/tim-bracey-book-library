const express = require('express');
const { createReader, getAllReaders, getReader, updateReader, deleteReader } = require('../controllers/reader');
const { createItem } = require('../controllers/helper');
const { Reader } = require('../models');

const readerRouter = express.Router();

readerRouter.post('/', createItem(Reader));

readerRouter.get('/', getAllReaders);

readerRouter.get('/:id', getReader);

readerRouter.patch('/:id', updateReader);

readerRouter.delete('/:id', deleteReader);

module.exports = readerRouter;