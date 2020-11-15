import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "./Home.css";

function HomeCH(){
    return (
        <Grid container spacing={3}>
            <Grid 
            container
            justify="flex-end"
            alignItems="flex-end">
                <Grid item xs={12}>
                    <br></br>
                </Grid>
                <Link className="language" to="/">EN</Link>
            </Grid>

            <Grid item xs={12}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </Grid>

            <Grid item xs={12}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </Grid>

            <Grid className="title" item xs={12}>哥本哈根</Grid>

            <Grid className="subtext" item xs={12}>查看<Link className="textLink" to="/paths">自行車道</Link>
            地圖，<Link className="textLink" to="/waste">垃圾桶</Link>分佈，<Link className="textLink" to="/library">圖書館</Link>分佈，每小時<Link className="textLink" to="/weather">天氣</Link>信息</Grid>

        </Grid>
    )
}

export default HomeCH;