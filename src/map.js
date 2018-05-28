import React, { Component } from 'react'
import { compose, withState, withStateHandlers } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import MapStyles from './data/MapStyles'
import Places from './Places'
import { geocodeByPlaceId } from 'react-places-autocomplete'
import { getInfo } from './wikipediaApi.js'

const google = window.google

export const Map = compose(
    withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap,
  withState('places', 'updatePlaces', ''),
  withState('selectedPlace', 'updateSelectedPlace', null), 
)(props => {

  return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: 52.229676, lng: 21.012229 }}
            defaultOptions={{ styles: MapStyles }}
            mapTypeControl={false}
        >{ props.isMarkerShown && props.markers.map((marker, i) => {
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
                // defaultAnimation={google.maps.Animation.DROP}
                >
                {i === props.activeKey && (
                    getInfo(marker.title),
                    geocodeByPlaceId(marker.place_id)
                        .then(results => {
                            const address = results[0].formatted_address;
                            document.getElementById('address').innerHTML  += address;
                            console.log(results);
                          })
                        .catch(error => console.error(error)),
                        
                <InfoWindow onCloseClick={props.onToggleOpen}>
                    <div id="info-window">
                        <span id="title">{ marker.title }</span>
                        <br/><br/>
                        <span id="address-title">Address:</span>
                        <br/>
                        <span id="address"></span>
                        <br/><br/>
                        <span id="short-article"></span>
                        <a target="blank" id="results"></a><br/>
                        <span id="info"></span>
                    </div>
                </InfoWindow>)}
            </Marker>
        );})}
        </GoogleMap>
);})

export default Map