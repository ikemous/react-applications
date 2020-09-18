import { counterReducer, countReducer } from "./counterReducer";
import { combineReducers } from "redux";


const allReducers = combineReducers({
    counter: counterReducer,
    count: countReducer
});

export default allReducers;