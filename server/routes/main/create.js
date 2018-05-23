const express = require('express')
const router = express.Router();
const fetchController = require('../../controllers/main+api/fetch.js');

// a route to scrape when hit and a route to show what has been scraped
router.get("/show/json-of-scraped", fetchController.findAll)
router.get("/scrape", fetchController.addAll)

module.exports =  router;