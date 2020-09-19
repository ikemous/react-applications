import React from "react";
import { Form, Col, Container } from "react-bootstrap";

class TimerPage extends React.Component {
    render() {
        return (
            <Container fluid>
                <h1>Timer Application</h1>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Control htmlFor="minutes" />
                            <Form.Label id="minutes">Minutes</Form.Label>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control htmlFor="seconds" />
                            <Form.Label id="seconds">Seconds</Form.Label>
                        </Form.Group>
                    </Form.Row>

                </Form>
            </Container>
        )
    };
};

export default TimerPage;