import React from "react";
import API from "../utils/API";
import FindMyCityForm from "../components/FindMyCityForm";
import PrettyDecentWeatherCard from "../components/PrettyDecentWeatherCard";
import { Helmet } from "react-helmet";
import { Container, Row } from "react-bootstrap";
import { useSelector, useDispatch, RootStateOrAny} from "react-redux";
import { updateWeatherResults, updateWeatherError } from "../utils/actions";
import "./weatherPage.css";

function WeatherPage() {

    const { search } = useSelector((state: RootStateOrAny) => state.weatherState);

    const dispatch = useDispatch();
    
    /**
     * searchCity()
     * Purpose: Use the API to search for weather results
     * Parameters:
     *      event - event of action
     * return: 
     *      none
    */
    const searchCity = (event: any) => {
        // Prevent Page refresh
        event.preventDefault();
        // Search Weather
        API.getWeather(search)
        .then(({data}) => {
            dispatch(updateWeatherResults(data));
            dispatch(updateWeatherError(false));
        })
        .catch(() => dispatch(updateWeatherError(false)));
    }; // End searchCity()

    return (
        <>
            <Helmet>
                <title>Reactications - Weather</title>
                <meta
                    name="description"
                    content="Page to Allow user to be able to search for a city and show the current weather"
                />
            </Helmet>
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
        </>
    );
};

export default WeatherPage;