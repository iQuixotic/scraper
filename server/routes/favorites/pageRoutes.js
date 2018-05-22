const express = require('express')
const router = express.Router();
const favPageController = require('../../controllers/favorites/favPage.js');
const favAPIController = require('../../controllers/favorites/favAPI.js');

// route for dispaying database favorites
router.get("/favorites", function (req, res){
favPageController.hasFavUpdate(req, res);
});

// routes that send information for which article to display in
// the favorites page
router.post("/giveMeFavorites", function (req, res){
    favAPIController.postFavs(req, res);
});

router.get("/giveMeFavorites", function (req, res){
    favAPIController.postFavs(req, res);
});
module.exports =  router;