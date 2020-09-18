import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, updateCount } from "../redux/actions";

function Counter() {
    const counter = useSelector(state => state.counter);
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        console.log(event.target.value <= Math.abs(100));
        if (!isNaN(event.target.value) && event.target.value <= 100 && event.target.value >= 100) {
            return dispatch(updateCount(event.target.value));
        }
        console.log("%c Invalid Number:", "color:red;");
        console.log("%c Number Must Be Between 0 and 100", "color:orange;");
    }
    return (
        <div className="App">
            <input type="text" onChange={handleChange} />
            <h1>Counter App</h1>
            <button onClick={() => dispatch(increment(count))}>+</button>
            <p>{counter}</p>
            <button onClick={() => dispatch(decrement(count))}>-</button>
        </div>
    );
};

export default Counter;