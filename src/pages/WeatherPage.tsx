import React from "react";
import API from "../utils/API";
import PrettyDecentWeatherCard from "../components/PrettyDecentWeatherCard";
import { Container, Form, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch, RootStateOrAny} from "react-redux";
import { updateWeatherResults, updateWeatherSearch } from "../utils/actions";
import "./weatherPage.css";

function WeatherPage() {
    const search = useSelector((state: RootStateOrAny) => state.search)
    const dispatch = useDispatch();
    
    const searchCity = () => {
        API.getWeather(search)
        .then(({data}) => dispatch(updateWeatherResults(data)))
        .catch(error => console.log(error));
    };

    return (
        <Container style={{minHeight: "calc(100vh - 56px)"}}>
            <Row className="d-flex justify-content-center align-items-center text-center">
                <h1 className="text-center">Weather APP</h1>
                <div>
                    <h2>Using Weather API</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label htmlFor="cityInput">Search Your City</Form.Label>
                            <Form.Control 
                                value={search}
                                onChange={(event) => dispatch(updateWeatherSearch(event.target.value)) } 
                                id="cityInput" 
                                type="text"
                            />
                            <Button onClick={searchCity}>Search</Button>
                        </Form.Group>
                    </Form>
                    <PrettyDecentWeatherCard />
                </div>
            </Row>
        </Container>
    );
};

export default WeatherPage;