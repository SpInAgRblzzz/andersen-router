import React, { useState } from "react";
import { connect } from "react-redux";
import removeFromFavorites from "../redux/removeFromfavorites";
import addToFavorites from "../redux/addToFavorites";

function FavoriteButton({
	id,
	favorites,
	addToFavorites,
	removeFromFavorites,
}) {
	const [isAdded, toggleIsAdded] = useState(
		favorites.some((item) => item === +id)
	);

	function handleFavoriteButton() {
		if (isAdded) {
			removeFromFavorites(id);
		} else {
			addToFavorites(id);
		}
		toggleIsAdded(!isAdded);
	}

	return (
		<button onClick={handleFavoriteButton}>
			{isAdded ? "remove from favorite" : "add to favorite"}
		</button>
	);
}

export default connect((state) => ({ favorites: state.favorites }), {
	addToFavorites,
	removeFromFavorites,
})(FavoriteButton);
