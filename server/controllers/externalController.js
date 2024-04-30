const db = require('../models/entryModel');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

const externalController = {};

//retrieve book data by title
externalController.getTitle = async () => {};

module.exports = externalController;
