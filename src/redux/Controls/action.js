import { PAUSE, PLAY, RESET } from "./type"

export const pauseAction = () => {
    return {
        type: PAUSE
    }
}
export const playAction = () => {
    return {
        type: PLAY
    }
} 
export const resetAction = () => {
    return {
        type: RESET
    }
}