const express = require('express');
const { createReader, getAllReaders, getReader, updateReader, deleteReader } = require('../controllers/reader');
const { createItem } = require('../controllers/helper');
// const reader = require('../models/reader');
const { Reader } = require('../models');

const readerRouter = express.Router();

// readerRouter.post('/', createReader);

readerRouter.post('/', createItem(Reader));

readerRouter.get('/', getAllReaders);

readerRouter.get('/:id', getReader);

readerRouter.patch('/:id', updateReader);

readerRouter.delete('/:id', deleteReader);

module.exports = readerRouter;