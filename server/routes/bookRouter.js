const express = require('express');
const bookController = require('../controllers/bookController');

const bookRouter = express.Router();

bookRouter.get('/googleID', (req, res) => {});

bookRouter.post(
  '/',
  bookController.findBook,
  bookController.addBook,
  bookController.findBook,
  bookController.findUserBook,
  bookController.addUserBook,
  (req, res) => {
    return res.sendStatus(200);
  }
);

module.exports = bookRouter;
