interface HomeState {
    date?: Date
}

interface Action {
    type: string,
    payload: any
}

/**
 * homeReducer()
 * Purpose: update home page state depending on action
 * Parameters:
 *      state - see interface HomeState
 *      action - see Action
 * return: 
 *      state - updated state or current state
 */
export const homeReducer = (state: HomeState = { date: new Date() }, action:Action)=> {
    switch(action.type) {
        // Update date
        case "UPDATE_DATE":
            return {...state, date: action.payload};
        default:
            return state;
    };
}; // End homeReducer()
