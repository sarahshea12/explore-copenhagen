import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "./Home.css";

function HomeCH(){
    return (
        <div style={{paddingTop: 56}}>
            
            <div>
                <Link className="language" to="/">EN</Link>
            </div>

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

        </div>
    )
}

export default HomeCH;