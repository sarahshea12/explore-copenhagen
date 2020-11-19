import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import CloudIcon from "@material-ui/icons/Cloud";
import MapIcon from "@material-ui/icons/LocalParking";

import "./Navbar.css";

function Nav(){
    return(
        <Grid
        className="container" 
        container 
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
        >
             
            <Grid className="grid" item xs={12}>
                <Link className="link" to="/">
                    <HomeIcon />
                </Link>

                <Link className="link" to="/map">
                    <MapIcon />
                </Link>

                <Link className="link" to="/weather">
                    <CloudIcon />
                </Link>
            </Grid>

        </Grid>    
    )
}

export default Nav;