import React, { useState } from "react";
import API from "../utils/API";
import { Button } from "@material-ui/core";

function CovidData(props) {
    API.getCovidData().then(response =>{
        console.log(response.data.response[16])
    });
    return (
        <div>
            <h1>Covid</h1>
            <Button color="primary">Button</Button>
        </div>
    )
}

export default CovidData;