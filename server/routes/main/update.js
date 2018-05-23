const express = require('express')
const router = express.Router();
const alterController = require('../../controllers/main+api/alter.js');
const commentsController = require('../../controllers/main+api/comments.js')

// route for posting and route to display comments should comments exists
router.get("/show/json-update",  commentsController.getComment);

router.post("/show/json-update", commentsController.getComment);
    
module.exports =  router;