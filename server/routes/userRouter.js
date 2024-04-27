const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

//retrieve user data from db
userRouter.get(
  '/',
  userController.findUser,
  userController.varifyUser,
  (req, res) => {
    return res.status(200); //more will go here later
  }
);

//submit user data into db
userRouter.post('/', userController.findUser, (req, res) => {
  return res.sendStatus(200);
});

//delete user data from db
userRouter.delete('/:id', (req, res) => {
  return res.sendStatus(200);
});

module.exports = userRouter;
