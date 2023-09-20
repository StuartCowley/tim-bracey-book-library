const { Book } = require('../models');

exports.createBook = async (req, res) => {
  const newBook = await Book.create(req.body);
  res.status(201).json(newBook);
}

exports.getAllBooks = async (_, res) => {
  const books = await Book.findAll();
  res.status(200).json(books);
}

exports.getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);
    if(!book) {
      res.status(404).json({ error: 'The book could not be found.' });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

exports.updateBook = async (req, res) => {
  const { id: bookId } = req.params;
  const updateData = req.body;

  try {
    const [ updatedRows ] = await Book.update(updateData, { where: { id: bookId } });
    if(!updatedRows) {
      res.status(404).json({ error: 'The book could not be found.' });
    }
    res.status(200).json(updatedRows);
  } catch(err) {
    res.status(500).json(err.message);
  }
}