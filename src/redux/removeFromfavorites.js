import actionTypes from "./actionTypes";
const { REMOVE_FROM_FAVORITES } = actionTypes;

export default function removeFromFavorites(id) {
	return {
		type: REMOVE_FROM_FAVORITES,
		id,
	};
}
