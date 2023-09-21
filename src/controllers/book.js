const { Book } = require('../models');
const { createItem, getAllItems } = require('../controllers/helper');

exports.createBook = createItem('book');

exports.getAllBooks = getAllItems('book');

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

exports.deleteBook = async (req, res) => {
  const { id: bookId } = req.params;

  try {
    const deletedRows = await Book.destroy({ where: { id: bookId } });
    if(!deletedRows) {
      res.status(404).json({ error: 'The book could not be found.' });
    }
    res.status(204).json(deletedRows);
  } catch (err) {
    res.status(500).json(err.message);
  }

}