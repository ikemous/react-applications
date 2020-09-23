import { passwordReducer } from "./passwordReducer";
import { weatherResultsReducer, weatherSearchReducer } from "./weatherReducer";
import { minutesReducer, secondsReducer } from "./timerReducer";
import { counterReducer, countReducer } from "./counterReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    password: passwordReducer,
    count: countReducer,
    counter: counterReducer,
    seconds: secondsReducer,
    minutes: minutesReducer,
    search: weatherSearchReducer,
    results: weatherResultsReducer
});

export default allReducers;