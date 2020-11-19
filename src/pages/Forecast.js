import React, { useState } from "react";
import Chart from "../components/Charts/Chart";
import API from "../utils/API";
import SearchIcon from "@material-ui/icons/Search";
import { Grid, TextField, Button } from "@material-ui/core";

function Forecast(props) {

    // props to be passed into geocode
    const [address, setAddress] = useState("");
    // props for data to be passed to Charts
    const [data, setData] = useState([]);

    function handleInputChange(event) {
        setAddress(event.target.value);
        console.log(address);
        
    }

    function handleFormSubmit(event) {

        event.preventDefault();

        let lat;
        let lon;

        API.getGeo(address)
            .then(res => {
                console.log(res.data[0]);
                // changes state to the lat/lon of the location
                let location = res.data[0].display_name;
                lat = res.data[0].lat;
                lon = res.data[0].lon;
                setAddress(location)
                console.log(location)
                console.log(lat+" "+lon);
            })
            .then(results => {

                 // call to the weather API
                 API.getForecast(lat, lon).then(response => {
        
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
                console.log(data)
            });
            })

               
            
    };

    return (
        <div style={{paddingTop: 65}}>
            <div style={{float: "center"}}>
                <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Address" variant="outlined" 
                value={address}
                onChange={handleInputChange}
                id="place"
                />
                <Button
                type="submit"
                onClick={handleFormSubmit}
                ><SearchIcon /></Button>
                </form> 
            </div>

            <div>
                <Chart data={data} />
            </div>
        </div>
    )
}

export default Forecast;