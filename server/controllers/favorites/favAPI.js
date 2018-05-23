const express = require('express')
const router = express.Router();
const mongoose = require("mongoose");

// files
const page = require('../../routes/favorites/pageRoutes.js');
const api = require('../../routes/favorites/apiRoutes.js');
const db = require('../../models');

// find all where favorites = true or if it has comments 
// and post to json page for a later retrieval 
exports.postFavs = (req, res) => {
    db.Article.find({
        $or: [{'favoriteList': true}, {'hasComments': true} ]})
            .then(function (dbArticle) {
            res.json(dbArticle) 
        }).catch(function (err) {
            res.json(err);
        });
    }

// function to grab all comments and prepare
// for json render
exports.commentsAdder  = (req, res) => {
    db.Comment.find({})   
        .then(function (dbComment) {
            res.json( dbComment)
        }).catch(function (err) {
            res.json(err);
        });
}

