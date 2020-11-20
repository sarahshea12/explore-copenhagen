import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CloudIcon from "@material-ui/icons/Cloud";
import MapIcon from "@material-ui/icons/Explore";

import "./Navbar.css";

function Nav(){
    return(
        <AppBar style={{background:"#004256"}} position="fixed">
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