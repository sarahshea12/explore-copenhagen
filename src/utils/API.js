import axios from "axios";

export default {

    getForecast: function(){
        return axios({
            "method": "GET",
            "url": "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=55.6761&lon=12.5683"
        })
    },

}