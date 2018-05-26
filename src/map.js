import React, { Component } from 'react'
import { compose, withProps, withState, withStateHandlers, withHandlers } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import MapStyles from './data/MapStyles'
import Places from './Places'
import { geocodeByPlaceId } from 'react-places-autocomplete'
import { getInfo } from './wikipediaApi.js'

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
                //animation={DROP}
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
                    <div>
                        <span id="title"><strong>{ marker.title }</strong></span>
                        <br/>Address:<br/>
                        <span id="address"></span>
                        <br/><br/>
                        <span id="short-article"></span>
                        <br/><br/>
                        <span id="see-link"></span>
                        <a target="blank" id="results"></a>
                        <span id="info"></span>
                    </div>
                </InfoWindow>)}
            </Marker>
        );})}
        </GoogleMap>
);})

export default Map