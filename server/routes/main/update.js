const express = require('express')
const router = express.Router();
const alterController = require('../../controllers/main+api/alter.js');
const commentsController = require('../../controllers/main+api/comments.js')

// route for posting and route to display comments should comments exists
router.post("/show/json-update", function (req, res){
    // alterController.hasCommentsUpdate(res);
    commentsController.getStat(req, res);
});

router.get("/show/json-update", function (req, res){
    // alterController.hasCommentsUpdate(res);
    commentsController.getStat(req, res);
});

module.exports =  router;