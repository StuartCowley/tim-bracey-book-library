const { Book, Reader } = require('../models');

const getModel = model => {
  const models = {
    book: Book,
    reader: Reader,
  };

  return models[model];
}

exports.createItem = model => {
  const Model = getModel(model);
  return async (req, res) => {
    try {
      const newItem = await Model.create(req.body);
      res.status(201).json(newItem);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
}

exports.getAllItems = model => {
  const Model = getModel(model);
  return async (_, res) => {
    const allItems = await Model.findAll();
    res.status(200).json(allItems);
  }
}

exports.getItemById = model => {
  const Model = getModel(model);
  return async (req, res) => {
    try {
      const { id } = req.params;
  
      const item = await Model.findByPk(id);
      if(!item) {
        res.status(404).json({ error: `The ${model} could not be found.` });
      }
      res.status(200).json(item);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}