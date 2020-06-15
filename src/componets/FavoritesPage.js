import React from "react";
import { connect } from "react-redux";
import addToFavorites from "../redux/addToFavorites";
import removeFromfavorites from "../redux/removeFromfavorites";

function FavoritesPage({ favorites, addToFavorites, removeFromfavorites }) {
	return favorites.length === 0 ? (
		<p>no favorites added</p>
	) : (
		<ul>
			<p>some list</p>
		</ul>
	);
}

export default connect((state) => ({ favorites: state.favorites }), {
	addToFavorites,
	removeFromfavorites,
})(FavoritesPage);
