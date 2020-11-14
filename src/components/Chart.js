import React from 'react';
import { LineChart, Line, CartesianGrid, YAxis, XAxis } from "recharts";
import API from "../utils/API";

const data = [{name: "a", uv: 243, pv: 2404}]

function Chart(props){
    return(
    <LineChart width={600} height={300} data={data} margin={{ top: 40, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
    )
}

export default Chart;