import { INCREMENT, DECREMENT } from "./type";
const defaultState = {
	breakDuration: 5,
	sessionDuration: 25,
	inBreak:false,
	breakMinutes:5,
	breakSeconds:0,
	sessionMinutes:25,
	sessionSeconds:0,
	timers:[],
};
export const lengthReducer = (state = defaultState, action) => {
	switch (action.type) {
		case INCREMENT:
			return action.name === "break"
				? state.breakDuration === 60
					? { ...state, breakDuration: 60 }
					: { ...state, breakDuration: state.breakDuration + 1 }
				: state.sessionDuration === 60
				? { ...state, sessionDuration: 60 }
				: { ...state, sessionDuration: state.sessionDuration + 1 };
		case DECREMENT:
			return action.name === "break"
				? state.breakDuration === 1
					? { ...state, breakDuration: 1 }
					: { ...state, breakDuration: state.breakDuration - 1 }
				: state.sessionDuration === 1
				? { ...state, sessionDuration: 1 }
				: { ...state, sessionDuration: state.sessionDuration - 1 };
		default:
			return state;
	}
};
