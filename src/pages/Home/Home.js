import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(){
    return (
        <Grid container spacing={3}>

            <Grid 
            container
            justify="flex-end"
            alignItems="flex-end">
                <Grid item xs={12}>
                    <br></br>
                </Grid>
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
            <Grid className="subtext" item xs={12}>random text about the use of the website</Grid>
            
        </Grid>
    )
}

export default Home;