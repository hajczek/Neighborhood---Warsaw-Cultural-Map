import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {

    render(){
        const markers = this.props.markers || []

        return (
            <GoogleMap
                defaultZoom={13}
                defaultCenter={this.props.center}>
                {markers.map((marker, index) => (
                        <Marker {...marker} />
                    )
                )}
            </GoogleMap>
        )
    }
}

export default withGoogleMap(Map)
