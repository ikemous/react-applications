interface PageState {
    path?: string,
    date?: Date
}

interface Action {
    type: string,
    payload: any
}

export const globalStateReducer = (state: PageState = {path: "/", date: new Date()}, action:Action)=> {
    switch(action.type) {
        case "UPDATE_DATE":
            return {...state, date: action.payload};
        case "UPDATE_PATH":
            return {...state, path: action.payload};
        default:
            return state;
    };
};
