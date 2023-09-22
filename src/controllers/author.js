const { Author } = require('../models');
const { createItem } = require('../controllers/helper');
const authorModel = 'author';

exports.createAuthor = createItem(authorModel);

exports.searchByAuthor = async (req, res) => {
  try {
    const { author: authorName } = req.params;

    const booksByAuthor = await Author.findAll({ where: { author: authorName } });
    if(booksByAuthor.length == 0) {
      res.status(404).json({ error: 'The author could not be found.' });
    }
    res.status(200).json(booksByAuthor);
  } catch (err) {
    res.status(500).json(err.message);
  }
}