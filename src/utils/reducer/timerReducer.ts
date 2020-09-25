/**
 * TimerState interface
 * Purpose: State store timer information
 * seconds - number to hold seconds
 * minutes - number to hold minutes
 * started - boolean to tell if the timer has started
 */
interface TimerState {     
    seconds: number,
    minutes: number,
    started: boolean
} // End interface TimerState

/**
 * TimerAction interface
 * Purpose: Interface to store action information
 * type: string to tell what action is happening
 * payload: number or boolean to updated the state with
 */
interface TimerAction {
    type: string,
    payload: any | number
} // End interface TimerAction

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
    // Check Actions
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