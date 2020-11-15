import axios from "axios";

export default {

    getCovidData: function(){
        return axios({
        "method": "GET",
        "url": "https://covid-193.p.rapidapi.com/statistics",
        "headers": {
        "x-rapidapi-key": "a095604c14mshcf511ea4bd14f56p12d80ajsnf43076094929",
        "x-rapidapi-host": "covid-193.p.rapidapi.com"
        }
        })
    },

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