const express = require('express')
const router = express.Router();
const favPageController = require('../../controllers/favorites/favPage.js');
const favAPIController = require('../../controllers/favorites/favAPI.js');

// route for dispaying database favorites
router.post("/favorites", function (req, res){
    favPageController.hasFavUpdate(req,res);
});

// json data for favorites
router.post("/favoritesAPI", function (req, res){
    favAPIController.findAndAdd(req, res);
});

// json data for favorites
router.get("/favoritesAPI", function (req, res){
    favAPIController.findAndAdd(req, res);
});

module.exports =  router;