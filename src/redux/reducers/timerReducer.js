/**
 * secondsReducer()
 * Purpose: Update seconds to be stored
 * Parameters:
 *      state - seconds, default is 1
 *      action - object containing a type and payload
 * return: 
 *      state - updated seconds or return current state 
 */
export const secondsReducer = (state = 0, action) => {
    // Check Action
    switch (action.type) {
        // Update seconds state
        case 'UPDATE':
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
 *      state - minutes, default is 1
 *      action - object containing a type and payload
 * return: 
 *      state - updated minutes or return current state 
 */
export const minutesReducer = (state = 15, action) => {
    // Check Action
    switch (action.type) {
        // Update counter state
        case 'UPDATE':
            return state = action.payload;
        // No action, return state
        default:
            return state;
    };
}; // End minutesReducer()
