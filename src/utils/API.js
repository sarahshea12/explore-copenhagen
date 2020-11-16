import axios from "axios";

export default {

    getGeocode: function(address){
        var encodedLocation = encodeURIComponent(address);
        return axios({
            "method": "GET",
            "url": "https://trueway-geocoding.p.rapidapi.com/Geocode",
            "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"trueway-geocoding.p.rapidapi.com",
                "x-rapidapi-key":process.env.REACT_APP_GEO_API_KEY,
                "useQueryString":true
                },"params":{
                "country":"DK",
                "address": encodedLocation
                }
        })
    },

    getForecast: function(lat, lon){
        return axios({
            "method": "GET",
            "url": "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=" + lat + "&lon=" + lon
        })
    },

}