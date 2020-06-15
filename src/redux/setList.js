import actionTypes from "./actionTypes";
const { SET_LIST } = actionTypes;

export default function setList(newList) {
	return {
		type: SET_LIST,
		newList,
	};
}
