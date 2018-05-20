const router = require("express").Router();
const fetch = require('../controllers/fetch.js');


router.use((req, res, next) => {
    // Grab every document in the Articles collection
    fetch.db.Article.find({})
      .then(function(dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(dbArticle);
      }).catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

module.exports =  router;