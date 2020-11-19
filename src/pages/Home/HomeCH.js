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

            <Grid className="subtext" item xs={12}>查看自行車道地圖，垃圾桶分佈，圖書館分佈，每小時天氣信息</Grid>

        </Grid>
    )
}

export default HomeCH;