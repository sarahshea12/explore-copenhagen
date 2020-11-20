import React from "react";
import { Link } from "react-router-dom";
import { Grid, AppBar, Toolbar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CloudIcon from "@material-ui/icons/CloudCircle";
import MapIcon from "@material-ui/icons/Explore";

import "./Navbar.css";

function Nav(){
    return(
        <AppBar style={{background:"#0cb0c6"}} position="fixed">
            <Toolbar>
            <Link className="link" to="/">
                    <HomeIcon />
                </Link>

                <Link className="link" to="/map">
                    <MapIcon />
                </Link>

                <Link className="link" to="/weather">
                    <CloudIcon />
                </Link>
            </Toolbar>
        </AppBar>  
    )
}

export default Nav;