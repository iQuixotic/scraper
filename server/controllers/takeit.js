const scraper = require('../scripts/scraper.js');
const db = require('../models');
var mongoose = require("mongoose");
const axios = require('axios');

function findAll(res) {
    console.log('are you even trying anymore ?')
    // Grab every document in the Articles collection
    db.Article.find({})
        .then(function (dbArticle) {
            // let article = [];
            // return article.push(dbArticle);
            console.log(dbArticle);
            // If we were able to successfully find Articles, send them back to the client
            res.json(dbArticle)
        }).catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
        // axios.post('/scraper', {
        //     article: article
        //   })
}

module.exports = findAll;

