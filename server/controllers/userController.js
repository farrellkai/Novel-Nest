const db = require('../models/entryModel');

const userController = {};

//find if username exists in db
userController.findUser = async (req, res, next) => {
  const { username } = req.body;
  const query = 'SELECT * FROM users WHERE username=$1';
  try {
    const data = await db.query(query, [username]);
    res.locals.user = data.rows[0];
    return next;
  } catch (err) {
    return next({
      log: 'Error in userController.findUser middleware function',
      status: 500,
      message: { err: 'cannot find user' },
    });
  }
};

module.exports = userController;
