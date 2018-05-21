import React, { Component } from 'react';
import Map from './Map.js';
import './App.css';
import Places from './Places.js'
import superagent from 'superagent'

class App extends Component {
  constructor(){
    super()
      this.state = {
        venues: []
      }
  }

  componentDidMount(){
    console.log('componentDidMount')

    const url ='data/theatres.json'

    superagent
    .get(url)
    .query(null)
    .set('Accept', 'text/json')
    .end((error, response) => {

      //const venues = response.body.response.venues
      console.log(JSON.stringify(venues))
    })
  }

  render() {

    const markers = [
      {
        location: {
          lat: 52.229676,
          lng: 21.012229
        }
      }
    ]

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
            center={{lat: 52.229676, lng: 21.012229}}
            zoom={13}
            markers={markers}
            containerElement={<div style={{height:100+'%'}} />}
            mapElement={<div style={{height:100+'%'}} />}
          />
        </div>
    </div>
    )
  }
}

export default App;
