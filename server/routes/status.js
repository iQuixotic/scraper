// import { INSPECT_MAX_BYTES } from "buffer";

const router = require("express").Router();
const scrape = require('../scripts/scraper.js');
const db = require('../models');
var mongoose = require("mongoose");
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/news_db');

function addAll() {
    scrape().then(results => {
        for (i = 0; i < results.length; i++) {
            db.Article.create(results[i])
                .then(function (dbArticle) {
                    console.log(dbArticle);
                }).catch(function (err) {
                    return res.json(err);
                });
        }
    });
}


// function jsonShow (){
// router.get("/displayAll", function(req, res) {
//     // Grab every document in the Articles collection
//     db.Article.find({})
//       .then(function(dbArticle) {
//         // If we were able to successfully find Articles, send them back to the client
//         res.json(dbArticle);
//       }).catch(function(err) {
//         // If an error occurred, send it to the client
//         res.json(err);
//       });
//   });
// }


//this is a testing route
router.use((req, res, next) => {
    res.status(200).json({
        title: 'This is my console test !!',
        message: 'This is the test you deserve, but not the one you need right now !!'
    });
});

//   module.exports = addAll
  module.exports =  router;