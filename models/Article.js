const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String
  },
  snippet: {
    type: String
  },
  url: {
    type: String
  },
  pub_date: {
    type: Date
  },
  date: {
    type: Date,
    default: Date.now
  },
  art_id: {
    type: String
  }
});

const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
