import React, { useEffect } from "react";
import API from "../utils/API";
import { Container, Image, Form, Row, Button } from "react-bootstrap";
import { updateSearch, updateWeatherResults } from "../redux/actions"
import { useSelector, useDispatch } from "react-redux";
import "./weatherPage.css";

function WeatherPage() {

    const search = useSelector(state => state.search);
    const weatherResults = useSelector(state => state.weatherResults);
    const dispatch = useDispatch();

    useEffect(() => {
        
    }, []);

    const searchCity = () => {
        API.getWeather(search)
        .then(({data}) => dispatch(updateWeatherResults(data)))
        .catch(error => console.log(error));
    };

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
                            <Form.Control 
                                value={search}
                                onChange={(event) => dispatch(updateSearch(event.target.value)) } 
                                id="cityInput" 
                                type="text"
                            />
                            <Button onClick={searchCity}>Search</Button>
                        </Form.Group>
                    </Form>
                </div>
            </Row>
        </Container>
    );
};

export default WeatherPage;