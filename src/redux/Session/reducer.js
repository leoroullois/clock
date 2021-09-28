import { UPDATE } from "./type";
const initialState = {
	running: false,
	seconds:1500,
	timers:[],
};
export const sessionReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE:
			return {
				...state
			}
		default:
			return state;
	}
};
