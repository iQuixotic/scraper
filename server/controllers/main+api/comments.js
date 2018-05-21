const express = require('express')
const router = express.Router();
const mongoose = require("mongoose");
const axios = require('axios');

// files
const update = require('../../routes/main/update.js');
const scrape = require('../../scripts/scraper.js');
const db = require('../../models');

// take the data coming in for a comment
exports.getStat = (req, res) => {
    console.log(req.body)
    db.Comment.create(req, res)
        .then(function (dbComment) {
            res.json(dbComment);
        }).catch(function (err) {
            res.json(err);
        });
        // db.Article.update({hasComments: true, favoriteList: true})
        // .then(function (dbArticle) {
        //     res.json(dbArticle)
        // }).catch(function (err) {
        //     res.json(err);
        // });
}

// // update comments when they exists
// exports.hasCommentsUpdate = (res) => {
//     db.Article.update({hasComments: true, favoriteList: true})
//         .then(function (dbArticle) {
//             res.json(dbArticle)
//         }).catch(function (err) {
//             res.json(err);
//         });
//     }