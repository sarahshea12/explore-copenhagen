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
        nextNineHours.push({time: new Date(object[j].time).getHours()+":00", Celcius: object[j].data.instant.details.air_temperature, clouds: object[j].data.instant.details.cloud_area_fraction, Humidity: object[j].data.instant.details.relative_humidity, mm: object[j].data.next_1_hours.details.precipitation_amount});
        }

    setData(nextNineHours);

    });

    return (
        <Chart data={data} />
    )
}

export default Forecast;