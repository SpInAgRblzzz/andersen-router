import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./componets/Navigation";
import Homepage from "./componets/Homepage";
import FavoritesPage from "./componets/FavoritesPage";
import ShowPage from "./componets/ShowPage";

function App() {
	return (
		<Router>
			<Navigation />

			<Switch>
				<Route path="/favorite">
					<FavoritesPage />
				</Route>
				<Route path="/:id">
					<ShowPage />
				</Route>
				<Route path="/">
					<Homepage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
