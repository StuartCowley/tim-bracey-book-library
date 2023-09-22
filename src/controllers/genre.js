const { Genre } = require('../models');
const { createItem } = require('../controllers/helper');
const genreModel = 'genre';

// exports.createGenre = async (req, res) => {
//   const newGenre = await Genre.create(req.body);
//   res.status(201).json(newGenre);
// }

exports.createGenre = createItem(genreModel);

exports.searchByGenre = async (req, res) => {
  try {
    const { genre: genreName } = req.params;

    const booksByGenre = await Genre.findAll({ where: { genre: genreName } });
    if(booksByGenre.length == 0) {
      res.status(404).json({ error: 'The genre could not be found.' });
    }
    res.status(200).json(booksByGenre);
  } catch (err) {
    res.status(500).json(err.message);
  }
}