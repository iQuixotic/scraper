
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
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
const connectMe = process.env.MONGODB_URI || 'mongodb://localhost/news_db'; 
mongoose.connect(connectMe);
mongoose.Promise = global.Promise;
app.use(cors());
// use morgan, bodyParser, and cors
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(morgan("dev"));


// use /dist as a middleware
app.use("/", serveStatic ( path.join (__dirname, '../dist') ) )
// app.use('/',serveStatic(__dirname + "/dist"));
// console.log(path.join (__dirname, '../dist'))

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

// - - - - - - - - - - - - - - - - - - 

//listening port
const PORT = process.env.PORT || 8082;
app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});

