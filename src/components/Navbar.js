import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";

function Nav(){
    return(
        <AppBar>
            <Tabs>
                <Tab href="/explore-copenhagen" label="Home"/>
                <Tab href="/paths" label="Bicycle Paths"/>
                <Tab href="/waste" label="Waste Basket Location"/>
                <Tab href="/weather" label="Weather Forecast"/>
            </Tabs>
        </AppBar>
    )
}

export default Nav;