import { WEATHER_API } from "../hidden";
import axios from "axios";

export default {
    /**
     * getWeather()
     * Purpose: Use axios to grab weather information from API
     * Parameters:
     *      search - City of area to be searched
     * return: 
     *      axios call - 
     */
    getWeather(search) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${WEATHER_API}`)
    }, // End getWeather() 
};
