import React from "react";
import { connect } from "react-redux";
import addToFavorites from "../redux/addToFavorites";
import removeFromFavorites from "../redux/removeFromfavorites";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import { List } from "semantic-ui-react";

function ListItem({ showName, id }) {
	return (
		<List.Item>
			<List.Content>
				<Link to={`/${id}`}>{showName}</Link>
			</List.Content>
			<List.Content floated="right">
				<FavoriteButton id={id} />
			</List.Content>
		</List.Item>
	);
}

export default connect(
	(state, { id }) => ({
		isAdded: state.favorites.some((favId) => favId === id),
	}),
	{ addToFavorites, removeFromFavorites }
)(ListItem);
