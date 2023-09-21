const { Author } = require('../models');

exports.createAuthor = async (req, res) => {
  const newAuthor = await Author.create(req.body);
  res.status(201).json(newAuthor);
}

exports.searchByAuthor = async (req, res) => {
  const { author: authorName } = req.params;

  const booksByAuthor = await Author.findAll({ where: { author: authorName } });
  res.status(200).json(booksByAuthor);
}