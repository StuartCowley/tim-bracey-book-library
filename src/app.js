const express = require('express');
const readerRouter = require('./routes/reader');

const app = express();

app.use(express.json());

app.use('/readers', readerRouter);

app.get('/', (_, res) => {
  res.status(200).send('Hello World!');
});

module.exports = app;