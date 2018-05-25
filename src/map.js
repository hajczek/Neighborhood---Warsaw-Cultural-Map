import React, { Component } from 'react'
import { compose, withProps, withStateHandlers } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import MapStyles from './data/MapStyles'
import Places from './Places'
// import Icon from './icons/icon.png'

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
        >{ props.isMarkerShown && props.markers.map((marker, i) => {
            let icon = {
                url: './icons/' + marker.type + '.png'
            }
            return ( 
            <Marker
                {...marker}
                key={i}
                position={marker.location}
                title={marker.title}
                icon={'http://www.serwisstron.pl/icons/' + marker.type + '.png'}
                onClick={() => {
                    props.toggleLocationsActive(i);
                  }}
                //animation={DROP}
                >
                {i === props.activeKey && (
                <InfoWindow onCloseClick={props.onToggleOpen}>
                    <div>{ marker.title }</div>
                </InfoWindow>)}
            </Marker>
        );})}
        </GoogleMap>
);})

export default Map