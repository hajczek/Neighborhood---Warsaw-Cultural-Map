import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {

    render(){
        const markers = this.props.markers || []

        return (
            <GoogleMap
                defaultZoom={13}
                defaultCenter={{ lat: 52.229676, lng: 21.012229 }}>
                {markers.map((marker, index) => (
                        <Marker {...marker} />
                    )
                )}
            </GoogleMap>
        )
    }
}

export default withGoogleMap(Map)
