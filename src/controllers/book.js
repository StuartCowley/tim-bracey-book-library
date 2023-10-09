const { createItem, getAllItems, getItemById, updateItem, deleteItem } = require('../controllers/helper');
const bookModel = 'book';

exports.createBook = createItem(bookModel);

exports.getAllBooks = getAllItems(bookModel);

exports.getBookById = getItemById(bookModel);

exports.updateBook = updateItem(bookModel);

exports.deleteBook = deleteItem(bookModel);