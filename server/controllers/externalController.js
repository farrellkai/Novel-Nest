const db = require('../models/entryModel');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

const externalController = {};

//retrieve book data by title
externalController.getTitle = async () => {
  //destructure title from req.params
  const { title } = req.params;
  try {
  } catch (err) {}
};

module.exports = externalController;
