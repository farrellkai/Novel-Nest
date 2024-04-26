import db from '../models/entryModel';

const userController = {};

//find if username exists in db
userController.findUser = async (req, res, next) => {
  const { username } = req.body;
};

module.exports = userController;
