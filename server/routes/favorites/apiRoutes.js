const express = require('express')
const router = express.Router();
const apiController = require('../../controllers/favorites/favAPI.js');

// route for posting new favorites from database
router.post("/favorites", function (req, res){
apiController.postAll(res);
});

module.exports =  router;