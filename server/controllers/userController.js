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

//check if user's password matches inputted password
userController.varifyUser = async (req, res, next) => {
  //error to be thrown if username does not exist or password does not match username
  const error = {
    log: 'Error in userController.varifyUser middleware function',
    status: 401,
    message: { err: 'incorrect username or password' },
  };
  if (!res.locals.user) return next(error);
  const { password } = req.body;
};

module.exports = userController;
