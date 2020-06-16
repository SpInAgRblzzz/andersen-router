import React from "react";
import { connect } from "react-redux";
import addToFavorites from "../redux/addToFavorites";
import removeFromFavorites from "../redux/removeFromfavorites";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

function ListItem({ showName, id }) {
	return (
		<li>
			<Link to={`/${id}`}>{showName}</Link>
			<FavoriteButton id={id} />
		</li>
	);
}

export default connect(
	(state, { id }) => ({
		isAdded: state.favorites.some((favId) => favId === id),
	}),
	{ addToFavorites, removeFromFavorites }
)(ListItem);
