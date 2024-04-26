import db from '../models/entryModel';

const userController = {};

//find if username exists in db
userController.findUser = async (req, res, next) => {
  const { username } = req.body;
  const query = `SELECT * FROM users WHERE username=${username}`;
  try {
    const data = await db.query(query);
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
