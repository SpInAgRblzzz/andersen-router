import actionTypes from "./actionTypes";
const { ADD_TO_FAVORITES } = actionTypes;

export default function addToFavorites(id) {
	return {
		type: ADD_TO_FAVORITES,
		id,
	};
}
