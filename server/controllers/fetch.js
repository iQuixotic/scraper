const scraper = require('../scripts/scraper.js');
const db = require('../models');
var mongoose = require("mongoose");
const axios = require('axios');
const mongoAPI = require('../routes/mongoAPI.js')
const express = require("express").Router();
// const router = require("express").Router();

// mongoose.connect('mongodb://localhost/news_db');

exports.addAll = function() {
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


exports.findAll = (res) => {
    console.log('are you even trying anymore ?')
    // Grab every document in the Articles collection
    db.Article.find({})
        .then(function (dbArticle) {
            console.log('you hit the data')
            // let article = [];
            // return article.push(dbArticle);
            console.log(dbArticle);
            // If we were able to successfully find Articles, send them back to the client
            res.json(dbArticle)
        }).catch(function (err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
}



// $.ajax({
//     method: "POST",
//     url: "/articles/" + thisId,
//     data: {
//       // Value taken from title input
//       title: $("#titleinput").val(),
//       // Value taken from note textarea
//       body: $("#bodyinput").val()
//     }
//   })
//     // With that done
//     .then(function(data) {
//       // Log the response
//       console.log(data);
//       // Empty the notes section
//       $("#notes").empty();
//     });

// exports.test = (req, res, next) => {
//     axios.post('/test', function (req, res) {
//         res.json({
//             title: 'This is my console test !!',
//             message: 'This is the test you deserve, but not the one you need right now !!',
//             // request: {
//             //     type: "POST",
//             //     url: "http://localhost:8082/test/"
//             // }
//         });
//     });
// }
