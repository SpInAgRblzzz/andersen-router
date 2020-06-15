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
import FaviritesPage from "./componets/FavoritesPage";

function App() {
	return (
		<Router>
			<Navigation />

			<Switch>
				<Route path="/favorite">
					<FaviritesPage />
				</Route>
				<Route path="/">
					<Homepage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
