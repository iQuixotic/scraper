const express = require('express')
const router = express.Router();
const mongoose = require("mongoose");
const axios = require('axios');

// files
const del = require('../../routes/main/delete.js');
const update = require('../../routes/main/update.js');
const scrape = require('../../scripts/scraper.js');
const db = require('../../models');

// clear out entire db
exports.delAll = (res) => {
    db.Article.remove({})
        .then(function (dbArticle) {
            res.json({
                Message: 'You"ve done it Now !! '
            });
        }).catch(function (err) {
            res.json(err);
        });
}


// update whether or not a summary is saved to favorites
exports.hasFavUpdate = (res) => {
    if(favoriteList == false){
    db.Article.update({favoriteList: true})
        .then(function (dbArticle) {
            res.json(dbArticle)
        }).catch(function (err) {
            res.json(err);
        });
    }else {
        db.Article.update({favoriteList: false})
        .then(function (dbArticle) {
            res.json(dbArticle)
        }).catch(function (err) {
            res.json(err);
        });
    }
}




