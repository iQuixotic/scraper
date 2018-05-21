const express = require('express')
const router = express.Router();
const alterController = require('../../controllers/main+api/alter.js');
const commentsController = require('../../controllers/main+api/comments.js');

// route for emptying the database and starting completely fresh
router.get("/empty-the-db", function (req, res){
alterController.delAll(res);
});

// route for emptying the database and starting completely fresh
router.get("/empty-the-comment-db", function (req, res){
    commentsController.delAllComments(res);
});

module.exports =  router;