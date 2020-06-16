import React from "react";
import { connect } from "react-redux";
import addToFavorites from "../redux/addToFavorites";
import removeFromFavorites from "../redux/removeFromfavorites";
import { Link } from "react-router-dom";

function ListItem({
	externals,
	showName,
	isAdded,
	addToFavorites,
	removeFromFavorites,
	id,
}) {
	function handleFavoriteButton() {
		if (isAdded) {
			removeFromFavorites(externals);
		} else {
			addToFavorites(externals);
		}
	}

	return (
		<li>
			<Link to={`/${id}`}>{showName}</Link>
			<button onClick={handleFavoriteButton}>
				{isAdded ? "remove from favorite" : "add to favorite"}
			</button>
		</li>
	);
}

export default connect(
	(state, { externals }) => ({
		isAdded: state.favorites.some((external) => {
			return (
				external.tvrage === externals.tvrage &&
				external.thetvdb === externals.thetvdb &&
				external.imdb === externals.imdb
			);
		}),
	}),
	{ addToFavorites, removeFromFavorites }
)(ListItem);
