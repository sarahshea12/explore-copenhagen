import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(){
    return (
        <div style={{paddingTop: 68}}>

            <Link className="language" to="/ch">中文</Link>

            <div className="title">København</div>

            <div className="subtext"><Link className="textLink" to="/map">Discover</Link> locations of bicycle paths, waste bins, local libraries，and hourly <Link className="textLink" to="/weather">weather</Link></div>
            
        </div>
    )
}

export default Home;