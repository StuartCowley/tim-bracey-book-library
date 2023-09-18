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

}

// module.exports = { createReader }