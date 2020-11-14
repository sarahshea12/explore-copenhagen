import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import HomeIcon from "@material-ui/icons/Home";
import BikeIcon from "@material-ui/icons/DirectionsBike";
import CloudIcon from "@material-ui/icons/Cloud";
import CSS from "./Navbar.css";

function Nav(){
    return(
        <Grid container spacing={3}>
             
            <Grid className="grid" item xs={3}>
                <Link className="link" to="/">
                    <HomeIcon />
                </Link>
            </Grid>
        
            <Grid item xs={3}>
                <Link className="link" to="/waste">
                    <DeleteIcon />
                </Link>
            </Grid>
        
            <Grid item xs={3}>
                <Link className="link" to="paths">
                    <BikeIcon />
                </Link>
            </Grid>

            <Grid item xs={3}>
                <Link className="link" to="/">
                    <CloudIcon />
                </Link>
            </Grid>

        </Grid>    
    )
}

export default Nav;