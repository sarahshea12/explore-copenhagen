import React from "react";
import Map from "../components/Map";
import Grid from "@material-ui/core/Grid";

function Paths(){
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Map />
            </Grid>
        </Grid>
        
    )
}

export default Paths;