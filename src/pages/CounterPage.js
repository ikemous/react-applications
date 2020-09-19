import React, { useState } from "react";
import "./counter.css";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, updateCounter } from "../redux/actions";

function CounterPage() {
    // Retrieve Global States
    const counter = useSelector(state => state.counter);
    const count = useSelector(state => state.count);
    // Error for future checking
    const [error, setError] = useState(false);
    // dispatch for future state change
    const dispatch = useDispatch();

    /**
     * handleChange()
     * Purpose: 
     *      handle change of input bar for counter state
     * Paramters:
     *      event - event of the change
     * return:
     *      dispatch to update count state or setError
     */
    const handleChange = (event) => {
        // Check if input is a number, below or equal to 100, and greater than 0
        if (!isNaN(parseInt(event.target.value)) && event.target.value <= 100 && event.target.value >= 0) {
            // Remove Error
            setError(false);
            // Return dispatch to change count state
            return dispatch(updateCounter(parseInt(event.target.value)));
        }
        // Set Error To True
        setError(true);
        // Change Count Back To Default Of 1
        dispatch(updateCounter(1));
        //  Log Error
        console.log("%c Invalid Number:", "color:red;");
        console.log("%c Number Must Be Between 0 and 100", "color:orange;");
    }; // End handlechange()

    return (
        <Container style={{minHeight: "calc(100vh - 56px)", textAlign: "center", background: "skyblue"}} fluid>
        <h1 style={{margin: "0", padding: "20px"}}>Counter App</h1>
            <div className="d-flex justify-content-center align-items-center">
                <div style={{width: "100%"}}>
                    <Row style={{paddingBottom: "20vh"}}>
                        <Col>
                            <Button variant="success" style={{padding:"15px", fontSize: "2rem"}} className="inline-item" onClick={() => dispatch(increment(counter))}>+</Button>
                            <input aria-label="counter" className="inline-item counter" style={count === 0? {color: "black"}: count > 0? {color: "green"}: {color: "red"}} value ={count} disabled/>
                            <Button variant="danger" style={{padding:"15px", fontSize: "2rem"}} className="inline-item" onClick={() => dispatch(decrement(counter))}>-</Button>
                        </Col>
                    </Row>
                    <Form onSubmit={(event) => event.preventDefault()}>
                        <Form.Row>
                            <Col 
                                sm={12}
                                md={{ span: 6, offset: 3 }}
                            >  
                                <Form.Group>
                                    <Form.Label htmlFor="count">Enter Custom Count Or Use Quick Change Buttons</Form.Label>
                                    <Form.Control id="count" isInvalid={error} placeholder="Custom Count" onChange={handleChange} />
                                    <Form.Control.Feedback type="invalid">
                                        Number Must Be Between 0 And 100
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Button variant={counter===1?"success":"secondary"} className="counterButton" onClick={() => dispatch(updateCounter(1))}>1</Button>
                                <Button variant={counter===5?"success":"secondary"} className="counterButton" onClick={() => dispatch(updateCounter(5))}>5</Button>
                                <Button variant={counter===10?"success":"secondary"} className="counterButton" onClick={() => dispatch(updateCounter(10))}>10</Button>
                                <Button variant={counter===100?"success":"secondary"} className="counterButton" onClick={() => dispatch(updateCounter(100))}>100</Button>
                            </Col>
                        </Form.Row>
                    </Form>
            </div>
            </div>
        </Container>
    );
};

export default CounterPage;