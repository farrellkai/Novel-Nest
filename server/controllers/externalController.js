const db = require('../models/entryModel');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

const externalController = {};

//retrieve book data by title
externalController.getItem = async (req, res, next) => {
  console.log('***getItem middleware running***');
  //destructure query from req.params
  const { query } = req.params;
  try {
    //set response to value of fetched data from external api
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${query}&key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    res.locals.results = data.totalItems;
    res.locals.items = data.items;
    return next();
  } catch (err) {
    return next({
      log: 'Error in externalController.getTitle middleware function',
      status: 500,
      message: { err: 'cannot fetch data' },
    });
  }
};

module.exports = externalController;
