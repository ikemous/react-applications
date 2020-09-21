import { WEATHER_API } from "../hidden";
import axios from "axios";

export default {
    getWeather(search) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${WEATHER_API}`)
    },
};
