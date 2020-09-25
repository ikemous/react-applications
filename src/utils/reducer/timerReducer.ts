type Action = {
    type: string,
    payload: number
}

type Time = number;

interface TimerState {     
    seconds: number,
    minutes: number,
    started: boolean
}

interface TimerAction {
    type: string,
    payload: any | number
}

/**
 * timerReducer()
 * Purpose: update timerState according to the action or return original state
 * Parameters:
 *      state - see interface TimerState
 *      action - see TimerAction
 * return: 
 *      state - updated state or current state
 */
export const timerReducer = (state: TimerState = {minutes: 15, seconds: 0, started: false}, action: TimerAction) => {
    switch(action.type) {
        // Decrease seconds by payload
        case "DECREASE_SECONDS":
            return {...state, seconds: (state.seconds - action.payload)};
        // Update seconds by payload
        case "UPDATE_SECONDS":
            return {...state, seconds: action.payload};
        // Decrease minutes by payload
        case "DECREASE_MINUTES":
            return {...state, minutes: (state.minutes - action.payload)};
        // Update minutes by payload
        case "UPDATE_MINUTES":
            return {...state, minutes: action.payload};
        // update started by payload
        case "UPDATED_STARTED":
            return {...state, started: action.payload};
        // return original state
        default:
            return state;
    };
}; // End timerReducer()