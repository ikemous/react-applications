import React from "react";
import "./timerPage.css";
import { Form, Col, Container, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, updateCounter } from "../redux/actions";

function TimerPage() {


    return (
        <Container>
            <h1 className="text-center">Timer Application</h1>
            <Row className="d-flex justify-content-center align-items-center text-center">
                <Form>
                    <Form.Row style={{marginLeft: "0", marginRight: "0"}}>
                        <Col>                        
                            <Form.Group>
                                <Form.Control placeholder="00" htmlFor="minutes" className="timer" />
                                <Form.Label id="minutes">Minutes</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Control placeholder="00" htmlFor="seconds" className="timer"/>
                                <Form.Label id="seconds">Seconds</Form.Label>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Button>Start</Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Row>
        </Container>
    )
};

export default TimerPage;