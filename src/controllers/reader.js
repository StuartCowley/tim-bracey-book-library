const { Reader } = require('../models');
const { createItem, getAllItems } = require('../controllers/helper');

exports.createReader = createItem('reader');

exports.getAllReaders = getAllItems('reader');

// exports.getAllReaders = async (_, res) => {
//   const readers = await Reader.findAll();
//   res.status(200).json(readers);
// }

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

exports.updateReader = async (req, res) => {
  const { id: readerId } = req.params;
  const updateData = req.body;

  try {
    const [ updatedRows ] = await Reader.update(updateData, { where: { id: readerId } });
    if(!updatedRows) {
      res.status(404).json({ error: 'The reader could not be found.' });
    }
    res.status(200).json(updatedRows);
  } catch (err) {
    res.status(400).json(err.message);
  }
}

exports.deleteReader = async (req, res) => {
  const { id: readerId } = req.params;

  try {
    const deletedRows = await Reader.destroy({ where: { id: readerId } });
    if(!deletedRows) {
      res.status(404).json({ error: 'The reader could not be found.' });
    }
    res.status(204).json(deletedRows);
  } catch (err) {
    res.status(500).json(err.message);
  }
}