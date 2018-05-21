const express = require('express')
const router = express.Router();
const fetchController = require('../../controllers/main+api/fetch.js');

// route for displaying json of all scraped files
router.get("/show/json-of-scraped", function (req, res){
fetchController.findAll(res);
});

// route that makes the scraper scrape some new news
router.get("/scrape", function (req, res){
fetchController.addAll(res);
});

module.exports =  router;