const { Reader } = require('../models');

exports.createReader = async (req, res) => {
  const newReader = await Reader.create(req.body);
  res.status(201).json(newReader);
}

exports.getAllReaders = async (_, res) => {
  const readers = await Reader.findAll();
  res.status(200).json(readers);
}

exports.getReader = async (req, res) => {
  try {
    const { id } = req.params;

    const reader = await Reader.findByPk(id);
    if(!reader) {
      res.status(404).json({ error: 'The reader could not be found.' });
    }
    res.status(200).json(reader);
  } catch (err) {
    res.status(500).json(err.message);
  }
}