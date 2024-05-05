const db = require('../models/entryModel');

const bookController = {};

//START HERE WHEN YOU COME BACK!
bookController.checkMethod = (req, res, next) => {
  console.log('***checkMethod middleware running***');
  console.log(req.method);
  if (req.method === 'GET') {
    const { googleID, userID } = req.params;
    res.locals.IDs = { googleID: googleID, userID: userID };
  } else if (req.method === 'POST') {
    console.log('WE MADE IT THIS FAR!');
    const { googleID, userID } = req.body;
    res.locals.IDs = { googleID: googleID, userID: userID };
  }
  return next();
};

//find book in db with matching title and author and pass object to next middleware function
bookController.findBook = async (req, res, next) => {
  console.log('***findBook middleware running***');
  if (res.locals.IDs.bookID) {
    console.log('GOING TO THE NEXT ONE AGAIN');
    return next();
  }

  const { googleID } = res.locals.IDs;
  console.log('googleID is:', googleID);
  const query = 'SELECT _id FROM books WHERE google_id=$1';
  try {
    const data = await db.query(query, [googleID]);
    const { _id } = data.rows[0];
    res.locals.IDs.bookID = _id;
    console.log('res.locals.IDs.bookID:', res.locals.IDs.bookID);
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
  if (res.locals.IDs.bookID) {
    console.log('GOING TO THE NEXT ONE');
    return next();
  }

  const { title, authors } = req.body;
  const { googleID } = res.locals.IDs;
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
  const { bookID } = res.locals.IDs;
  console.log('bookID is:', bookID);
  const { userID } = res.locals.IDs;
  const query = 'SELECT * FROM user_books WHERE user_id=$1 AND book_id=$2';
  try {
    const data = await db.query(query, [userID, bookID]);
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
  const { bookID, userID } = res.locals.IDs;
  console.log('bookID is:', bookID);
  const { status } = req.body;
  const date =
    status === 'currently reading'
      ? new Date().toISOString().split('T')[0]
      : null;
  const query =
    'INSERT INTO user_books (user_id, book_id, status, started) VALUES ($1, $2, $3, $4)';
  try {
    await db.query(query, [userID, bookID, status, date]);
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
