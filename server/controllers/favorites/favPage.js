const express = require('express')
const router = express.Router();
const mongoose = require("mongoose");

// files
const update = require('../../routes/favorites/pageRoutes.js');
const db = require('../../models');

// clear favorites page
exports.delAllfavs = (res) => {
    db.Article.remove({})
        .then(function (dbArticle) {
            res.json({});
        }).catch(function (err) {
            res.json(err);
        });
        db.Comment.remove({})
        .then(function (dbComment) {
            res.json({});
        }).catch(function (err) {
            res.json(err);
        });
}

// this will be to delete a specific favorite
exports.delThis = (res) => {
    if(db.Article.id === this.id){
        (res) => {
            db.Article.remove(this.id)
                .then(function (dbArticle) {
                    res.json({});
                }).catch(function (err) {
                    res.json(err);
                });
        }
    } else if (db.Comment.id === this.id){
        (res) => {
            db.Comment.remove(this.id)
                .then(function (dbComment) {
                    res.json({});
                }).catch(function (err) {
                    res.json(err);
                });
        }
    }
};

// update whether or not a summary is saved to favorites
exports.hasFavUpdate = (req, res) => {
    console.log(req.body.id)
    console.log(db.Article._id)
        db.Article.findByIdAndUpdate(req.body.id,
        ({favoriteList: true})
        )
   // db.Article.update({ $where: db.Article._id == req.body.id, favoriteList: true })
    
        .then(function (dbArticle) {
           res.json(dbArticle)
        }).catch(function (err) {
            res.json(err);
        });
    }
    