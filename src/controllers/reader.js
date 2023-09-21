const { createItem, getAllItems, getItemById, updateItem, deleteItem } = require('../controllers/helper');
const readerModel = 'reader';

exports.createReader = createItem(readerModel);

exports.getAllReaders = getAllItems(readerModel);

exports.getReader = getItemById(readerModel);

exports.updateReader = updateItem(readerModel);

exports.deleteReader = deleteItem(readerModel);