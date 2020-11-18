import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import HomeIcon from "@material-ui/icons/Home";
import BikeIcon from "@material-ui/icons/DirectionsBike";
import CloudIcon from "@material-ui/icons/Cloud";
import BookIcon from "@material-ui/icons/ImportContacts";
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

                <Link className="link" to="/waste">
                    <DeleteIcon />
                </Link>

                <Link className="link" to="/paths">
                    <BikeIcon />
                </Link>

                <Link className="link" to="/map">
                    <BookIcon />
                </Link>

                <Link className="link" to="/weather">
                    <CloudIcon />
                </Link>
            </Grid>

        </Grid>    
    )
}

export default Nav;