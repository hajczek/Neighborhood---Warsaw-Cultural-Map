/**
  * @description Import needed components
  */
import React, { Component } from 'react';
import Map from './map.js';
import './App.css';
import Places from './Places.js'
import Theatres from './data/theatres.json'
import Cinemas from './data/cinemas.json'
import Museums from './data/museums.json'
import Galeries from './data/galeries.json'

/**
  * @description Definitions of variables for data from .json files
  */
let theatres = Theatres;
let cinemas = Cinemas;
let museums = Museums;
let galeries = Galeries;

/**
  * @description Definitions of arrays for data from .json files
  */
let markers_all = [];
let markers_theatres = [];
let markers_cinemas = [];
let markers_museums = [];
let markers_galeries = [];

class App extends Component {
  /**
  * @description Set states for applications
  */
  state = {
        markers: markers_all,
        pageTitle: "Warsaw Cultural Map",
        listTitle: "List of Places",
        activeMarker: "",
        error: "There was an error with making a request for information about this place."
  };

  /**
  * @description Set location for active marker
  */
  toggleLocationsActive = locationKey => {
    this.setState({
      activeMarker: locationKey
    });
  };

  componentWillMount() {

    /**
    * @description Put all elements from .json files to arrays
    */
    for (let i = 0; i < theatres.length; i++) {
      let marker = theatres[i];
      markers_all.push(marker);
      markers_theatres.push(marker);
    }

    for (let i = 0; i < cinemas.length; i++) {
      let marker = cinemas[i];
      markers_all.push(marker);
      markers_cinemas.push(marker)
    }

    for (let i = 0; i < museums.length; i++) {
      let marker = museums[i];
      markers_all.push(marker);
      markers_museums.push(marker);
    }

    for (let i = 0; i < galeries.length; i++) {
      let marker = galeries[i];
      markers_all.push(marker);
      markers_galeries.push(marker);
  }
}

/**
* @description Shows theatres on map
*/
showTheatres = (markers) => {
  this.setState({markers: markers_theatres});
  document.getElementById('panel').style.display = "none";
  document.getElementById('open-menu').style.display = "block";
} 

/**
* @description Shows cinemas on map
*/
showCinemas = (markers) => {
  this.setState({markers: markers_cinemas});
  document.getElementById('panel').style.display = "none";
  document.getElementById('open-menu').style.display = "block";
}

/**
* @description Show museums on map
*/
showMuseums = (markers) => {
  this.setState({markers: markers_museums});
  document.getElementById('panel').style.display = "none";
  document.getElementById('open-menu').style.display = "block";
}

/**
* @description Show galeries on map
*/
showGaleries = (markers) => {
  this.setState({markers: markers_galeries});
  document.getElementById('panel').style.display = "none";
  document.getElementById('open-menu').style.display = "block";
}

/**
* @description Show all places on map
*/
showAll = (markers) => {
  this.setState({markers: markers_all});
  document.getElementById('panel').style.display = "none";
  document.getElementById('open-menu').style.display = "block";
}

/**
* @description Show menu
*/
openMenu(){
  document.getElementById('panel').style.display = "block";
  document.getElementById('open-menu').style.display = "none";
}

/**
* @description Close menu
*/
closeMenu(){
  document.getElementById('panel').style.display = "none";
  document.getElementById('open-menu').style.display = "block";
}

render() {

  return (
      <div className="container">
        <button id="open-menu" onClick={() => this.openMenu()}>Open map menu</button>
        <div id="panel">
          <button id="close-menu" onClick={() => this.closeMenu()}>x</button>
          <h1 tabIndex="0">{this.state.pageTitle}</h1>
          <div className="options-box">
            <button tabIndex="0" onClick={() => this.showTheatres()} id="show-theatres"><img alt="Theatre symbol" src="http://www.serwisstron.pl/Map/icons/theatre.png" /><span className="textBtn">Theatres</span></button>
            <button tabIndex="0" onClick={() => this.showCinemas()} id="show-cinemas"><img alt="Cinema symbol" src="http://www.serwisstron.pl/Map/icons/cinema.png" /><span className="textBtn">Cinemas</span></button>
            <button tabIndex="0" onClick={() => this.showMuseums()} id="show-museums"><img alt="Museum symbol" src="http://www.serwisstron.pl/Map/icons/museum.png" /><span className="textBtn">Museums</span></button>
            <button tabIndex="0" onClick={() => this.showGaleries()} id="show-galeries"><img alt="Gallery symbol" src="http://www.serwisstron.pl/Map/icons/galeria.png" /><span className="textBtn">Galeries</span></button>
            <button tabIndex="0" onClick={() => this.showAll()} id="show-all"><span className="textBtn">Show All Places</span></button>
          </div>
          <div id="list-of-localisations">
            <h2 tabIndex="0">{this.state.listTitle}</h2>
              <Places 
                onShowTheatres={this.showTheatres} 
                onShowCinemas={this.showCinemas}
                onShowMuseums={this.showMuseums}
                onShowGaleries={this.showGaleries}
                onShowAll={this.showAll} 
                markers={this.state.markers}
                closeMenu={this.closeMenu}
                toggleLocationsActive={this.toggleLocationsActive}
                hideError={this.hideError}
              />
          </div>
        </div>
        <div id="info-box">
            <span tabIndex="0" id="next">{ this.state.error }</span>
        </div>
        <div id="map">
        {(navigator.onLine)&&(
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
            googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=places&key=YOUR-GOOGLE-MAPS-API-KEY"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />)}
            {(!navigator.onLine)&&(
              <div id="container-offline">
                <div id="info-offline">
                  <h3>You are offline ...</h3>
                    <p>You can see list for cultural places in Warsaw.<br/>
                    For this click button 'Open map menu'.</p>
                </div>
              </div>
            )}
        </div>
      </div>
    )
  }
}

export default App;
