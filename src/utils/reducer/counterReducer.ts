// Type for Action variables in reducer 
// functions
type Action = {
    type: string,
    payload: number
}

interface CounterState {
    count: number,
    counter: number,
    error: boolean,
};

// Type for counter variables
type Counter = number;

// Starting values
const startingCount = 0;
const startingCounter = 1;

export const counterPageReducer = (state: CounterState = {count: 0, counter: 1, error: false}, action: Action) => {
    switch(action.type) {
        case "INCREMENT":
            return {...state, count: (state.count + action.payload)};
        case "DECREMENT":
            return {...state, count: (state.count - action.payload)};
        case "UPDATE":
            return {...state, counter: action.payload}
        case "UPDATE_COUNTER_ERROR":
            return {...state, error: action.payload};
        default:
            return state;
    };
};

/**
 * countReducer()
 * Purpose: Increment or decrement 
 * Parameters:
 *      state - current count state, default is 0
 *      action - object containing a type and payload
 * return: 
 *      state - count after action or current state
 */
export const countReducer = (state: Counter = startingCount, action: Action) => {
    // Check action Type
    switch (action.type) {
        // Increment count state
        case "INCREMENT":
            return state + action.payload
        // decrement count state
        case "DECREMENT":
            return state - action.payload
        // no action, return current state
        default:
            return state;
    }
}; // End countReducer()

/**
 * counterReducer()
 * Purpose: Update counter for count increment/decrement
 * Parameters:
 *      state - counter for increment/decrement, default is 1
 *      action - object containing a type and payload
 * return: 
 *      state - updated counter or return current state 
 */
export const counterReducer = (state: Counter = startingCounter, action: Action) => {
    // Check Action
    switch (action.type) {
        // Update counter state
        case "UPDATE":
            return state = action.payload;
            // No action, return state
        default:
            return state;
    }
}; // End counterReducer()