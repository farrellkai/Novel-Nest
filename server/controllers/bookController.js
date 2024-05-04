const db = require('../models/entryModel');

const bookController = {};

//find book data by id
bookController.findBookID = async (req, res, next) => {
  console.log('***findBookID middleware running***');
  const { googleID } = req.params;
  const query = 'SELECT _id FROM books WHERE google_id=$1';
  try {
    const data = await db.query(query, [googleID]);
  } catch (err) {}
};

//find book in db with matching title and author and pass object to next middleware function
bookController.findBook = async (req, res, next) => {
  console.log('***findBook middleware running***');
  if (res.locals.bookID) {
    console.log('GOING TO THE NEXT ONE AGAIN');
    return next();
  }

  const { title, authors } = req.body;
  const query = 'SELECT _id FROM books WHERE title=$1 AND authors=$2';
  try {
    const data = await db.query(query, [title, authors]);
    res.locals.bookID = data.rows[0];
    console.log(data.rows);
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
  console.log('***addBook middleware running***');
  //if book was found in previous middleware move on to next middleware
  if (res.locals.bookID) {
    console.log('GOING TO THE NEXT ONE');
    return next();
  }

  const { googleID, title, authors } = req.body;
  const query =
    'INSERT INTO books (google_id, title, authors) VALUES ($1, $2, $3)';
  try {
    await db.query(query, [googleID, title, authors]);
    console.log('***BOOK DATA ADDED***');
    return next();
  } catch (err) {
    return next({
      log: 'Error in bookController.addBook middleware function',
      status: 500,
      message: { err: 'cannot add book data' },
    });
  }
};

bookController.findUserBook = async (req, res, next) => {
  console.log('***findUserBook middleware running***');
  const { _id } = res.locals.bookID;
  const { userID } = req.body;
  const query = 'SELECT * FROM user_books WHERE user_id=$1 AND book_id=$2';
  try {
    const data = await db.query(query, [userID, _id]);
    if (data.rows[0])
      return next({
        log: 'Error in bookController.findUserBook middleware function',
        status: 409,
        message: { err: 'userBook already exists' },
      });
    else return next();
  } catch (err) {
    return next({
      log: 'Error in bookController.findUserBook middleware function',
      status: 500,
      message: { err: 'cannot find user book data' },
    });
  }
};

bookController.addUserBook = async (req, res, next) => {
  console.log('***addUserBook middleware running***');
  const { _id } = res.locals.bookID;
  const { userID, status } = req.body;
  const date =
    status === 'currently reading'
      ? new Date().toISOString().split('T')[0]
      : null;
  const query =
    'INSERT INTO user_books (user_id, book_id, status, started) VALUES ($1, $2, $3, $4)';
  try {
    await db.query(query, [userID, _id, status, date]);
    console.log('***USER BOOK DATA ADDED***');
    return next();
  } catch (err) {
    return next({
      log: 'Error in bookController.addUserBook middleware function',
      status: 500,
      message: { err: 'cannot add user book data' },
    });
  }
};

module.exports = bookController;
