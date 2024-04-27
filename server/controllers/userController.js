const db = require('../models/entryModel');

const userController = {};

//find if username exists in db
userController.findUser = async (req, res, next) => {
  const { username } = req.body;
  // console.log('client is ', client);
  // console.log('CONFIG IS:', config);
  const query = 'SELECT * FROM users';
  try {
    const data = await db.query(query);
    console.log(data.rows);
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
