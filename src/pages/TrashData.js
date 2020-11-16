import React from "react";
import TrashMap from "../components/TrashMap";
import Grid from "@material-ui/core/Grid";

function TrashData(){
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TrashMap />
            </Grid>
        </Grid>
    )
}

export default TrashData;