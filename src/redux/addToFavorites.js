import actionTypes from "./actionTypes";
const { ADD_TO_FAVORITES } = actionTypes;

export default function addToFavorites(externals) {
	return {
		type: ADD_TO_FAVORITES,
		externals,
	};
}
