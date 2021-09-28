import { INCREMENT, DECREMENT } from "./type";
const defaultState = {
	breakDuration: 5*60,
	sessionDuration: 25*60,
	inBreak:false,
};
export const lengthReducer = (state = defaultState, action) => {
	switch (action.type) {
		case INCREMENT:
			return action.name === "break"
				? state.breakDuration === 60*60
					? { ...state, breakDuration: 60*60 }
					: { ...state, breakDuration: state.breakDuration + 60 }
				: state.sessionDuration === 60*60
				? { ...state, sessionDuration: 60*60 }
				: { ...state, sessionDuration: state.sessionDuration + 60 };
		case DECREMENT:
			return action.name === "break"
				? state.breakDuration === 60
					? { ...state, breakDuration: 60 }
					: { ...state, breakDuration: state.breakDuration - 60 }
				: state.sessionDuration === 60
				? { ...state, sessionDuration: 60 }
				: { ...state, sessionDuration: state.sessionDuration - 60 };
		default:
			return state;
	}
};
