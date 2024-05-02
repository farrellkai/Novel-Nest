const express = require('express');
const externalController = require('../controllers/externalController');

const externalRouter = express.Router();

//experimental
externalRouter.get('/cover', externalController.getCover, (req, res) => {});

externalRouter.get('/:query', externalController.getItem, (req, res) => {
  return res
    .status(200)
    .json({ results: res.locals.results, items: res.locals.items });
});

module.exports = externalRouter;
