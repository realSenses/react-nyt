// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");



// Create Instance of Express
const app = express();

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// Import routes and give the server access to them.
const routes = require("./controllers/app_controller.js");
app.use("/", routes);

// -------------------------------------------------

const databaseUri = 'mongodb://localhost/mernNewsDb';

if (process.env.MONGODB_URI) {
  // executes only when deployed as Heroku App
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}


const db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// Listen on port 8080
const port = process.env.PORT || 8080; 
app.listen(port, function() {
  console.log("App is now running on port 8080!");
});

