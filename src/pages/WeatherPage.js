import React, { useEffect } from "react";
import { Container, Image, Form, Row, Button } from "react-bootstrap";
import "./weatherPage.css";

function WeatherPage() {

    useEffect(() => {

    }, []);

    return( 
        <Container>
            <h1>Weather APP</h1>
            <Row className="d-flex justify-content-center align-items-center text-center">
                <Image style={{display:"block"}} alt="cloud to indicate weather" src="https://via.placeholder.com/150" roundedCircle  />
                <h2>Using Weather API</h2>
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor="cityInput">Search Your City</Form.Label>
                        <Form.Control id="cityInput" type="text" />
                        <Button>Search</Button>
                    </Form.Group>
                </Form>
            </Row>
        </Container>
    );
};

export default WeatherPage;