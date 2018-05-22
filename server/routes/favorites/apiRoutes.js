const express = require('express')
const router = express.Router();
const favPageController = require('../../controllers/favorites/favPage.js');

// route for dispaying database favorites
router.post("/favorites", function (req, res){
favPageController.hasFavUpdate(req,res);
});

module.exports =  router;