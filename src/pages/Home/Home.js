import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(){
    return (
        <div style={{paddingTop: 56}}>

            <Grid 
            container
            justify="flex-end"
            alignItems="flex-end">
                <Link className="language" to="/ch">中文</Link>
            </Grid>

            <Grid item xs={12}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </Grid>

            <Grid item xs={12}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </Grid>
            <Grid className="title" item xs={12}>København</Grid>
            <Grid className="subtext" item xs={12}><Link className="textLink" to="/map">Discover</Link> locations of waste baskets, local libraries，and hourly <Link className="textLink" to="/weather">weather</Link> data</Grid>
        </div>
    )
}

export default Home;