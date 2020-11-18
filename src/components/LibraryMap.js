import React, { useState } from "react";
import ReactMapGL, { Source, Layer, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import * as trashData from "./data/trash.json";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
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

    const dataLayer = {
        id: "data",
        type: "line"
    };
    
    console.log(trashData.default.features[1].geometry.coordinates[0][1]);

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
        <Source type="geojson" data={trashData.default}>
            <Layer 
            id="marker"
            type="symbol"
            layout={{"icon-image": "marker-15"}}
            >
            </Layer>
        </Source> 
        
        {trashData.default.features.map((can) => (
        <Marker
            latitude={can.geometry.coordinates[0][1]}
            longitude={can.geometry.coordinates[0][0]}
            offsetLeft={-20} offsetTop={-10}>
                <button>{can.properties.driftsplan_navn}</button>
        </Marker>
        ))}
        {/* <Popup
          latitude={55}
          longitude={12}
          closeButton={true}
          closeOnClick={false}
          anchor="top" >
          <div>Popup</div>
        </Popup> */}
        </ReactMapGL>
    </div>
    )
}

export default LibraryMap;