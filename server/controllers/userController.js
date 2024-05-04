const db = require('../models/entryModel');
const bcrypt = require('bcrypt');

const userController = {};

userController.checkMethod = (req, res, next) => {
  if (req.method === 'GET') {
  }
};

userController.getUserID = async (req, res, next) => {
  console.log('***getUserID middleware running***');
  const { username } = req.params;
  const query = 'SELECT _id FROM users WHERE username=$1';
  try {
    const data = await db.query(query, [username]);
    res.locals.userID = data.rows[0];
    return next();
  } catch (err) {
    return next({
      log: 'Error in userController.getUserID middleware function',
      status: 500,
      message: { err: 'cannot get user id' },
    });
  }
};

//find if username exists in db
userController.findUser = async (req, res, next) => {
  console.log('***findUser middleware running***');
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
  console.log('***allowUser middleware running***');
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
  console.log('***findEmail middleware running***');
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
  console.log('***createUser middleware running***');
  //pull username, email, and password from req.body
  const { username, email, password } = req.body;
  //hash the password
  const hash = await bcrypt.hash(password, 10);
  //create new row in users table with username, email, and password passed in as values
  const query =
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
  try {
    await db.query(query, [username, email, hash]);
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
  console.log('***varifyUser middleware running***');
  //error to be thrown if username does not exist or password does not match username
  const error = {
    log: 'Error in userController.varifyUser middleware function',
    status: 401,
    message: { err: 'incorrect username or password' },
  };
  if (!res.locals.user) return next(error);
  const { password } = req.body;
  try {
    //compare password to hashed passowrd in db
    const compare = await bcrypt.compare(password, res.locals.user.password);
    //if results do not match throw error
    if (!compare) return next(error);
    else return next();
  } catch (err) {
    return next({
      log: 'Error in userController.varifyUser middleware function',
      status: 500,
      message: { err: 'cannot confirm username/password' },
    });
  }
};

//remove user from db
userController.deleteUser = async (req, res, next) => {
  console.log('***deleteUser middleware running***');
  const { id } = req.params;
  console.log('id is:', id);
  const query = 'DELETE FROM users WHERE id=$1';
  try {
    await db.query(query, [id]);
    return next();
  } catch (err) {
    return next({
      log: 'Error in userController.deleteUser middleware function',
      status: 500,
      message: { err: 'cannot delete user' },
    });
  }
};

module.exports = userController;
