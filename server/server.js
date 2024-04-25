const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

//parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
