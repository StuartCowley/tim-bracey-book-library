const express = require('express');
const { createReader, getAllReaders, getReader } = require('../controllers/reader');
const reader = require('../models/reader');

const readerRouter = express.Router();

readerRouter.post('/', createReader);

readerRouter.get('/', getAllReaders);

readerRouter.get('/:id', getReader);

module.exports = readerRouter;