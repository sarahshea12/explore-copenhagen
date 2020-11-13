import React, { useState } from "react";
import API from "../utils/API";

function Forecast(props) {
    API.getForecast().then(response => {
        console.log(response.data);
    });
    return (
        <div>
            <h1>Forecast</h1>
        </div>
    )
}

export default Forecast;