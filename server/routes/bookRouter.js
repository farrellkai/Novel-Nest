const express = require('express');
const bookController = require('../controllers/bookController');

const bookRouter = express.Router();

bookRouter.get(
  '/book-status',
  bookController.checkMethod,
  bookController.findBook,
  bookController.findUserBook,
  (req, res) => {
    data = res.locals.userBook ? res.locals.userBook : { status: null };
    return res.status(200).json(data);
  }
);

bookRouter.get(
  '/all-books/:userID',
  bookController.findUserBooks,
  (req, res) => {}
);

bookRouter.post(
  '/',
  bookController.checkMethod,
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
