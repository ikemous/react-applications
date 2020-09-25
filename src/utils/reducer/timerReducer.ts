type Action = {
    type: string,
    payload: number
}

type Time = number;

interface TimerState {     
    seconds: number,
    minutes: number
}

interface TimerAction {
    type: string,
    payload: number
}

export const timerReducer = (state: TimerState = {minutes: 15, seconds: 0}, action: TimerAction) => {
    switch(action.type) {
        case "DECREASE_SECONDS":
            return {...state, seconds: (state.seconds - action.payload)};
        case "UPDATE_SECONDS":
            return {...state, seconds: action.payload};
        case "DECREASE_MINUTES":
            return {...state, minutes: (state.minutes - 1)};
        case "UPDATE_MINUTES":
            return {...state, minutes: action.payload};
        default:
            return state;
    };
}; // End timerReducer()

/**
 * secondsReducer()
 * Purpose: Update seconds to be stored
 * Parameters:
 *      state - seconds, default is 1
 *      action - object containing a type and payload
 * return: 
 *      state - updated seconds or return current state 
 */
export const secondsReducer = (state: Time = 0, action: Action) => {
    // Check Action
    switch(action.type)
    {
        // Update seconds state
        case "DECREASE_SECONDS":
            return state -= action.payload;
        // Update seconds state
        case "UPDATE_SECONDS":
            return state = action.payload;
        // No action, return state
        default:
            return state;
    };
}; // End secondsReducer()

/**
 * minutesReducer()
 * Purpose: Update minutes to be stored
 * Parameters:
 *      state - minutes, default is 15
 *      action - object containing a type and payload
 * return: 
 *      state - updated minutes or return current state 
 */
export const minutesReducer = (state: Time = 15, action: Action) => {
    switch(action.type) {
        // Update seconds state
        case "DECREASE_MINUTES":
            return state -= action.payload;
        // Update seconds state
        case "UPDATE_MINUTES":
            return state = action.payload;
        default:
            return state;
    };
}; // End minutesReducer()