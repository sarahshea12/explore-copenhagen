import axios from "axios";

export default {

    getForecast: function(lat, lon){
        return axios({
            "method": "GET",
            "url": "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=" + lat + "&lon=" + lon
        })
    },

    getGeo: function(address){
        return axios({
            "method": "GET",
            "url": "https://eu1.locationiq.com/v1/search.php?key=" + "pk.daacd79a280a7387136127b77f8abb6d" + "&q=" + address + "&format=json"
        })
    }

}