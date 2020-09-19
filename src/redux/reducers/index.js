import { counterReducer, countReducer } from "./counterReducer";
import { combineReducers } from "redux";

// Put All Reducers Into One Object
const allReducers = combineReducers({
    counter: counterReducer,
    count: countReducer
});

export default allReducers;