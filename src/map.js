import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {

    render(){
        const markers = this.props.markers.map((venue, i) => {
            const marker = {
                position: {
                    lat: venue.location.lat,
                    lng: venue.location.lng
                }
            }
            return <Marker key={i} {...marker} />
        })

        return (
            <GoogleMap
                defaultZoom={this.props.zoom}
                defaultCenter={this.props.center}>
                {markers.map((marker, index) => (
                        <Marker {...marker} />
                    )
                )}
                { markers }
            </GoogleMap>
        )
    }
}

export default withGoogleMap(Map)
