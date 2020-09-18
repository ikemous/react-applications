import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions";

function Counter() {
    const counter = useSelector(state => state.counter);
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Counter App</h1>
            <button onClick={() => dispatch(increment(count))}>+</button>
            <p>{counter}</p>
            <button onClick={() => dispatch(decrement(count))}>-</button>
        </div>
    );
};

export default Counter;