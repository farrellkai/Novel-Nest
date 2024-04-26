const client = require('../models/index.ts');

const userController = {};

//find if username exists in db
userController.findUser = async (req, res, next) => {
  const { username } = req.body;
  //console.log('username is ', username);
  const query = 'SELECT * FROM users';
  try {
    //console.log(client);
    const data = await client.connect.query(query);
    //console.log(data);
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
