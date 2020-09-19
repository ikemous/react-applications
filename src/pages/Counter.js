import React from "react";
import "./counter.css";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
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
        <Container style={{minHeight: "100vh", textAlign: "center"}}>
        <h1 style={{margin: "0", padding: "20px"}}>Counter App</h1>
            <div className="d-flex justify-content-center align-items-center" style={{height:"calc(100vh - 88px)"}}>
                <div style={{width: "100%"}}>
                    <Row style={{paddingBottom: "30vh"}}>
                        <Col>
                            <button style={{padding:"15px", fontSize: "2rem"}} className="inline-item" onClick={() => dispatch(increment(count))}>+</button>
                            <input className="inline-item counter" style={counter === 0? {color: "black"}: counter > 0? {color: "green"}: {color: "red"}} value ={counter} disabled/>
                            <button style={{padding:"15px", fontSize: "2rem"}} className="inline-item" onClick={() => dispatch(decrement(count))}>-</button>
                        </Col>
                    </Row>
                    <Form onSubmit={(event) => event.preventDefault()}>
                        <Form.Row>
                            <Col 
                                sm={12}
                                md={{ span: 6, offset: 3 }}
                            >
                                <Form.Label>Enter Custom Count</Form.Label>
                                <Form.Control placeholder="Custom Count" onChange={handleChange} />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Button variant={count===1?"success":"secondary"} className="counterButton" onClick={() => dispatch(updateCount(1))}>1</Button>
                                <Button variant={count===5?"success":"secondary"} className="counterButton" onClick={() => dispatch(updateCount(5))}>5</Button>
                                <Button variant={count===10?"success":"secondary"} className="counterButton" onClick={() => dispatch(updateCount(10))}>10</Button>
                                <Button variant={count===100?"success":"secondary"} className="counterButton" onClick={() => dispatch(updateCount(100))}>100</Button>
                            </Col>
                        </Form.Row>
                    </Form>
            </div>
            </div>
        </Container>
    );
};

export default Counter;