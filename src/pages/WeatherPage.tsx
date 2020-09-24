import React from "react";
import API from "../utils/API";
import FindMyCityForm from "../components/FindMyCityForm";
import PrettyDecentWeatherCard from "../components/PrettyDecentWeatherCard";
import { Container, Row } from "react-bootstrap";
import { useSelector, useDispatch, RootStateOrAny} from "react-redux";
import { updateWeatherResults } from "../utils/actions";
import "./weatherPage.css";

function WeatherPage() {
    const search = useSelector((state: RootStateOrAny) => state.search)
    const dispatch = useDispatch();
    
    const searchCity = (event: any) => {
        event.preventDefault();
        API.getWeather(search)
        .then(({data}) => dispatch(updateWeatherResults(data)))
        .catch(error => console.log(error));
    };

    return (
        <Container style={{background: "#376dae", minHeight: "calc(100vh - 56px)"}} fluid>
            <Row 
                className="d-flex justify-content-center align-items-center text-center"
                style={{minHeight: "calc(100vh - 56px)"}}
            >
                <div style={{width: "100%"}}>                
                    <h1>Weather APP</h1>
                    <h2>Using Weather API</h2>
                    <FindMyCityForm searchCity={searchCity} />
                    <PrettyDecentWeatherCard />
                </div>
            </Row>
        </Container>
    );
};

export default WeatherPage;