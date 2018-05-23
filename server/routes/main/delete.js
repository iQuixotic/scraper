const express = require('express')
const router = express.Router();
const alterController = require('../../controllers/main+api/alter.js');
const commentsController = require('../../controllers/main+api/comments.js');

// route for emptying the database and starting completely fresh
router.get("/empty-the-db", alterController.delAll);

// route for emptying the database and starting completely fresh
router.get("/empty-the-comment-db", commentsController.delAllComments);

module.exports =  router;