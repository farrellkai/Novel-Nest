const db = require('../models/entryModel');

const bookController = {};

bookController.findBook = async (req, res, next) => {
  const { title, author } = req.body;
  const query = 'SELECT _id FROM books WHERE title=$1 AND author=$2';
  try {
    const data = await db.query(query, [title, author]);
    res.local.bookID = data.rows[0];
    return next();
  } catch (err) {}
};

module.exports = bookController;
