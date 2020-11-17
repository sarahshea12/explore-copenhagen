import axios from "axios";

export default {

    getGeocode: function(address){
        var encodedLocation = encodeURIComponent(address);
        return axios({
            "method": "GET",
            "url": "https://trueway-geocoding.p.rapidapi.com/Geocode",
            "headers":{
                "x-rapidapi-host":"trueway-geocoding.p.rapidapi.com",
                "x-rapidapi-key":"a095604c14mshcf511ea4bd14f56p12d80ajsnf43076094929",
                },
            "params":{
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