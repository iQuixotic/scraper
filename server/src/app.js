const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var cheerio = require("cheerio");
var request = require("request");
var mongoose = require("mongoose");
var exphbs  = require('express-handlebars');
const axios = require('axios');
const app = express();


// connecting to controllers and assign them to variable
// const favourites = require('../../controllers/favourites.js');
// const home = require('../../controllers/home.js');
const scraper = require('../scripts/scraper.js')
// const login = require('../../controllers/login.js');
// const profile = require('../../controllers/profile.js');


app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
// app.use(app.router);
// routes.initialize(app);

//this is a testing route
app.get('/status', (req, res) => {
  res.send({
      title: 'This is my console test !!',
      message: 'This is the test you deserve, but not the one you need right now !!'
    })
})




//for registering a new user
app.post('/register', (req, res) => {
  res.send({
      email: req.body.email,
      password: req.body.password,
      message: 'I was working all along !!'
    })
})

// telling the app which controller to use
// app.use("/", home);
// app.use("/favourites", favourites);
// app.use("/login", login);
// app.use("/profile", profile);


//listening port
const PORT = process.env.PORT || 8082;

app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});
