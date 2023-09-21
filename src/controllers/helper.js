const { Book, Reader } = require('../models');

const getModel = model => {
  const models = {
    book: Book,
    reader: Reader,
  };

  return models[model];
}

const getError404 = model => {
  return { error: `The ${model} could not be found.` };
}

exports.createItem = model => {
  const Model = getModel(model);
  return async (req, res) => {
    try {
      const newItem = await Model.create(req.body);
      res.status(201).json(newItem);
    } catch (err) {
      const errorMessages = err.errors?.map((e) => e.message)
      res.status(400).json(errorMessages);
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
        res.status(404).json(getError404(model));
      }
      res.status(200).json(item);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

exports.updateItem = model => {
  const Model = getModel(model);
  return async (req, res) => {
    const { id: itemId } = req.params;
    const updateData = req.body;

    try {
      const [ updatedRows ] = await Model.update(updateData, { where: { id: itemId } });
      if(!updatedRows) {
        res.status(404).json(getError404(model));
      }
      res.status(200).json(updatedRows);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
}

exports.deleteItem = model => {
  const Model = getModel(model);
  return async (req, res) => {
    const { id: itemId } = req.params;

    try {
      const deletedRows = await Model.destroy({ where: { id: itemId } });
      if(!deletedRows) {
        res.status(404).json(getError404(model));
      }
      res.status(204).json(deletedRows);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}