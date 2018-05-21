// packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
var cheerio = require("cheerio");
var request = require("request");
var mongoose = require("mongoose");
var mongojs = require('mongojs');
const axios = require('axios');

// files
const scrape = require('../scripts/scraper.js');
const create = require('../routes/create.js');
const del = require('../routes/delete.js');

const  alterController = require('../controllers/alter.js')
const fetchController = require('../controllers/fetch.js');

//connect to the database news_db on the server
mongoose.connect('mongodb://localhost/news_db')
// mongoose.Promise = global.Promise;

// use morgan, bodyParser, and cors
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// use routes
app.use(create);
app.use(del);

// error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});

//listening port
const PORT = process.env.PORT || 8082;
app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});

