var mongojs = require("mongojs");

var databaseUrl = "nycStories";
var collections = ["news"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);


db.on("error", function(error) {
  console.log("Database Error:", error);
});


app.get("/allnews", function(req, res) {
    
  db.news.find({}, function(error, found) {
      
    if (error) {
      console.log(error);
    }
    
    else {
      res.json(found);
    }
  });
});


app.get("/name", function(req, res) {
    
  db.animals.find().sort({ name: 1 }, function(error, found) {
      
    if (error) {
      console.log(error);
    }
    
    else {
      res.json(found);
    }
  });
});


app.get("/weight", function(req, res) {

  db.animals.find().sort({ weight: -1 }, function(error, found) {
      
    if (error) {
      console.log(error);
    }
    
    else {
      res.json(found);
    }
  });
});


