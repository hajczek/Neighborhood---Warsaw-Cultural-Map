import React, { Component } from 'react';
import Map from './Map.js';
import './App.css';
import Places from './Places.js'
// import superagent from 'superagent'
import Theatres from './data/theatres.json'
import Cinemas from './data/cinemas.json'
import Museums from './data/museums.json'
import Galeries from './data/galeries.json'

let markers_all = [];
let markers_theatres = [];
let markers_cinemas = [];
let markers_museums = [];
let markers_galeries = [];

let theatres = Theatres;
let cinemas = Cinemas;
let museums = Museums;
let galeries = Galeries;

class App extends Component {
  state = {
        markers: markers_all,
        pageTitle: "Warsaw Cultural Map",
        listTitle: "List of Places",
        activeKey: ""
  };

  toggleLocationsActive = locationKey => {
    this.setState({
      activeKey: locationKey
    });
  };

  componentWillMount() {

    for (let i = 0; i < theatres.length; i++) {
      let marker = theatres[i];
      // Push the marker to our array of markers.
      markers_all.push(marker);
      markers_theatres.push(marker);
    }

    for (let i = 0; i < cinemas.length; i++) {
      let marker = cinemas[i];
      // Push the marker to our array of markers.
      markers_all.push(marker);
      markers_cinemas.push(marker)
    }

    for (let i = 0; i < museums.length; i++) {
      let marker = museums[i];
      // Push the marker to our array of markers.
      markers_all.push(marker);
      markers_museums.push(marker);
    }

    for (let i = 0; i < galeries.length; i++) {
      let marker = galeries[i];
      // Push the marker to our array of markers.
      markers_all.push(marker);
      markers_galeries.push(marker);
  }
}

showTheatres = (markers) => {
  this.setState({markers: markers_theatres});
  document.getElementById('panel').style.display = "none";
  document.getElementById('open-menu').style.display = "block";
} 

showCinemas = (markers) => {
  this.setState({markers: markers_cinemas});
  document.getElementById('panel').style.display = "none";
  document.getElementById('open-menu').style.display = "block";
}

showMuseums = (markers) => {
  this.setState({markers: markers_museums});
  document.getElementById('panel').style.display = "none";
  document.getElementById('open-menu').style.display = "block";
}

showGaleries = (markers) => {
  this.setState({markers: markers_galeries});
  document.getElementById('panel').style.display = "none";
  document.getElementById('open-menu').style.display = "block";
}

showAll = (markers) => {
  this.setState({markers: markers_all});
  document.getElementById('panel').style.display = "none";
  document.getElementById('open-menu').style.display = "block";
}

openMenu(){
  document.getElementById('panel').style.display = "block";
  document.getElementById('open-menu').style.display = "none";
}

closeMenu(){
  document.getElementById('panel').style.display = "none";
  document.getElementById('open-menu').style.display = "block";
}

render() {

  return (
      <div className="container">
        <button id="open-menu" onClick={() => this.openMenu()}>Open menu</button>
        <div id="panel">
          <button id="close-menu" onClick={() => this.closeMenu()}>x</button>
          <h1>{this.state.pageTitle}</h1>
          <div className="options-box">
            <button onClick={() => this.showTheatres()} id="show-theatres"><img alt="Theatre symbol" src="http://www.serwisstron.pl/icons/theatre.png" /><span class="textBtn">Theatres</span></button>
            <button onClick={() => this.showCinemas()} id="show-cinemas"><img alt="Cinema symbol" src="http://www.serwisstron.pl/icons/cinema.png" /><span class="textBtn">Cinemas</span></button>
            <button onClick={() => this.showMuseums()} id="show-museums"><img alt="Museum symbol" src="http://www.serwisstron.pl/icons/museum.png" /><span class="textBtn">Museums</span></button>
            <button onClick={() => this.showGaleries()} id="show-galeries"><img alt="Gallery symbol" src="http://www.serwisstron.pl/icons/galeria.png" /><span class="textBtn">Galeries</span></button>
            <button onClick={() => this.showAll()} id="show-all"><span class="textBtn">Show All Places</span></button>
          </div>
          <div id="list-of-localisations">
            <h2>{this.state.listTitle}</h2>
              <Places 
                onShowTheatres={this.showTheatres} 
                onShowCinemas={this.showCinemas}
                onShowMuseums={this.showMuseums}
                onShowGaleries={this.showGaleries}
                onShowAll={this.showAll} 
                markers={this.state.markers}
                closeMenu={this.closeMenu}
                toggleLocationsActive={this.toggleLocationsActive}
              />
          </div>
        </div>
        <div id="map">
          <Map
            activeKey={this.state.activeKey}
            toggleLocationsActive={this.toggleLocationsActive}
            isMarkerShown
            onShowTheatres={this.showTheatres}
            onShowCinemas={this.showCinemas}
            onShowMuseums={this.showMuseums}
            onShowGaleries={this.showGaleries}
            onShowAll={this.showAll}
            markers={this.state.markers}
            googleMapURL="http://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=AIzaSyBqtLvddq3jzZ_Lnu9M8266EMVBfXtlUT4"
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
