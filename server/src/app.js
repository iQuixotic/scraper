
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const cheerio = require("cheerio");
const request = require("request");
const mongojs = require('mongojs');
const axios = require('axios');

// files
const scrape = require('../scripts/scraper.js');
const create = require('../routes/main/create.js');
const del = require('../routes/main/delete.js');
const update = require('../routes/main/update.js');
const favAPI = require('../routes/favorites/apiRoutes.js');
const favPage = require('../routes/favorites/pageRoutes.js');

const  alterController = require('../controllers/main+api/alter.js')
const commentsController = require('../controllers/main+api/comments.js')
const fetchController = require('../controllers/main+api/fetch.js');

//connect to the database news_db on the server
mongoose.connect('mongodb://localhost/news_db')
mongoose.Promise = global.Promise;

// use morgan, bodyParser, and cors
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(morgan("dev"));
app.use(cors());



// use routes
app.use(create);
app.use(del);
app.use(update);
app.use(favAPI);
app.use(favPage);

// error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// render error to the page for easier troubleshooting
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});

// more error handling
function log(string) {
  let callerLine = new Error().stack.split("\n")[2];
  let lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}
// - - - - - - - - - - - - - - - - - - 

//listening port
const PORT = process.env.PORT || 8082;
app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});

