import actionTypes from "./actionTypes";
const { SET_LIST, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } = actionTypes;

function reducer(state = { list: [], favorites: [] }, action) {
	switch (action.type) {
		case SET_LIST:
			return Object.assign({}, state, { list: action.newList });

		case ADD_TO_FAVORITES:
			console.log("externals sent to action", action.externals);
			state.favorites.push(action.externals);
			return Object.assign({}, state);

		case REMOVE_FROM_FAVORITES:
			const { tvrage, thetvdb, imdb } = action.externals;
			return Object.assign({}, state, {
				favorites: state.favorites.filter(
					(item) =>
						item.tvrage !== tvrage &&
						item.thetvdb !== thetvdb &&
						item.imdb !== imdb
				),
			});

		default:
			return state;
	}
}

export default reducer;
