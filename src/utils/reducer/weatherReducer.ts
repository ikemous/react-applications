type SearchAction = {
    type: string,
    payload: string
};

type ResultsAction = {
    type: string,
    payload?: any,
}

type SearchState = string;
type ResultsState = any;

/**
 * searchReducer()
 * Purpose: Update search state
 * Parameters:
 *      state - search string, default is empty string
 *      action - string of the city name
 * return: 
 *      state - updated searh or return current state 
 */
export const weatherSearchReducer = (state:SearchState = "" , action:SearchAction) => {
    // Check action
    switch(action.type) {
        // Update Search
        case "UPDATE_SEARCH":
            return state = action.payload
        // Return Current state
        default:
            return state;
    };
}; // End searchReducer()


/**
 * weatherResultsReducer()
 * Purpose: Update results from the weather search
 * Parameters:
 *      state - object for weather results, default is empty {}
 *      action - object containing a type and payload
 * return: 
 *      state - updated weatherResults or return current state 
 */
export const weatherResultsReducer = (state:ResultsState = null, action:ResultsAction) => {
    // Check Action
    switch(action.type) {
        // Update Results
        case "UPDATE_WEATHER_RESULTS":
            return state = action.payload;
        // Return Current State
        default:
            return state;
    };
}; // End weatherResultsReducer()