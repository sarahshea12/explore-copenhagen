import React, { useState } from "react";
import Chart from "../components/Charts/Chart";
import API from "../utils/API";
import { Grid, TextField } from "@material-ui/core";

function Forecast(props) {

    // props for data to be passed to Charts
    const [data, setData] = useState([]);

    // call to the weather API
    API.getForecast(55, 12).then(response => {
        
    // created an object for the response
    let object = response.data.properties.timeseries;

    // initializing an array
    let nextNineHours = [];

        // only pushing 10 items in the array; temp, humidity, cloud coverage, and rainfall from the response to pass as props to Charts
        var j;
        for (j=0;j<10;j++){
            nextNineHours.push({time: new Date(object[j].time).getHours()+":00", Celcius: object[j].data.instant.details.air_temperature, clouds: object[j].data.instant.details.cloud_area_fraction, Humidity: object[j].data.instant.details.relative_humidity, mm: object[j].data.next_1_hours.details.precipitation_amount});
        }

    setData(nextNineHours);

    });

    return (
        <Grid container>
            <Grid xs={12}><br></br></Grid>
            <Grid>
                <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Street Name" variant="outlined" />
                </form> 
            </Grid>

            <Grid>
                <Chart data={data} />
            </Grid>
        </Grid>
    )
}

export default Forecast;