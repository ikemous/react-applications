/**
 * Action type
 * Purpose: To State What Items are in the action
 * type: string to tell what action is to be taken
 * payload: number or boolean to update the state with 
 */
type Action = {
    type: string,
    payload: any
} //End type Action

/**
 * CounterState interface
 * Purpose: Description of State for the CounterState
 * count: number to display to use on count amount
 * counter: number to alter count with
 * error: boolean to validate user input
 */
interface CounterState {
    count: number,
    counter: number,
    error: boolean,
}; // End interface CounterState

/**
 * counterPageReducers()
 * Purpose: To Alert Count, counter or error on action type
 * Parameters:
 *      state - see interface CounterState
 *      action - see type Action
 * return: 
 *      state - Updated count/counter/error or current state
 */
export const counterPageReducer = (state: CounterState = {count: 0, counter: 1, error: false}, action: Action) => {
    // Check Action type
    switch(action.type) {
        // Increment Count By Payload
        case "INCREMENT":
            return {...state, count: (state.count + action.payload)};
        // Decrement Count By Payload
        case "DECREMENT":
            return {...state, count: (state.count - action.payload)};
        // Update Counter By Payload
        case "UPDATE":
            return {...state, counter: action.payload};
        // Update Error By Payload
        case "UPDATE_COUNTER_ERROR":
            return {...state, error: action.payload};
        // No Action return State
        default:
            return state;
    };
}; // End counterPageReducer()
