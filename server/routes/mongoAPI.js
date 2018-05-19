const router = require("express").Router();
const scrape = require('../scripts/scraper.js');
const db = require('../models');
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/news_db');

// router.get("/scrape", scrape());

// module.exports = router;

scrape()
.then(results => {
    for(i=0; i<results.length; i++){
        db.Article.create(results[i])
        .then(function(dbArticle) {
          console.log(dbArticle);
    }).catch(function(err) {
        return res.json(err);
      });

    }
    // db.Article.create(result)

}); 
// console.log(results))
    
    // for(
