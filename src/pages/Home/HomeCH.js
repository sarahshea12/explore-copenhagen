import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "./Home.css";

function HomeCH() {
    return (
        <div style={{paddingTop: 68}}>
    
            <Link className="language" to="/">EN</Link>

            <div className="title">哥本哈根</div>

            <div className="subtext">查看自行車道地圖，垃圾桶分佈，圖書館分佈，每小時天氣信息</div>

        </div>
    )
}

export default HomeCH;