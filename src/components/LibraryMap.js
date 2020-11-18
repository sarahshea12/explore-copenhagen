import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import * as trashData from "./data/trash.json";
import { LocalParking } from "@material-ui/icons";

const MAPBOX_TOKEN = "pk.eyJ1Ijoic2FyYWhzaGVhMTIiLCJhIjoiY2toZmxuaDM4MHFvdzJwcXBxbDd0cnF0MyJ9.kkp2ulqhOdhgwysy05DlOA"

function LibraryMap(){

    //View for the map
    const [viewport, setViewport] = useState({
        width: 600,
        height: 600,
        latitude: 55.6761,
        longitude: 12.5683,
        zoom: 12
    });

    //console.log(trashData);
    console.log(trashData.default.features[1].properties.driftsplan_navn);

    return (
    <div>
        <ReactMapGL 
        {...viewport}
        width="100vw"
        height="100vh"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/sarahshea12/ckhilnhdj0j8019noz4pvtd33"
        onViewportChange = {nextViewport => setViewport(nextViewport)}
        >
        {trashData.default.features.map(can => {
            <Marker key={can.id}
            latitude={can.geometry.coordinates[0][1]}
            longitude={can.geometry.coordinates[0][0]}>
                <div>Trash{can.properties.driftsplan_navn}</div>
                <button>TRASHCAN</button>
            </Marker>
        })}
        </ReactMapGL>
    </div>
    )
}

export default LibraryMap;