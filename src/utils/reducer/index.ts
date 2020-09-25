import { passwordReducer } from "./passwordReducer";
import { globalStateReducer } from "./pageReducer";
import { weatherReducer } from "./weatherReducer";
import { timerReducer } from "./timerReducer";
import { counterReducer, countReducer } from "./counterReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    password: passwordReducer,
    count: countReducer,
    counter: counterReducer,
    global: globalStateReducer,
    weatherState: weatherReducer,
    timerState: timerReducer
});

export default allReducers;