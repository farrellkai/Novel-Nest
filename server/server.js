const path = require('path');
const express = require('express');
const app = express();

const userRouter = require('./routes/userRouter');

const PORT = 3000;

//parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//request to router
app.use('/api/user', userRouter);

//handles errors for any undefined route
app.use('*', (req, res) => {
  return res.status(404).send('Page not found');
});

//Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Error in middleware function',
    status: 500,
    message: { err: 'Error' },
  };
  const error = Object.assign({}, defaultErr, err);
  console.log(error.log);
  return res.status(500).json(error.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
