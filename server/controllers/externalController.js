const db = require('../models/entryModel');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

const externalController = {};

//retrieve book data by title
externalController.getTitle = async (req, res, next) => {
  //destructure title from req.params
  const { title } = req.params;
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    res.locals.results = data.totalItems;
    res.locals.items = data.items;
  } catch (err) {}
};

module.exports = externalController;
