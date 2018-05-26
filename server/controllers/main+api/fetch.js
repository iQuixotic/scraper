
const express = require('express')
const router = express.Router();
const mongoose = require("mongoose");
const axios = require('axios');

// files
const create = require('../../routes/main/create.js')
const scrape = require('../../scripts/scraper.js');
const db = require('../../models');

// function for scraping new articles
exports.addAll = (req, res, next) => {
    scrape(req, res).then(function (results) {

        //create a new database entry for each scraped article and title
        for (i = 0; i < results.length; i++) {

            db.Article.create(results[i])
        }

        res.send( 'You have sucessfully scraped the New York Times !! :)')
    }).catch(function (err) {
        return res.json(err);
    });
};


// exports.delAll = (req, res) => {
//     db.Article.remove({})
//         .then(function (dbArticle) {
//             ({
//                 Message: 'You"ve done it Now !! '
//             });
//         }).catch(function (err) {
//             res.json(err);
//         });
// }

// function for grabbing all entries in the datbase
// and display everything in json format
exports.findAll = (req, res) => {
    db.Article.find({})
        .then(function (dbArticle) {
            res.json(dbArticle)
        }).catch(function (err) {
           return res.json(err);
        });
}


