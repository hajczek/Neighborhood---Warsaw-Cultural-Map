/**
  * @description Import needed components
  */
import React, { Component } from 'react'
import Map from './components/map.js'
import './css/App.css'
import Menu from './components/Menu.js'
import Places from './components/Places.js'
import InformationBox from './components/informationBox.js'
import Footer from './components/Footer.js'
import Theatres from './data/theatres.json'
import Cinemas from './data/cinemas.json'
import Museums from './data/museums.json'
import Galeries from './data/galeries.json'
import { resetInfoBox } from './components/resetInfoBox.js'

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
  * @description Shows theatres on map
  */
  showTheatres = (markers) => {
    this.setState({markers: markers_theatres});
    document.getElementById('panel').style.display = "none";
    document.getElementById('open-menu').style.display = "block";
    resetInfoBox();
  } 

  /**
  * @description Shows cinemas on map and clear box with informations
  */
  showCinemas = (markers) => {
    this.setState({markers: markers_cinemas});
    document.getElementById('panel').style.display = "none";
    document.getElementById('open-menu').style.display = "block";
    resetInfoBox();
  }

  /**
  * @description Shows museums on map and clear box with informations
  */
  showMuseums = (markers) => {
    this.setState({markers: markers_museums});
    document.getElementById('panel').style.display = "none";
    document.getElementById('open-menu').style.display = "block";
    resetInfoBox();
  }

  /**
  * @description Show galeries on map and clear box with informations
  */
  showGaleries = (markers) => {
    this.setState({markers: markers_galeries});
    document.getElementById('panel').style.display = "none";
    document.getElementById('open-menu').style.display = "block";
    resetInfoBox();
  }

  /**
  * @description Shows all places on map and clear box with informations
  */
  showAll = (markers) => {
    this.setState({markers: markers_all});
    document.getElementById('panel').style.display = "none";
    document.getElementById('open-menu').style.display = "block";
    resetInfoBox();
  }

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
        <main className="container">
          <button id="open-menu" onClick={() => this.openMenu()}>Open map menu</button>
          <section id="panel">
            <button aria-label="Close" id="close-menu" onClick={() => this.closeMenu()}>x</button>
            <h1 tabIndex="0">{this.state.pageTitle}</h1>
            <Menu 
              showTheatres={this.showTheatres}
              showMuseums={this.showMuseums}
              showGaleries={this.showGaleries}
              showCinemas={this.showCinemas}
              showAll={this.showAll}
            />
            <section id="list-of-localisations">
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
            </section>
          </section>
          <mark id="info-box">
            <p tabIndex="0" id="next">{ this.state.error }</p>
          </mark>
          <div id="map">
          {(navigator.onLine)&&(
            <Map
              activeKey={this.state.activeKey}
              markerLocationsActive={this.markerLocationsActive}
              resetInfoBox={this.resetInfoBox}
              isMarkerShown
              markers={this.state.markers}
              googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyBqtLvddq3jzZ_Lnu9M8266EMVBfXtlUT4"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `80%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              />
              )}
              {(!navigator.onLine)&&(
                <section id="container-offline">
                  <div id="info-offline">
                    <h3 tabIndex="0">You are offline ...</h3>
                      <p>You can see list for cultural places in Warsaw.<br/>
                      For this click button 'Open map menu'.</p>
                  </div>
                </section>
              )}
          </div>
          <InformationBox />
          <Footer />
      </main>
    )
  }
}

export default App;