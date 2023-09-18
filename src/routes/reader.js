const express = require('express');
const { createReader, getAllReaders } = require('../controllers/reader');
const reader = require('../models/reader');

const readerRouter = express.Router();

readerRouter.post('/', createReader);

readerRouter.get('/', getAllReaders);

module.exports = readerRouter;