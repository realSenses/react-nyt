// Include Server Dependencies
const express = require("express");

// Require Article Schema
const Article = require("../models/Article");

// Create Instance of Express
const app = express();

// Routes
// ======

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// This is route will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) {

  // will find all the records, sort it in descending order
  Article.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) { //then limit the records to 5
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// the route will send POST requests to save each search.
app.post("/api", function(req, res) {
  console.log("BODY: " + req.body._id);

  // save the article based on the JSON input.
  
  Article.create({
    title: req.body.title,
    snippet: req.body.snippet,
    url: req.body.url,
    pub_date: req.body.date,
    art_id: req.body.art_id,
    date: Date.now()  // use Date.now() to always get the current date time
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  });
});


app.post("/api/delete", function(req, res) {
    console.log(req.body);
    Article.remove({ _id: req.body._id}, function(err) {
        if (!err) {
            res.send("Deleted!");
        } else {
            console.log(err);
        }
    });

});

// -------------------------------------------------

// Export routes for server.js to use.
module.exports = app;

