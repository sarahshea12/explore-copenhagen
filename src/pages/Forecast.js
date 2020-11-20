import React, { useState } from "react";
import Chart from "../components/Charts/Chart";
import API from "../utils/API";
import SearchIcon from "@material-ui/icons/Search";
import { TextField, Button } from "@material-ui/core";

function Forecast(props) {

    // props to be passed into geocode
    const [address, setAddress] = useState("");
    // props for data to be passed to Charts
    const [data, setData] = useState([]);
    // prop for when the charts should populate, only when the search button is clicked
    const [click, wasClicked] = useState(false);

    function handleInputChange(event) {
        setAddress(event.target.value);
    }

    function handleFormSubmit(event) {

        event.preventDefault();

        let lat;
        let lon;

        API.getGeo(address)
            .then(res => {
        
                // changes state to the lat/lon of the location
                let location = res.data[0].display_name;
                lat = res.data[0].lat;
                lon = res.data[0].lon;
                setAddress(location)
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
        
                // sets the prop data equal to this object
                setData(nextNineHours);
                wasClicked(true);
            });
            })

               
            
    };

    return (
        <div style={{paddingTop: 65}}>

            <div className="result">{address}</div>

            <div style={{position:"absolute", right:10}}>
                <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Address" variant="outlined" 
                value={address}
                onChange={handleInputChange}
                id="place"
                />
                <Button
                type="submit"
                size="large"
                onClick={handleFormSubmit}
                ><SearchIcon />
                </Button>
                </form> 
            </div>
            
            {click ? (
                    <Chart data={data} />
            ) : null}

        </div>
    )
}

export default Forecast;