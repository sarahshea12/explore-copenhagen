import React from 'react';
import { LineChart, Line, BarChart, Bar, Legend, CartesianGrid, YAxis, XAxis, } from "recharts";
import Grid from "@material-ui/core/Grid";

function Chart(props){

    let data = props.data;

    return(
    <Grid container
    direction="row"
    justify="space-around"
    alignItems="flex-end"
    >
        <Grid item xs={12}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </Grid>

        <Grid item xs={6}>
            <LineChart width={600} height={300} data={data} margin={{ top: 40, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="Celcius" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time" />
            <YAxis />
            <Legend width={100} wrapperStyle={{ bottom: 95, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            </LineChart>
        </Grid>

        <Grid item xs={6}>
            <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="time" stroke="#8884d8" />
            <YAxis />
            <Legend width={100} wrapperStyle={{ bottom: 90, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="Humidity" fill="#8884d8" barSize={30} />
            </BarChart>
        </Grid>
        
    </Grid>
    )
}

export default Chart;