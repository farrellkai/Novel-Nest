const db = require('../models/entryModel');
const { use } = require('../routes/userRouter');

const userController = {};

//find if username exists in db
userController.findUser = async (req, res, next) => {
  const { username } = req.body;
  const query = 'SELECT * FROM users WHERE username=$1';
  try {
    const data = await db.query(query, [username]);
    res.locals.user = data.rows[0];
    return next();
  } catch (err) {
    return next({
      log: 'Error in userController.findUser middleware function',
      status: 500,
      message: { err: 'cannot find user' },
    });
  }
};

//check if username/email is already taken
userController.allowUser = async (req, res, next) => {
  const { username, email } = req.body;
  if (username === res.locals.username)
    return next({
      log: 'Error in userController.allowUser middleware function',
      status: 409,
      message: { err: 'username is not available' },
    });
  if (email === res.locals.email)
    return next({
      log: 'Error in userController.allowUser middleware function',
      status: 409,
      message: { err: 'email address is already registered' },
    });
  return next();
};

//submit user's data to database
userController.createUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  const query =
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
  try {
    await db.query(query, [username, email, password]);
    console.log('***USER CREATED***');
    return next();
  } catch (err) {
    return next({
      log: 'Error in userController.createUser middleware function',
      status: 500,
      message: { err: 'cannot create user' },
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
  if (password !== res.locals.user.password) return next(error);
  return next();
};

module.exports = userController;
