import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <AppBar>
            <Tabs>
                {/* <Tab href="/explore-copenhagen" label="Home"/>
                <Tab href="/paths" label="Bicycle Paths"/>
                <Tab href="/waste" label="Waste Basket Location"/>
                <Tab href="/weather" label="Weather Forecast"/> */}
                <Link to="/">Home</Link>
                <Link to="/waste">Trash map</Link>
                <Link to="paths">Bikes</Link>
            </Tabs>
        </AppBar>
    )
}

export default Nav;