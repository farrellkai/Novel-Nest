const db = require('../models/entryModel');
const { use } = require('../routes/userRouter');

const userController = {};

//find if username exists in db
userController.findUser = async (req, res, next) => {
  //pull username from req.body
  const { username } = req.body;

  //find row with matching username in db
  const query = 'SELECT * FROM users WHERE username=$1';
  try {
    const data = await db.query(query, [username]);
    //pass retrieved data onto res.locals object
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

//check if username is already taken
userController.allowUser = async (req, res, next) => {
  //if data passed on res.locals object is not undefined throw error
  if (res.locals.user) {
    return next({
      log: 'Error in userController.allowUser middleware function',
      status: 409,
      message: { err: 'username is not available' },
    });
  }
  return next();
};

//check if email is already taken
userController.allowEmail = async (req, res, next) => {
  //pull email from req.body
  const { email } = req.body;
  //find row with matching email address in db
  const query = 'SELECT * FROM users WHERE email=$1';
  try {
    const data = await db.query(query, [email]);
    //if querey result is not undefined throw error
    if (data.rows[0])
      return next({
        log: 'Error in userController.allowEmail middleware function',
        status: 409,
        message: { err: 'email address already registered' },
      });
    return next();
  } catch (err) {
    return next({
      log: 'Error in userController.allowEmail middleware function',
      status: 500,
      message: { err: 'cannot retrieve email' },
    });
  }
};

//submit user's data to database
userController.createUser = async (req, res, next) => {
  //pull username, email, and password from req.body
  const { username, email, password } = req.body;
  //create new row in users table with username, email, and password passed in as values
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
