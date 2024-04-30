const express = require('express');

const externalRouter = express.Router();

externalRouter.get('/:title', (req, res) => {});

module.exports = externalRouter;
