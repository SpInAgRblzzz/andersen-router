import React from "react";
import { connect } from "react-redux";
import addToFavorites from "../redux/addToFavorites";
import removeFromFavorites from "../redux/removeFromfavorites";

function HomepageListItem({
	id,
	showName,
	isAdded,
	addToFavorites,
	removeFromFavorites,
}) {
	function handleFavoriteButton() {
		if (isAdded) {
			removeFromFavorites(id);
		} else {
			addToFavorites(id);
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
	(state, { id }) => ({
		isAdded: state.favorites.some((favId) => favId === id),
	}),
	{ addToFavorites, removeFromFavorites }
)(HomepageListItem);
