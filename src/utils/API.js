import axios from "axios";

export default {

    getForecast: function(){
        return axios({
            "method": "GET",
            "url": "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=55.6761&lon=12.5683"
        })
    },

    getWeather: function(){
        return axios({
            "method": "GET",
            "url": "https://api.openweathermap.org/data/2.5/onecall?lat=55.6761&lon=12.5683&exclude=minutely&appid=032b8a094b69214ac66a358522135a00"
        })
    }

}