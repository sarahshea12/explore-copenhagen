import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, Legend, CartesianGrid, YAxis, XAxis, Tooltip } from "recharts";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./Chart.css";

function Chart(props){

    // Inherited data from Forecast page
    let data = props.data;

    // Setting states of the text elements on the page so they may be translated
    const [tempText, setTempText] = useState("Hourly Temperature");
    const [humidityText, setHumidityText] = useState("Hourly Humidity");
    const [rainfallText, setRainfallText] = useState("Precipitation");
    const [cloudText, setCloudText] = useState("% Cloud Coverage");

    return(
    // <Grid container
    // direction="row"
    // justify="space-around"
    // alignItems="stretch"
    // >
    //     <Grid container
    //     direction="row"
    //     justify="flex-end"
    //     alignItems="flex-start">
    <div>
            <Button className="toggle" onClick={() => { setTempText("Hourly Temperature"); setHumidityText("Hourly Humidity"); setRainfallText("Precipitation"); setCloudText("% Cloud Coverage") }}>EN</Button>
            <Button classname="toggle" onClick={() => { setTempText("溫度"); setHumidityText("濕度"); setRainfallText("降雨量"); setCloudText("雲量") }}>中文</Button>
         
        <div>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <div style={{flexDirection:"column"}}>
        <p>{tempText}</p>
            <LineChart width={600} height={300} data={data} margin={{ top: 40, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="Celcius" stroke="#0ba4e0" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time" stroke="#8884d8" />
            <YAxis />
            <Legend width={100} wrapperStyle={{ bottom: 95, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            <Tooltip />
            </LineChart>
            </div>
            
    

            <div style={{flexDirection:"column"}}>
        <p>{humidityText}</p>
            <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="time" stroke="#8884d8" />
            <YAxis />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="Humidity" fill="#b500b5" barSize={30} />
            <Tooltip />
            </BarChart>
            </div>
        </div>

        <div style={{display:"flex", justifyContent:"space-around"}}>
            <div style={{flexDirection:"column"}}>
        <p>{cloudText}</p>
            <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="time" stroke="#8884d8" />
            <YAxis />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="clouds" fill="#690069" barSize={30} />
            <Tooltip />
            </BarChart>
            </div>

            <div style={{flexDirection:"column"}}>
        <p>{rainfallText}</p>
            <LineChart width={600} height={300} data={data} margin={{ top: 40, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="mm" stroke="#0ba4e0" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time" stroke="#8884d8" />
            <YAxis />
            <Legend width={100} wrapperStyle={{ bottom: 95, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
            <Tooltip />
            </LineChart>
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Chart;