import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <AppBar>
            <Link to="/">Home</Link>
            <Link to="/waste">Trash map</Link>
            <Link to="paths">Bikes</Link>
        </AppBar>
           
    )
}

export default Nav;