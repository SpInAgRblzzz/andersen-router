import actionTypes from "./actionTypes";
const { SET_LIST } = actionTypes;

export default function setList(newlist) {
	return {
		type: SET_LIST,
		newlist,
	};
}
