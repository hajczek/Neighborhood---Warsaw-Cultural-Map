import React, { Component } from 'react'
import { compose, withProps, withStateHandlers } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import MapStyles from './data/MapStyles'

export const Map = compose(
    withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props => {
        return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: 52.229676, lng: 21.012229 }}
            defaultOptions={{ styles: MapStyles }}
            mapTypeControl={false}
        >{ props.markers.map(marker => {
            console.log(marker.location);
            <Marker
                {...marker}
                key={marker.place_id}
                position={marker.location}
                title={marker.title}
                icon={{
                    url: 'icons/icon.png'
                  }}
                onClick={props.onToggleOpen}
                >
                {props.isOpen && 
                <InfoWindow onCloseClick={props.onToggleOpen}>
                    <div>Open</div>
                </InfoWindow>}
            </Marker>
        })}
        </GoogleMap>
        
);})

export default Map