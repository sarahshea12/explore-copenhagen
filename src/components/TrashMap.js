import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = "pk.eyJ1Ijoic2FyYWhzaGVhMTIiLCJhIjoiY2toZmxuaDM4MHFvdzJwcXBxbDd0cnF0MyJ9.kkp2ulqhOdhgwysy05DlOA"

function TrashMap(){
    const [viewport, setViewport] = useState({
        width: 600,
        height: 600,
        latitude: 55.6761,
        longitude: 12.5683,
        zoom: 12
    })

    return (
        <ReactMapGL 
        {...viewport}
        width="100vw"
        height="100vh"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/sarahshea12/ckhfk1inz09t019n961j3qsab"
        onViewportChange = {nextViewport => setViewport(nextViewport)}
        />
    )
}

export default TrashMap;