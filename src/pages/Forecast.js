import React, { useState } from "react";
import Chart from "../components/Chart";
import API from "../utils/API";

function Forecast(props) {

    const [data, setData] = useState([]);

    API.getForecast().then(response => {
        
        let object = response.data.properties.timeseries;

        let nextNineHours = [];

        var j;
        for (j=0;j<10;j++){
            nextNineHours.push({time: new Date(object[j].time).getHours()+":00", Celcius: object[j].data.instant.details.air_temperature, wind: object[j].data.instant.details.wind_speed, Humidity: object[j].data.instant.details.relative_humidity});
        }

        setData(nextNineHours);

    });

    return (
        <Chart data={data} />
    )
}

export default Forecast;