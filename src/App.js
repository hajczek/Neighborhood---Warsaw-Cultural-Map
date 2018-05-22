import React, { Component } from 'react';
import Map from './Map.js';
import './App.css';
import Places from './Places.js'
// import superagent from 'superagent'
import Theatres from './data/theatres.json'
import Cinemas from './data/cinemas.json'
import Museums from './data/museums.json'
import Galeries from './data/galeries.json'

let markers = [];
let markers_theatres = [];
let markers_cinemas = [];
let markers_museums = [];
let markers_galeries = [];

class App extends Component {
  constructor(){
    super()
      this.state = {
        markers: [],
        markers_theatres: [],
        markers_cinemas: [],
        markers_museums: [],
        markers_gakeries: [], 
      }
  }

   componentWillMount(){

    let theatres = Theatres;
    let cinemas = Cinemas;
    let museums = Museums;
    let galeries = Galeries;

   // The following group uses the location array to create an array of markers on initialize.

      for (let i = 0; i < theatres.length; i++) {
        // Get the position from the location array.
        let position = theatres[i].location;
        let title = theatres[i].title;
        let place_id = theatres[i].place_id;
        let marker = theatres[i];
        // Push the marker to our array of markers.
        markers_theatres.push(marker);
        markers.push(marker);
      }

      for (let i = 0; i < cinemas.length; i++) {
        // Get the position from the location array.
        let position = cinemas[i].location;
        let title = cinemas[i].title;
        let place_id = cinemas[i].place_id;
        let marker = cinemas[i];
        // Push the marker to our array of markers.
        markers_cinemas.push(marker);
        markers.push(marker);
      }

      for (let i = 0; i < museums.length; i++) {
        // Get the position from the location array.
        let position = museums[i].location;
        let title = museums[i].title;
        let place_id = museums[i].place_id;
        let marker = museums[i];
        // Push the marker to our array of markers.
        markers_museums.push(marker);
        markers.push(marker);
      }

      for (let i = 0; i < galeries.length; i++) {
        // Get the position from the location array.
        let position = galeries[i].location;
        let title = galeries[i].title;
        let place_id = galeries[i].place_id;
        let marker = galeries[i];
        // Push the marker to our array of markers.
        markers_galeries.push(marker);
        markers.push(marker);
      }
  }

  render() {

  return (
      <div className="container">
        <h1>WARSAW CULTURAL MAP</h1>
        <div className="options-box">
          <button id="show-theatres">Show Theatres</button>
          <button id="show-cinemas">Show Cinemas</button>
          <button id="show-museums">Show Museums</button>
          <button id="show-galeries">Show Galeries</button>
          <button id="show-all">Show All Places</button>
        </div>
        <div id="list-of-localisations">
          <h2>List of places</h2>
            <Places markers={markers} />
        </div>
        <div id="map">

          <Map
            isMarkerShown
            googleMapURL="http://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBqtLvddq3jzZ_Lnu9M8266EMVBfXtlUT4&v=3&callback=initMap"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
        </div>
    </div>
    )
  }
}

export default App;
