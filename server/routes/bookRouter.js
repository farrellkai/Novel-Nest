const express = require('express');
const bookController = require('../controllers/bookController');

const bookRouter = express.Router();

bookController.post('/', (req, res) => {});

module.exports = bookRouter;
