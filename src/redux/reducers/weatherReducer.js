export const cityReducer = (state, action) => {
    switch(action.type) {
        case "UPDATE_CITY":
            return state = action.payload
        default:
            return state;
    };
};

export const weatherResultsReducer = (state = [], action) => {
    switch(action.type) {
        case "UPDATE_WEATHER_RESULTS":
            return state = action.payload;
        default:
            return state;
    };
};