import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import FavoriteItem from "./ListItem";
import { List } from "semantic-ui-react";
import "./FavoritesPage.css";

const axios = require("axios").default;

function FavoritesPage({ favorites }) {
	const [list, setList] = useState(null);
	useEffect(() => {
		Promise.all(
			favorites.map((id) =>
				axios.get(`http://api.tvmaze.com/shows/${id}`)
			)
		).then((responses) => {
			setList(responses.map((response) => response.data));
		});
	}, []);

	return (
		<div className="favorites-page-content">
			{favorites.length === 0 ? (
				<p>no favorites added</p>
			) : list ? (
				<List divided verticalAlign="middle">
					{list.map((favItem) => (
						<FavoriteItem
							key={favItem.id}
							id={favItem.id}
							externals={favItem.externals}
							showName={favItem.name}
						/>
					))}
				</List>
			) : (
				<h1>W8</h1>
			)}
		</div>
	);
}

export default connect((state) => ({ favorites: state.favorites }))(
	FavoritesPage
);
