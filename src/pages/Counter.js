import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, updateCount } from "../redux/actions";

function Counter() {
    const counter = useSelector(state => state.counter);
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (!isNaN(event.target.value) && event.target.value <= 100 && event.target.value >= 0) {
            return dispatch(updateCount(parseInt(event.target.value)));
        }
        console.log("%c Invalid Number:", "color:red;");
        console.log("%c Number Must Be Between 0 and 100", "color:orange;");
    }
    return (
        <div className="App">
            <h1>Counter App</h1>
            <button onClick={() => dispatch(increment(count))}>+</button>
            <p>{counter}</p>
            <button onClick={() => dispatch(decrement(count))}>-</button>
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Control placeholder="First name" onChange={handleChange} />
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Button onClick={() => dispatch(updateCount(1))}>1</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => dispatch(updateCount(5))}>5</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => dispatch(updateCount(10))}>10</Button>
                    </Col>
                    <Col>
                        <Button  onClick={() => dispatch(updateCount(100))}>100</Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    );
};

export default Counter;