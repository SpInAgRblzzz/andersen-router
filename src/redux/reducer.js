import actionTypes from "./actionTypes";
const { SET_LIST, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } = actionTypes;

function reducer(state = { list: [], favorites: [] }, action) {
	switch (action.type) {
		case SET_LIST:
			return Object.assign({}, state, { list: action.newList });

		case ADD_TO_FAVORITES:
			state.favorites.push(action.id);
			return Object.assign({}, state);

		case REMOVE_FROM_FAVORITES:
			return Object.assign({}, state, {
				favorites: state.favorites.filter(
					(favId) => favId !== action.id
				),
			});

		default:
			return state;
	}
}

export default reducer;
