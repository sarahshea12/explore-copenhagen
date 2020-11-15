import React from "react";
import BikeMap from "../components/BikeMap";
import Grid from "@material-ui/core/Grid";

function Paths(){
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <BikeMap />
            </Grid>
        </Grid>
        
    )
}

export default Paths;