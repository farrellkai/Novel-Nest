const express = require('express');
const externalController = require('../controllers/externalController');

const externalRouter = express.Router();

externalRouter.get('/:title', externalController.getTitle, (req, res) => {});

externalRouter.get('/:author', (req, res) => {});

module.exports = externalRouter;
