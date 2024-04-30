const db = require('../models/entryModel');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

const externalController = {};

//retrieve book data by title
externalController.getTitle = async () => {
  //destructure title from req.params
  const { title } = req.params;
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${API_KEY}`
    );
  } catch (err) {}
};

module.exports = externalController;
