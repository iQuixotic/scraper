const express = require('express')
const router = express.Router();
const fetchController = require('../../controllers/main+api/fetch.js');

// a route to scrape when hit and a route to show what has been scraped
router.get("/show/json-of-scraped", function (req, res){
fetchController.findAll(res);
});

router.get("/scrape", function (req, res){
fetchController.addAll(res);
});

module.exports =  router;