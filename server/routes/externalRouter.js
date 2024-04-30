const express = require('express');
const externalController = require('../controllers/externalController');

const externalRouter = express.Router();

externalRouter.get('/:query', externalController.getItem, (req, res) => {
  return res
    .status(200)
    .json({ results: res.locals.results, items: res.locals.items });
});

module.exports = externalRouter;
