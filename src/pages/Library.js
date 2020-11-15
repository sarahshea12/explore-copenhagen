import React from "react";
import TrashMap from "../components/TrashMap";
import Grid from "@material-ui/core/Grid";
import LibraryMap from "../components/LibraryMap";

function Library(){
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <LibraryMap />
            </Grid>
        </Grid>
        
    )
}

export default Library;