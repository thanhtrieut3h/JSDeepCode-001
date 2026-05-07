import axios from "axios";

async function getWeatherByCity(cityName){
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric`;
    try{
        const res = await axios.get(api);
        const data = res.status === 200 ? res.data : null;
        return data;
    } catch(err){
        console.log(err)
    }
}

export const apiWeather = {
    getWeatherByCity
}