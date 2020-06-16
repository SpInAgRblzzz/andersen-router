import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import addToFavorites from "../redux/addToFavorites";
import removeFromfavorites from "../redux/removeFromfavorites";
import FavoriteItem from "./FavoriteItem";

const axios = require("axios").default;

function FavoritesPage({ favorites, addToFavorites, removeFromfavorites }) {
	const [list, setList] = useState(null);
	useEffect(() => {
		//Promise.all(favorites.map(({tvrage, thetvdb, imdb})=>axios.get())
		//itog
		//`http://api.tvmaze.com/lookup/shows?${tvrage?`tvrage=${tvrage}`: thetvdb?`thetvdb=${thetvdb}`:`imdb=${imdb}`}`
		Promise.all(
			favorites.map(({ tvrage, thetvdb, imdb }) =>
				axios.get(
					`http://api.tvmaze.com/lookup/shows?${
						tvrage
							? `tvrage=${tvrage}`
							: thetvdb
							? `thetvdb=${thetvdb}`
							: `imdb=${imdb}`
					}`
				)
			)
		).then((responses) => {
			console.log(responses);
			setList(responses.map((response) => response.data));
		});
	}, []);

	return favorites.length === 0 ? (
		<p>no favorites added</p>
	) : list ? (
		<ul>
			{list.map((favItem) => (
				<FavoriteItem name={favItem.name} />
			))}
		</ul>
	) : (
		<h1>W8</h1>
	);
}

export default connect((state) => ({ favorites: state.favorites }), {
	addToFavorites,
	removeFromfavorites,
})(FavoritesPage);
