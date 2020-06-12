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

			<Switch>
				<Route path="/favorite">
					<p>
						Nothing here yet. but i's <b>favorite</b>, alright
					</p>
				</Route>
				<Route path="/">
					<p>
						Nothing here yet. but i's <b>homepage</b>, alright
					</p>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
