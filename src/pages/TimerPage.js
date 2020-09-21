import React, { useState, useEffect } from "react";
import "./timerPage.css";
import { Form, Col, Container, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateMinutes, decreaseMinutes, updateSeconds, decreaseSeconds } from "../redux/actions";

function TimerPage() {
    const [error, setError] = useState(false);
    const [started, setStarted] = useState(false);
    const minutes = useSelector(state => state.minutes);
    const seconds = useSelector(state => state.seconds);
    const dispatch = useDispatch();

    useEffect(() => {
        
    }, [started]);

    const handleMinuteChange = (event) => {
        // Check if input is a number, below or equal to 100, and greater than 0
        if (!isNaN(parseInt(event.target.value)) && event.target.value >= 0) {
            // Remove Error
            setError(false);
            // Return dispatch to change count state
            return dispatch(updateMinutes(parseInt(event.target.value)));
        }
        // Set Error To True
        setError(true);
        // Change C Of 0
        dispatch(updateMinutes(0));
        //  Log Error
        console.log("%c Invalid Number:", "color:red;");
        console.log("%c Number Must Over 0", "color:orange;");
    }; // End handlechange()

    const handleSecondsChange = (event) => {
        // Check if input is a number, below or equal to 100, and greater than 0
        if (!isNaN(parseInt(event.target.value)) && event.target.value >= 0 && event.target.value <= 59) {
            // Remove Error
            setError(false);
            // Return dispatch to change count state
            return dispatch(updateSeconds(parseInt(event.target.value)));
        }
        // Set Error To True
        setError(true);
        // Change C Of 0
        dispatch(updateSeconds(0));
        //  Log Error
        console.log("%c Invalid Number:", "color:red;");
        console.log("%c Number Must Over 0", "color:orange;");
    }; // End handlechange()

    const handleMinutesClick = (event) => {
        event.preventDefault();
        if(event.target.name === "add" && minutes >= 0) return dispatch(updateMinutes(minutes + 1));
        else if(minutes > 0) return dispatch(updateMinutes(minutes - 1));
        //  Log Error
        console.log("%c Invalid Number:", "color:red;");
        console.log("%c Number Must Over 0", "color:orange;");
    };

    const handleSecondsClick = (event) => {
        event.preventDefault();
        if(event.target.name === "add" && seconds < 60) return dispatch(updateSeconds(seconds + 1));
        else if(event.target.name === "minus" && seconds > 0) return dispatch(updateSeconds(seconds - 1));
        //  Log Error
        console.log("%c Invalid Number:", "color:red;");
        console.log("%c Number Must Over 0 and under 61", "color:orange;");
    };

    return (
        <Container>
            <h1 className="text-center">Timer Application</h1>
            <Row className="d-flex justify-content-center align-items-center text-center">
                <Form>
                    <Form.Row style={{marginLeft: "0", marginRight: "0"}}>
                        <Col>                        
                            <Form.Group>
                                <Button name="add" className="minuteButton" onClick={handleMinutesClick}></Button>
                                <Form.Control value={minutes} onChange={handleMinuteChange} id="minutes" className="timer" />
                                <Button className="minuteButton" onClick={handleMinutesClick} style={{ display: "block"}}></Button>
                                <Form.Label name="minus" htmlFor="minutes">Minutes</Form.Label>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Button name="add" className="minuteButton" onClick={handleSecondsClick}></Button>
                                <Form.Control value={seconds} onChange={handleSecondsChange} id="seconds" className="timer" />
                                <Button name="minus" className="minuteButton" onClick={handleSecondsClick} style={{display: "block"}}></Button>
                                <Form.Label htmlFor="seconds">Seconds</Form.Label>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Button onClick={() => started===false?setStarted(true):setStarted(false)}>Start</Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Row>
        </Container>
    )
};

export default TimerPage;