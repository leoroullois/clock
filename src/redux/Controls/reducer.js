import { PAUSE, PLAY, RESET } from "./type";

const initialState = {
	playing: false,
};
export const controlsReducer = (state = initialState, action) => {
	switch (action.type) {
		case PLAY:
			return {
				...state,
                playing:true,
            };
		case PAUSE:
			return {
				...state,
                playing:false,
            };
		case RESET:
			return {
				...state,
                playing: false,
            };
		default:
			return state;
	}
};
