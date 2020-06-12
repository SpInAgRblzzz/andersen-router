import React from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from "react-router-dom";
import Navigation from "./componets/Navigation";
import Homepage from "./componets/Homepage";

function App() {
	return (
		<Router>
			<Navigation />

			<Switch>
				<Route path="/favorite">
					Nothing here yet. but i's <b>favorite</b>, alright
				</Route>
				<Route path="/">
					<Homepage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
