import { passwordReducer } from "./passwordReducer";
import { pathReducer, dateReducer } from "./pageReducer";
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
    results: weatherResultsReducer,
    path: pathReducer,
    date: dateReducer
});

export default allReducers;