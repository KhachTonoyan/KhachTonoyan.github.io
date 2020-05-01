import React from "react";
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps";
import { Container } from "@material-ui/core";

function Map({loc}) {

        return(
            <Container>
                   < GoogleMap
                        defaultZoom={12}
                        defaultCenter={{lat:loc.lat,lng:loc.lon}}
                   />
            </Container>
        )
}


export default withScriptjs(withGoogleMap(Map))