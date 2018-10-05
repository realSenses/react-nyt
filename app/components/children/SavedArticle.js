// Include React
import React from "react";
// helpers api
const helpers = require("../utils/helpers");
// import helpers from "../utils/helpers";

// History component. It will be used to show a log of recent searches.
class SavedArticle extends React.Component {
  /*
  getInitialState() {
    return { result:[] };
  }
  */

  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.handleDeleteSavedArticle(this.props.savedArticleInfo);
  }

  // article info prop from main related to returned results
  render() {
    return (  
      <div>
        <a target="_blank" href={this.props.savedArticleInfo.url}>{this.props.savedArticleInfo.title}</a>
        &nbsp;•&nbsp;Saved Date {this.props.savedArticleInfo.date.substring(0,10)}
        <button onClick={this.handleDelete} className="btn btn-default btn-xs pull-right">Delete</button>
      </div>
    );
  }
}

export default SavedArticle;