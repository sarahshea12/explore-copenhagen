import React, { useState, useCallback } from "react";
import ReactMapGL, { Source, Layer, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import * as trashData from "./data/trash.json";
import * as libraryData from "./data/library.json";
import * as cycleData from "./data/cycle.json";
import { LocalParking } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import BookIcon from "@material-ui/icons/ImportContacts";

const MAPBOX_TOKEN = "pk.eyJ1Ijoic2FyYWhzaGVhMTIiLCJhIjoiY2toZmxuaDM4MHFvdzJwcXBxbDd0cnF0MyJ9.kkp2ulqhOdhgwysy05DlOA"

function Map(){

    //View for the map
    const [viewport, setViewport] = useState({
        width: 600,
        height: 600,
        latitude: 55.6761,
        longitude: 12.5683,
        zoom: 12
    });

    const [isToggled, setIsToggled] = useState(false);
    const toggle = useCallback(() => setIsToggled(!isToggled));

    const [selectedLib, setSelectedLib] = useState(null);
    
    console.log(libraryData.default.features[1].geometry.coordinates[1]);

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
        <button>Bike</button>
        <button>Libraries</button>
        <button onClick={toggle}>Trashcans</button>
        {isToggled ? (
            <Source type="geojson" data={trashData.default}>
            <Layer 
            id="marker"
            type="symbol"
            layout={{"icon-image": "marker-15"}}
            >
            </Layer>
        </Source> 
        ) : null}
        

        {libraryData.default.features.map((lib) => (
        <Marker
            latitude={lib.geometry.coordinates[1]}
            longitude={lib.geometry.coordinates[0]}
            offsetLeft={-20} offsetTop={-10}>
                <button 
                onClick={(e) => {
                    e.preventDefault();
                    setSelectedLib(lib);
                }}>{<BookIcon />}</button>
        </Marker> 
        ))}
        {selectedLib ? (
            <Popup 
                latitude={selectedLib.geometry.coordinates[1]}
                longitude={selectedLib.geometry.coordinates[0]}
                onClose={() => {
                    setSelectedLib(null);
                }}
                >
                <div>
                    <h3>{selectedLib.properties.navn}</h3>
                    <h3>{selectedLib.properties.adresse}</h3>
                    <h3>DK-{selectedLib.properties.post_nr}, {selectedLib.properties.postdistrikt}</h3>
                    <h3>{selectedLib.properties.link}</h3>
                </div>
            </Popup>
        ) : null}
        </ReactMapGL>
    </div>
    )
}

export default Map;