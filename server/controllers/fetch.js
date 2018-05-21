
const express = require('express')
const router = express.Router();
const mongoose = require("mongoose");
const axios = require('axios');

//files
const create = require('../routes/create.js')
const scrape = require('../scripts/scraper.js');
const db = require('../models');


// function for scraping new articles
exports.addAll = function() {
    scrape().then(results => {

        //create a new database entry for each scraped article and title
        for (i = 0; i < results.length; i++) {
            db.Article.create(results[i])
                .then(function (dbArticle) {

                    // provide a message to the page showing that scraping was sucessful
                        res.json({
                          msg: {
                            message: 'The data has been scraped from https://www.nytimes.com/ :)'
                          }});                      
                }).catch(function (err) {
                    return res.json(err);
                });
        };
    });
};

// function for grabbing all entries in the datbase
// and display everything in json format
exports.findAll = (res) => {
    db.Article.find({})
        .then(function (dbArticle) {
            res.json(dbArticle)
        }).catch(function (err) {
            res.json(err);
        });
}


