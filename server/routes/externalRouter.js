const express = require('express');
const externalController = require('../controllers/externalController');

const externalRouter = express.Router();

externalRouter.get('/:query', externalController.getTitle, (req, res) => {});

module.exports = externalRouter;
