const express = require('express')
const router = express.Router();
const favPageController = require('../../controllers/favorites/favPage.js');
const favAPIController = require('../../controllers/favorites/favAPI.js');

// when this route is hit, doc will be added to favorites
// in the database for later json extraction
router.get("/favorites", favPageController.hasFavUpdate);
router.post("/favorites", favPageController.hasFavUpdate);

module.exports =  router;