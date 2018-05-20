const express = require('express')
const router = express.Router();
const fetchController = require('../controllers/fetch.js');


router.get("/scraper", function (req, res){
fetchController.findAll(res);
});

// fetchController.findAll();
// console.log(fetchController.findAll())


module.exports =  router;