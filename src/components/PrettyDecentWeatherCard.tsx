import React, { useEffect } from "react";
import { Card, Image } from "react-bootstrap";
import { useSelector, RootStateOrAny } from "react-redux";
import "./prettyDecentWeatherCard.css";

function PrettyDecentWeatherCard() {

    const { results } = useSelector((state: RootStateOrAny) => state.weatherState);

    useEffect(() => console.log(results), [results]);

    const calculateF = (kelvin: string): string => {
        const convertToInt = parseInt(kelvin);
        return ((convertToInt - 273.15) * 9/5 + 32).toFixed();
    };

    return (
        <>
            {results?(
                <>
                    <Card className="weatherIcon">
                        <Image 
                            style={{display:"block", margin:"auto", background:"black"}} 
                            alt="icon for current weather data" 
                            src={`http://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`} 
                            roundedCircle
                        />
                        <Card.ImgOverlay>
                            <Card.Title>{results.weather[0].main}</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <Card border="primary" className="weatherInfoCard" style={{margin: "5px"}}>
                        <Card.Header>{results.name}, {results.sys.country}</Card.Header>
                        <Card.Body>
                            <Card.Title>{calculateF(results.main.temp)} °F</Card.Title>
                            <Card.Text className="text-left">
                                High: {calculateF(results.main.temp_min)} °F
                            </Card.Text>
                            <Card.Text className="text-left">
                                Low: {calculateF(results.main.temp_max)} °F
                            </Card.Text>
                            <Card.Text className="text-left">
                                Wind Speed: {results.wind.speed} mph
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </>
            ):<></>}
        </>
    );
};

export default PrettyDecentWeatherCard;