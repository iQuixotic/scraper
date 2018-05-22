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





