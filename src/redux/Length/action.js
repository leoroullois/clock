import { INCREMENT, DECREMENT } from "./type";
export const incrementAction = (name,session) => {
	return {
		type: INCREMENT,
		name: name,
		session:session,
	};
};
export const decrementAction = (name,session) => {
	return {
		type: DECREMENT,
		name: name,
		session:session
	};
};
