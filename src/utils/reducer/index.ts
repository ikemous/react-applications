import { passwordReducer } from "./passwordReducer";
import { homeReducer } from "./pageReducer";
import { weatherReducer } from "./weatherReducer";
import { timerReducer } from "./timerReducer";
import { counterReducer, countReducer } from "./counterReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    password: passwordReducer,
    count: countReducer,
    counter: counterReducer,
    global: homeReducer,
    weatherState: weatherReducer,
    timerState: timerReducer
});

export default allReducers;