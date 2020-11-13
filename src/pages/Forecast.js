import React, { useState } from "react";
import API from "../utils/API";

function Forecast(props) {
    API.getForecast().then(response => {
        console.log(response.data);
    });
    return (
        <div>
            
        </div>
    )
}

export default Forecast;