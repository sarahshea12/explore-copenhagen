import React, { useState } from "react";
import Chart from "../components/Chart";
import API from "../utils/API";

function Forecast(props) {
    const [data, setData] = useState([]);

    API.getForecast().then(response => {
        console.log("API response");
        
        let object = response.data.properties.timeseries;
        let nextTenDays = []
        var j;
        for (j=0;j<10;j++){
            nextTenDays.push({time: new Date(object[j].time).getHours()+":00", temp: object[j].data.instant.details.air_temperature});
        }
        setData(nextTenDays);
    });

    return (
        <Chart data={data} />
    )
}

export default Forecast;