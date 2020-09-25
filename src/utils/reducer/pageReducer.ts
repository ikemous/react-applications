/**
 * HomeState interface
 * Purpose: Description of State for the home page
 * date: optional date for the home page to display
 */
interface HomeState {
    date?: Date
} // End interface HomeState

/**
 * Action interface
 * Purpose: Description of actions to be send in 
 * type: string of what action is occuring
 * payload: value that action is to be updated with
 */
interface Action {
    type: string,
    payload: any
} // End interface Action

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
    // Check Actions
    switch(action.type) {
        // Update date
        case "UPDATE_DATE":
            return {...state, date: action.payload};
        // return current state
        default:
            return state;
    };
}; // End homeReducer()
