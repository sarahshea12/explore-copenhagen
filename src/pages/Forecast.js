import React, { useState } from "react";
import Chart from "../components/Chart";
import API from "../utils/API";

function Forecast(props) {
    API.getForecast().then(response => {
        console.log(response.data);
    });
    return (
        <Chart />
    )
}

export default Forecast;