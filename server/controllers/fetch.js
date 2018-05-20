const scraper = require('../scripts/scraper.js');
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

module.exports = {addAll, db}