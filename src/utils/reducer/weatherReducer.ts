type SearchAction = {
    type: string,
    payload: string
};

type ResultsAction = {
    type: string,
    payload?: any,
}

interface State {
    search: string,
    results: object | null,
    error: boolean
}

interface CombinedActions {
    type: string,
    payload: string | any
}

/**
 * searchReducer()
 * Purpose: Update search state
 * Parameters:
 *      state - search string, default is empty string
 *      action - string of the city name
 * return: 
 *      state - updated searh or return current state 
 */
export const weatherReducer = (state: State = {search: "", results: null, error: false}, action: CombinedActions) => {
    switch(action.type) {
        case "UPDATE_SEARCH":
            return { ...state, search: action.payload};
        case "UPDATE_WEATHER_RESULTS":
            return { ...state, results: action.payload};
        case "UPDATE_WEATHER_ERROR":
            return {...state, error: action.payload};
        default:
            return state;
    };
}; // end weatherReducer()
