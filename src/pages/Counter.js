import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions";

function Counter() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>Counter App</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <p>{counter}</p>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};

export default Counter;