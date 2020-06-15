import React from "react";
import { connect } from "react-redux";
import addToFavorites from "../redux/addToFavorites";
import removeFromFavorites from "../redux/removeFromfavorites";

function HomepageListItem({
	externals,
	showName,
	isAdded,
	addToFavorites,
	removeFromFavorites,
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
			{showName}
			<button onClick={handleFavoriteButton}>
				{isAdded ? "remove from favorite" : "add to favorite"}
			</button>
		</li>
	);
}

export default connect(
	(state, { externals }) => ({
		isAdded: state.favorites.some(
			(external) =>
				external.tvrage === externals.tvrage &&
				external.thetvdb === externals.thetvdb &&
				external.imdb === externals.imdb
		),
	}),
	{ addToFavorites, removeFromFavorites }
)(HomepageListItem);
