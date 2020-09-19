/**
 * countReducer()
 * Purpose: Increment or decrement 
 * Parameters:
 *      state - current count state, default is 0
 *      action - object containing a type and payload
 * return: 
 *      state - count after action or current state
 */
export const countReducer = (state = 0, action) => {
    // Check action Type
    switch(action.type) {
        // Increment count state
        case 'INCREMENT':
            return state + action.payload;
        // decrement count state
        case 'DECREMENT':
            return state - action.payload;
        // no action, return current state
        default:
            return state;
    };
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
export const counterReducer = (state = 1, action) => {
    // Check Action
    switch (action.type) {
        // Update counter state
        case 'UPDATE':
            return state = action.payload;
        // No action, return state
        default:
            return state;
    };
}; // End counterReducer()
