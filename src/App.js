import React, { Component } from 'react';
import Map from './Map.js';
import './App.css';

class App extends Component {
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
          <ul id="list-of-places"></ul>
        </div>
        <div id="map">
          <Map 
            containerElement={<div style={{height:100+'%'}} />}
            mapElement={<div style={{height:100+'%'}} />}
          />
        </div>
    </div>
    )
  }
}

export default App;
