const express = require('express')
const router = express.Router();
const favPageController = require('../../controllers/favorites/favPage.js');
const favAPIController = require('../../controllers/favorites/favAPI.js');

// json route for dispaying database favorites
router.get("/show/my-favs", favAPIController.postFavs);
router.post("/show/my-favs", favPageController.hasFavUpdate);

// get and post comments to json route
router.get("/show/comments", favAPIController.commentsAdder);
router.post("/show/comments", favAPIController.commentsAdder);

module.exports =  router;