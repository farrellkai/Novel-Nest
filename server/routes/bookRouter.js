const express = require('express');
const bookController = require('../controllers/bookController');

const bookRouter = express.Router();

bookRouter.post('/', bookController.findBook, (req, res) => {
  return res.sendStatus(200);
});

module.exports = bookRouter;
