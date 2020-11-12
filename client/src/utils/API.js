import axios from "axios";

export default {

    getCovidData: function(){
        return axios({
        "method": "GET",
        "url": 'https://covid-193.p.rapidapi.com/statistics',
        "headers": {
        'x-rapidapi-key': 'a095604c14mshcf511ea4bd14f56p12d80ajsnf43076094929',
        'x-rapidapi-host': 'covid-193.p.rapidapi.com'
        }
        })
    }

}