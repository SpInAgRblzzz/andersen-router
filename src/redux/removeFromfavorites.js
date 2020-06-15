import actionTypes from "./actionTypes";
const { REMOVE_FROM_FAVORITES } = actionTypes;

export default function removeFromFavorites(externals) {
	return {
		type: REMOVE_FROM_FAVORITES,
		externals,
	};
}
