import {UPDATE} from "./type"

export const sessionAction = (sessionDuration, breakDuration) => {
    return {
        type:UPDATE,
        sessionDuration:sessionDuration,
        breakDuration:breakDuration,
    }
}