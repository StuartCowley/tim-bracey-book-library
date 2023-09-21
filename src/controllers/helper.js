exports.createItem = model => {
  return async (req, res) => {
    try {
      const newItem = await model.create(req.body);
      res.status(201).json(newItem);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
}