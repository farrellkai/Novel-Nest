const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get(
  '/:username',
  userController.checkMethod,
  userController.findUser,
  (req, res) => {
    const { _id, username } = res.locals.user;
    return res.status(200).json({ _id: _id, username: username });
  }
);

//authenticate login information
userRouter.post(
  '/login',
  userController.checkMethod,
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
    return res.sendStatus(201);
  }
);

//deactivate user account
userRouter.patch('/deactivate/:id', (req, res) => {
  return res.sendStatus(200);
});

//activate user account
userRouter.patch('/activate/:id', (req, res) => {
  return res.sendStatus(200);
});

//delete user data from db
userRouter.delete('/:id', userController.deleteUser, (req, res) => {
  return res.sendStatus(200);
});

module.exports = userRouter;
