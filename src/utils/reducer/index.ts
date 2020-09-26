import { passwordReducer } from "./passwordReducer";
import { homeReducer } from "./pageReducer";
import { weatherReducer } from "./weatherReducer";
import { timerReducer } from "./timerReducer";
import { counterPageReducer } from "./counterReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    password: passwordReducer,
    global: homeReducer,
    weatherState: weatherReducer,
    timerState: timerReducer,
    counterState: counterPageReducer,
    
});

export default allReducers;