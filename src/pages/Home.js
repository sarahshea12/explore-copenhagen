import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Home.css";

function Home(){
    return (
        <Grid container spacing={3}>
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
        </Grid>
    )
}

export default Home;