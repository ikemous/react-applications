import React, { useEffect } from "react";
import { Card, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

function PrettyDecentWeatherCard() {
    const weatherResults = useSelector(state => state.weatherResults);
    useEffect(() => console.log(weatherResults), [weatherResults])

    const calculateF = (kelvin) => ((kelvin - 273.15) * 9/5 + 32).toFixed(2);

    return (
        <>
            {weatherResults?(
                <Card border="primary" style={{margin: "5px"}}>
                    <Image 
                        style={{display:"block", margin:"auto", background:"black"}} 
                        alt="icon for current weather data" 
                        src={`http://openweathermap.org/img/wn/${weatherResults.weather[0].icon}@2x.png`} 
                        roundedCircle
                    />
                    <Card.Header>{weatherResults.name}, {weatherResults.sys.country}</Card.Header>
                    <Card.Body>
                    <Card.Title>{calculateF(weatherResults.main.temp)} °F</Card.Title>
                    <Card.Text>
                        High: {calculateF(weatherResults.main.temp_max)}
                    </Card.Text>
                    <Card.Text>
                        Low: {calculateF(weatherResults.main.temp_min)}
                    </Card.Text>
                    </Card.Body>
                </Card>
            ):<></>}
        </>
    );
};

export default PrettyDecentWeatherCard;