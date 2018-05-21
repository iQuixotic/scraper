const express = require('express')
const router = express.Router();
const pageController = require('../../controllers/favorites/favPage.js');

// route for dispaying database favorites
router.get("/favorites", function (req, res){
pageController.displayAll(res);
});

module.exports =  router;