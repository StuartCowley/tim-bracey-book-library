const { Author } = require('../models');

exports.createAuthor = async (req, res) => {
  const newAuthor = await Author.create(req.body);
  res.status(201).json(newAuthor);
}

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