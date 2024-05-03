const db = require('../models/entryModel');

const bookController = {};

//find book in db with matching title and author and pass object to next middleware function
bookController.findBook = async (req, res, next) => {
  const { title, author } = req.body;
  const query = 'SELECT _id FROM books WHERE title=$1 AND author=$2';
  try {
    const data = await db.query(query, [title, author]);
    res.locals.bookID = data.rows[0];
    return next();
  } catch (err) {
    return next({
      log: 'Error in bookController.findBook middleware function',
      status: 500,
      message: { err: 'cannot find book' },
    });
  }
};

//if book was not found in previous middleware function insert its data to db
bookController.addBook = async (req, res, next) => {
  //if book was found in previous middleware move on to next middleware
  if (res.locals.bookID) return next();

  const { googleID, title, author } = req.body;
};

module.exports = bookController;
