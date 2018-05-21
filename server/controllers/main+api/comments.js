const express = require('express')
const router = express.Router();
const mongoose = require("mongoose");
const axios = require('axios');

// files
const update = require('../../routes/main/update.js');
const scrape = require('../../scripts/scraper.js');
const db = require('../../models');

// take the data coming in for a comment
exports.getComment = (req, res) => {
    console.log(req.body, 'asfasd')
    db.Comment.create(req.body)
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

// clear out entire comment dbs
exports.delAllComments = (res) => {
    db.Comment.remove({})
        .then(function (dbComment) {
            res.json({
                Message: 'You"ve done gone and cleared all the comments !! '
            });
        }).catch(function (err) {
            res.json(err);
        });
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