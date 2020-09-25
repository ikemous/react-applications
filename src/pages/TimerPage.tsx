import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Form, Col, Container, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { 
    updateMinutes, 
    updateSeconds,
    updateStarted,
    decreaseSeconds, 
    decreaseMinutes 
} from "../utils/actions";
import "./timerPage.css";   

function TimerPage() {

    const { minutes, seconds, started } = useSelector((state: RootStateOrAny) => state.timerState);
    const dispatch = useDispatch();

    /**
     * useEffect()
     * Purpose: React useHook to allow the timer to start/stop
     * Parameters:
     *      NONE
     * Dependencies:
     *      started - Timer Started(true or false)
     *      minutes - Amount of minutes starting with
     *      seconds - Amount of seconds startiing with
     *      dispatch - hook from react-redux to allow state change
     * return: 
     *      () - function used to clear the interval
    */
    useEffect(() => {
        // initialize interval variable
        let interval:any = null;
        // Check if timer is started and if there is still time left
        if(started && minutes >= 0)  {
            // Start Interval
            interval = setInterval(() => {
                // Check if there are still seconds and reduce if true
                if(seconds > 0) dispatch(decreaseSeconds());
                else if(seconds === 0 && minutes === 0) {
                    dispatch(updateStarted(false));
                }
                else {
                    // Reduce Minutes by 1 and reset seconds to 59
                    dispatch(decreaseMinutes());
                    dispatch(updateSeconds(59));
                }
            }, 1000); //End Interval
        }
        //Clear Interval
        return () => clearInterval(interval);
    }, [started, minutes, seconds, dispatch]); // End useEffect()


    /**
     * handleMinuteChange()
     * Purpose: Update the minutes state if valid input
     * Parameters:
     *      event - event of change
     * return: 
     *      dispatch - used to change the state of minutes
     */ 
    const handleMinuteChange = (event:any) => {
        // Check if input is a number, below or equal to 100, and greater than 0
        if (!isNaN(parseInt(event.target.value)) && event.target.value >= 0) {
            // Remove Error
            // setError(false);
            // Return dispatch to change count state
            return dispatch(updateMinutes(parseInt(event.target.value)));
        }
        // Set Error To True
        // setError(true);
        // Change C Of 0
        dispatch(updateMinutes(0));
        //  Log Error
        console.log("%c Invalid Number:", "color:red;");
        console.log("%c Number Must Over 0", "color:orange;");
    }; // End handleMinuteChange()

    /**
     * handleSecondsChange()
     * Purpose: Update the seconds state if valid input
     * Parameters:
     *      event - event of change
     * return: 
     *      dispatch - used to change the state of seconds
    */
    const handleSecondsChange = (event: any) => {
        // Check if input is a number, below or equal to 100, and greater than 0
        if (!isNaN(parseInt(event.target.value)) && event.target.value >= 0 && event.target.value <= 59) {
            // Remove Error
            // setError(false);
            // Return dispatch to change count state
            return dispatch(updateSeconds(parseInt(event.target.value)));
        }
        // Set Error To True
        // setError(true);
        // Change C Of 0
        dispatch(updateSeconds(0));
        //  Log Error
        console.log("%c Invalid Number:", "color:red;");
        console.log("%c Number Must Over 0", "color:orange;");
    }; // End handleSecondsChange()

    /**
     * handleMinutesChange()
     * Purpose: Update the minutes state depending on click
     * Parameters:
     *      event - event of change
     * return: 
     *      dispatch - used to change the state of minutes
    */
    const handleMinutesClick = (event:any) => {
        //Prevent page refresh default
        event.preventDefault();
        // Check if the Add button was clicked and add a minutes
        if(event.target.name === "add" && minutes >= 0) return dispatch(updateMinutes(minutes + 1));
        // Check if decrement would go below 0, if not decrease minute
        else if(minutes > 0) return dispatch(decreaseMinutes());
        //  Log Error
        console.log("%c Invalid Number:", "color:red;");
        console.log("%c Number Must Over 0", "color:orange;");
    }; // End handleMinutesClick()

    /**
     * handleSecondsChange()
     * Purpose: Update the seconds state depending on click
     * Parameters:
     *      event - event of change
     * return: 
     *      dispatch - used to change the state of seconds
    */
    const handleSecondsClick = (event:any) => {
        // Prevent Page refresh
        event.preventDefault();
        //Check if button clicked is add and seconds is less than 60, if so add
        if(event.target.name === "add" && seconds < 59  ) return dispatch(updateSeconds(seconds + 1));
        // Check if seconds is > 0, if is then minus 
        else if(event.target.name === "minus" && seconds > 0) return dispatch(decreaseSeconds());
        //  Log Error
        console.log("%c Invalid Number:", "color:red;");
        console.log("%c Number Must Over 0 and under 61", "color:orange;");
    }; // End handleSecondsClick()

    return (
        <>
            <Helmet>
                <title>Reactications - Timer</title>
                <meta
                    name="description"
                    content="Page to Allow user Set a time and start a countdown timer"
                />
            </Helmet>
            <Container style={{background: "#376dae", minHeight: "calc(100vh - 56px)"}} fluid>
            <Row className="d-flex justify-content-center align-items-center text-center" style={{minHeight: "calc(100vh - 56px)"}}>
                <div>
                    <h1 className="text-center">Timer Application</h1>
                    <Form>
                        <Form.Row style={{marginLeft: "0", marginRight: "0"}}>
                            <Col xs={6}>
                                <Form.Group>
                                    <Button 
                                        name="add" 
                                        className="quickButton" 
                                        variant="success"
                                        onClick={handleMinutesClick}
                                        disabled={started?true:false}
                                    >
                                        <i className="fas fa-arrow-up arrows"></i>
                                    </Button>
                                    <Form.Control 
                                        value={minutes} 
                                        onChange={handleMinuteChange} 
                                        id="minutes" 
                                        className="timer" 
                                        style={(started && minutes === 0 && seconds >= 30)? {background:"#FFCC00 "}:(started && minutes === 0 && seconds <= 29)?{background:"red"}:{}}
                                        disabled={started?true:false}    
                                    />
                                    <Button 
                                        name="minus"
                                        className="quickButton" 
                                        variant="danger"
                                        onClick={handleMinutesClick}
                                        disabled={started?true:false}
                                    >
                                        <i className="fas fa-arrow-down arrows"></i>
                                    </Button>
                                    <Form.Label htmlFor="minutes">Minutes</Form.Label>
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group>
                                    <Button 
                                        name="add" 
                                        className="quickButton"
                                        variant="success"
                                        onClick={handleSecondsClick}
                                        disabled={started?true:false}
                                    >
                                        <i className="fas fa-arrow-up arrows"></i>
                                    </Button>
                                    <Form.Control 
                                        value={seconds} 
                                        onChange={handleSecondsChange} 
                                        id="seconds" 
                                        className="timer"
                                        style={(started && minutes === 0 && seconds >= 30)? {background:"#FFCC00"}:(started && minutes === 0 && seconds <= 29)?{background:"red"}:{}}
                                        disabled={started?true:false}
                                    />
                                    <Button 
                                        name="minus" 
                                        className="quickButton"
                                        variant="danger"
                                        onClick={handleSecondsClick}
                                        disabled={started?true:false}
                                    >
                                        <i className="fas fa-arrow-down arrows"></i>
                                    </Button>
                                    <Form.Label htmlFor="seconds">Seconds</Form.Label>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group style={{width: "100%", marginLeft: "0", marginRight: "0"}}>
                                <Button 
                                    style={{width: "75%"}}
                                    variant={started?"danger":"success"}
                                        onClick={
                                            () => started?dispatch(updateStarted(false)):dispatch(updateStarted(true))
                                        }
                                >
                                    {started?"STOP":"START"}
                                </Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </div>

            </Row>
        </Container>
        </>
    );
};

export default TimerPage;