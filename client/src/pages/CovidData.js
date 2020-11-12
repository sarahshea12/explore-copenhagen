import React, {useState} from "react";
import API from "../utils/API";

function CovidData(props) {
    API.getCovidData().then(response =>{
        console.log(response.data.response[16])
    });
    return (
    <div>
        <h1>hello</h1>
    </div>
    )
}

export default CovidData;