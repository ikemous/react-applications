interface PageState {
    path?: string,
    date?: Date
}

interface DateAction {
    type: string,
    payload: Date
}

interface PageAction {
    type: string,
    payload: string
}

export const dateReducer = (state: PageState = {path: "/", date: new Date()}, action:DateAction)=> {
    switch(action.type) {
        case "UPDATE_DATE":
            return {...state, date: action.payload};
        default:
            return state;
    };
};

export const pathReducer = (state: PageState = {path: "/", date: new Date()}, action:PageAction) => {
    switch(action.type) {
        case "UPDATE PATH":
            return {...state, path: action.payload};
        default:
            return state
    };
};
