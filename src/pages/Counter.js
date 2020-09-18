import React from "react";
import { useSelector } from "react-redux";

function Counter() {
    const counter = useSelector(state => state.counter);

    return (
        <>
        </>
    );
};

export default Counter;