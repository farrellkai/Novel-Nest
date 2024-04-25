const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

//retrieve user data from db
userRouter.get('/', (req, res) => {
  return res.status(200); //more will go here later
});

module.exports = userRouter;
