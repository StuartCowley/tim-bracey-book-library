const { Genre, Book } = require('../models');
const { createItem, getAllItems, getItemById } = require('../controllers/helper');
const genreModel = 'genre';

exports.createGenre = createItem(genreModel);

exports.getAllGenres = getAllItems(genreModel);

exports.searchByGenre = async (req, res) => {
  try {
    const { genre: genreName } = req.params;

    const booksByGenre = await Genre.findAll({ where: { genre: genreName }, include: [
      {
        model: Book
      },
    ]
  });
    if(booksByGenre.length == 0) {
      res.status(404).json({ error: 'The genre could not be found.' });
    }
    res.status(200).json(booksByGenre);
  } catch (err) {
    res.status(500).json(err.message);
  }
}