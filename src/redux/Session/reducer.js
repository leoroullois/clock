import { UPDATE } from "./type";
const initialState = {
	running: false,
	inBreak:false,
	breakMinutes:5,
	breakSeconds:0,
	sessionMinutes:25,
	sessionSeconds:0,
	timers:[],
};
export const sessionReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE:
			// Si on est en session
			if (!state.inBreak) {
				// Si le timer arrive à 0
				if (state.sessionMinutes===0 && state.sessionSeconds===0) {
					return {
						...state,
						inBreak:true,
						sessionMinutes:action.sessionDuration,
					}
				} else { // Sinon décrémenter normal
					return {
						...state,
						sessionSeconds: (state.sessionSeconds===0) ? 59 : state.sessionSeconds-1,
						sessionMinutes: state.sessionMinutes-1,
					}
				}
			} else { // Si on est en pause
				// Si le timer arrive à 0
				if (state.breakMinutes===0 && state.breakSeconds===0) {
					return {
						...state,
						inBreak:false,
						breakMinutes:action.breakDuration,
					}
				} else { // Sinon décrémenter normal
					return {
						...state,
						breakSeconds: (state.breakSeconds===0) ? 59 : state.breakSeconds-1,
						breakMinutes: state.breakMinutes-1,
					}
				}
			}

		default:
			return state;
	}
};
