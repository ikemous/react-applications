interface PageState {
    date?: Date
}

interface Action {
    type: string,
    payload: any
}

export const globalStateReducer = (state: PageState = { date: new Date() }, action:Action)=> {
    switch(action.type) {
        case "UPDATE_DATE":
            return {...state, date: action.payload};
        default:
            return state;
    };
};
