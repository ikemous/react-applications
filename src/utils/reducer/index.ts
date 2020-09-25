import { passwordReducer } from "./passwordReducer";
import { globalStateReducer } from "./pageReducer";
import { weatherReducer } from "./weatherReducer";
import { minutesReducer, secondsReducer } from "./timerReducer";
import { counterReducer, countReducer } from "./counterReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    password: passwordReducer,
    count: countReducer,
    counter: counterReducer,
    seconds: secondsReducer,
    minutes: minutesReducer,
    global: globalStateReducer,
    weatherState: weatherReducer
});

export default allReducers;