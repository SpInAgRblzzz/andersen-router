import actionTypes from "./actionTypes";
const { SET_LIST } = actionTypes;

function reducer(state = { list: [] }, action) {
	switch (action.type) {
		case SET_LIST:
			return Object.assign({}, state, { list: action.newList });

		default:
			return state;
	}
}

export default reducer;
