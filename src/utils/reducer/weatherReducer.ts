/**
 * State interface
 * Purpose: State store
 * search - string used to search the API
 * results - object to contain search results information
 * error - boolean to tell user if successful search
 */
interface State {
    search: string,
    results: object | null,
    error: boolean
} // End State interface

/**
 * Combined Actions interface
 * Purpose: interface for the actions to be sent
 * search - string used to search the API
 * results - object to contain search results information
 * error - boolean to tell user if successful search
 */
interface CombinedActions {
    type: string,
    payload: string | any
} // End CombinedActions interface

/**
 * searchReducer()
 * Purpose: Update search state
 * Parameters:
 *      state - see interface State
 *      action - see interface Combined Actions
 * return: 
 *      state - updated object state or object state
 */
export const weatherReducer = (state: State = {search: "", results: null, error: false}, action: CombinedActions) => {
    // Check Actions
    switch(action.type) {
        // Update Search State
        case "UPDATE_SEARCH":
            return { ...state, search: action.payload};
        // update weather results
        case "UPDATE_WEATHER_RESULTS":
            return { ...state, results: action.payload};
        // updated error
        case "UPDATE_WEATHER_ERROR":
            return {...state, error: action.payload};
        // return state
        default:
            return state;
    };
}; // end weatherReducer()
