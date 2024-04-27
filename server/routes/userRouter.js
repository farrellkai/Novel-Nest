const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

//retrieve user data from db
userRouter.post(
  '/login',
  userController.findUser,
  userController.varifyUser,
  (req, res) => {
    return res.sendStatus(200);
  }
);

//submit user data into db
userRouter.post(
  '/signup',
  userController.findUser,
  userController.allowUser,
  userController.allowEmail,
  userController.createUser,
  (req, res) => {
    return res.sendStatus(200);
  }
);

//delete user data from db
userRouter.delete('/:id', userController.deleteUser, (req, res) => {
  return res.sendStatus(200);
});

module.exports = userRouter;
