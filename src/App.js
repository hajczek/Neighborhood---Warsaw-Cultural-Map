/**
  * @description Import needed components
  */
import React, { Component } from 'react'
import Map from './map.js'
import './App.css'
import Places from './Places.js'
import Menu from './Menu.js'
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
        markers_theatres: markers_theatres,
        markers_cinemas: markers_cinemas,
        markers_museums: markers_museums,
        markers_galeries: markers_galeries,
        markers_all: markers_all,
        pageTitle: "Warsaw Cultural Map",
        listTitle: "List of Places",
        activeKey: "",
        error: "There was an error with making a request from Wikipedia."
  };

  /**
  * @description Set location for active marker
  */
  markerLocationsActive = locationKey => {
    this.setState({
      activeKey: locationKey
    });
  };

  /**
   * @description Open menu
   */
    openMenu = () => {
      document.getElementById('panel').style.display = "block";
      document.getElementById('open-menu').style.display = "none";
    }

  /**
    * @description Close menu
    */
    closeMenu = () => {
      document.getElementById('panel').style.display = "none";
      document.getElementById('open-menu').style.display = "block";
    }

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

render() {

  return (
      <div className="container">
        <button id="open-menu" onClick={() => this.openMenu()}>Open map menu</button>
        <div id="panel">
          <button id="close-menu" onClick={() => this.closeMenu()}>x</button>
          <h1 tabIndex="0">{this.state.pageTitle}</h1>
          <Menu 
          markers={this.state.markers}
          markers_theatres={this.state.markers_theatres}
          markers_cinemsa={this.state.markers_cinemas}
          markers_museums={this.state.markers_museums}
          markers_galeries={this.state.markers_galeries}          
          />
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
                markerLocationsActive={this.markerLocationsActive}
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
            markerLocationsActive={this.markerLocationsActive}
            isMarkerShown
            onShowTheatres={this.showTheatres}
            onShowCinemas={this.showCinemas}
            onShowMuseums={this.showMuseums}
            onShowGaleries={this.showGaleries}
            onShowAll={this.showAll}
            markers={this.state.markers}
            googleMapURL="http://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBqtLvddq3jzZ_Lnu9M8266EMVBfXtlUT4"
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
