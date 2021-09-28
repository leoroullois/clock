import { combineReducers, createStore } from "redux";
import { controlsReducer } from "./Controls/reducer";
import { lengthReducer } from "./Length/reducer";
import {sessionReducer} from "./Session/reducer";

const rootReducer = combineReducers({
	controls: controlsReducer,
	length: lengthReducer,
    session: sessionReducer
});
export const store = createStore(rootReducer);
