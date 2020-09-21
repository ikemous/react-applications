import React, { useEffect } from "react";
import { Container, Image, Form, Row, Button } from "react-bootstrap";
import { updateCity, updateWeatherResults } from "../redux/actions"
import { useSelector, useDispatch } from "react-redux";
import "./weatherPage.css";

function WeatherPage() {
    const city = useSelector(state => state.city);
    const weatherResults = useSelector(state => state.weatherResults);
    const dispatch = useDispatch();
    useEffect(() => {

    }, []);

    return( 
        <Container>
            <h1 className="text-center">Weather APP</h1>
            <Row className="d-flex justify-content-center align-items-center text-center">
                <div>
                    <Image style={{display:"block", margin:"auto"}} alt="cloud to indicate weather" src="https://via.placeholder.com/150" roundedCircle  />
                    <h2>Using Weather API</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label htmlFor="cityInput">Search Your City</Form.Label>
                            <Form.Control id="cityInput" type="text" />
                            <Button>Search</Button>
                        </Form.Group>
                    </Form>
                </div>
            </Row>
        </Container>
    );
};

export default WeatherPage;