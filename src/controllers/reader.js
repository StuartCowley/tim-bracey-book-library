const { Reader } = require('../models');
const { createItem, getAllItems, getItemById, updateItem } = require('../controllers/helper');
const readerModel = 'reader';

exports.createReader = createItem(readerModel);

exports.getAllReaders = getAllItems(readerModel);

exports.getReader = getItemById(readerModel);

exports.updateReader = updateItem(readerModel);

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