const express = require('express')
const router = express.Router();
const mongoose = require("mongoose");

// files
const page = require('../../routes/favorites/pageRoutes.js');
const api = require('../../routes/favorites/apiRoutes.js');
const db = require('../../models');

// post to page for a later retrieval 
exports.postFavs = (res) => {
    db.Article.find({favoriteList: true, hasComments: true})
            .then(function (dbArticle) {
            res.json(dbArticle) 
        }).catch(function (err) {
            res.json(err);
        });
    }


// function to render favorites and comments
// exports.findAndAdd  = (res) => {
//     db.Article.find({})
//     .where( db.Article.favoriteList === true || db.Article.id === db.Comment.ArticleID)
//         .then(function (dbArticle, dbComment) {
//             res.json(dbArticle, dbComment)
//         }).catch(function (err) {
//             res.json(err);
//         });
// }

