const express = require('express');

const externalRouter = express.Router();

externalRouter.get('/:title', (req, res) => {});

externalRouter.get('/:author', (req, res) => {});

module.exports = externalRouter;
