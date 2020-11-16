import axios from "axios";

export default {

    getForecast: function(lat, lon){
        return axios({
            "method": "GET",
            "url": "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=" + lat + "&lon=" + lon
        })
    },
    
}