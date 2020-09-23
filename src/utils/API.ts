import axios from "axios";

export default {
    getWeather(search: string){
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=16da2c71dd8c2c76dfce15f0f75a5dea`)
    },
}