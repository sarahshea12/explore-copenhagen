import React, { useState, useCallback } from "react";
import ReactMapGL, { Source, Layer, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";
import * as trashData from "../data/trash.json";
import * as libraryData from "../data/library.json";
import * as cycleData from "../data/cycle.json";
import { Button } from "@material-ui/core"
import { DirectionsBike, Delete, LocalLibrary } from "@material-ui/icons";

const MAPBOX_TOKEN = "pk.eyJ1Ijoic2FyYWhzaGVhMTIiLCJhIjoiY2toZmxuaDM4MHFvdzJwcXBxbDd0cnF0MyJ9.kkp2ulqhOdhgwysy05DlOA"

function Map(){

    // view for the map
    const [viewport, setViewport] = useState({
        width: 600,
        height: 600,
        latitude: 55.6761,
        longitude: 12.5683,
        zoom: 12
    });

    // method for displaying the trashcan layer on the map when clicked
    const [trashIsToggled, setTrashIsToggled] = useState(false);
    const trashToggle = useCallback(() => setTrashIsToggled(!trashIsToggled));

    // method from displaying the cycling data
    const [bikeIsToggled, setBikeIsToggled] = useState(false);
    const bikeToggle = useCallback(() => setBikeIsToggled(!bikeIsToggled));

    // method from displaying the library data
    const [libIsToggled, setLibIsToggled] = useState(false);
    const libToggle = useCallback(() => setLibIsToggled(!libIsToggled));

    // state of the library that is clicked on to return the corresponding popup
    const [selectedLib, setSelectedLib] = useState(null);

    return (
    <div className="map" style={{paddingTop: 68}}>
        <ReactMapGL 
        {...viewport}
        width="98vw"
        height="92vh"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/sarahshea12/ckhilnhdj0j8019noz4pvtd33"
        onViewportChange = {nextViewport => setViewport(nextViewport)}
        >
        
        <button className="mapButton" onClick={trashToggle}><Delete /></button>
        {trashIsToggled ? (
            <Source type="geojson" data={trashData.default}>
                <Layer 
                    id="circle"
                    type="circle"
                    paint={{
                        "circle-radius": 3,
                        "circle-color": "#6f6f6f"
                    }}>
                </Layer>
            </Source> 
        ) : null}
        
        <button className="mapButton" onClick={libToggle}><LocalLibrary /></button>
        {libIsToggled ? (
        libraryData.default.features.map((lib) => (
        <Marker
            latitude={lib.geometry.coordinates[1]}
            longitude={lib.geometry.coordinates[0]}
            offsetLeft={-20} offsetTop={-10}>
                <Button 
                onClick={(e) => {
                    e.preventDefault();
                    setSelectedLib(lib);
                    }}>{<LocalLibrary />}
                </Button>
        </Marker> 
        ))
        ) : null}

        {selectedLib ? (
            <Popup 
                latitude={selectedLib.geometry.coordinates[1]}
                longitude={selectedLib.geometry.coordinates[0]}
                onClose={() => {
                    setSelectedLib(null);
                }}
                >
                <div>
                    <h4>{selectedLib.properties.navn}</h4>
                    <h4>{selectedLib.properties.adresse}</h4>
                    <h4>DK-{selectedLib.properties.post_nr}, {selectedLib.properties.postdistrikt}</h4>
                </div>
            </Popup>
        ) : null}

        <button className="mapButton" onClick={bikeToggle}><DirectionsBike /></button>
        {bikeIsToggled ? (
            <Source type="geojson" data={cycleData.default}>
                <Layer 
                    id="line"
                    type="line"
                    layout= {{
                        "line-cap": "round",
                        "line-join": "round",
                    }}
                    paint= {{
                        "line-color": "#e6d15e",
                        "line-width": 3
                    }}>
                </Layer>
            </Source> 
        ) : null}
        
        </ReactMapGL>
    </div>
    )
}

export default Map;