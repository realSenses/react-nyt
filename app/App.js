// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
// Routing
import { BrowserRouter, Route } from "react-router-dom";


// Include the main Main Component
import Main from "./components/Main";

//Render
ReactDOM.render(
	(
		<BrowserRouter>
			<Route path="/" component={Main} />
		</BrowserRouter>
	),
	document.getElementById("app")
);