import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, YAxis, XAxis } from "recharts";
import API from "../utils/API";



function Chart(props){

    //const data = [{name: props.data.time}]

    console.log("data");
    let data = props.data;
    //console.log(props.data);

    return(
    <LineChart width={600} height={300} data={data} margin={{ top: 40, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="temp" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="time" />
    <YAxis />
    </LineChart>
    )
}

export default Chart;