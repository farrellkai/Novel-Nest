const db = require('../models/entryModel');

const bookController = {};

bookController.findBook = async (req, res, next) => {
  const { title } = req.body;
};

module.exports = bookController;
