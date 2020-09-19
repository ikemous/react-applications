import { counterReducer, countReducer } from "./counterReducer";
import { minutesReducer, secondsReducer } from "./timerReducer";
import { combineReducers } from "redux";

// Put All Reducers Into One Object
const allReducers = combineReducers({
    counter: counterReducer,
    count: countReducer,
    minutes: minutesReducer,
    seconds: secondsReducer
});

export default allReducers;