const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
var cheerio = require("cheerio");
var request = require("request");
var mongoose = require("mongoose");
var mongojs = require('mongojs');
const axios = require('axios');
const app = express();
const scrape = require('../scripts/scraper.js');
const mongoAPI = require('../routes/mongoAPI.js');
const status = require('../routes/status.js')
const fetch = require('../controllers/fetch.js');


mongoose.connect('mongodb://localhost/news_db')

mongoose.Promise = global.Promise;

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(mongoAPI);

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

module.exports = app;
