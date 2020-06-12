import React from "react";
import "./App.css";
import Navigation from "./componets/Navigation";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<Navigation />
		</Router>
	);
}

export default App;
