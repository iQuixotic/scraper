const express = require('express')
const router = express.Router();
const alterController = require('../controllers/alter.js');

// route for emptying the database and starting completely fresh
router.get("/empty-the-db", function (req, res){
alterController.delAll(res);
});

module.exports =  router;