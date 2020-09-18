export const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
};

export const countReducer = (state = 1, action) => {
    switch (action.type) {
        case 'UPDATE':
            return state = action.payload;
        default:
            return state;
    }
};
