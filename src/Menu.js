/**
  * @description Import needed components
  */
 import React, { Component } from 'react'
 
 class Menu extends Component {
 
     render(){
         return(
            /**
             * @description Display menu buttons on page
             */
            <nav>
                <button tabIndex="0" onClick={() => this.props.showTheatres()} id="show-theatres">
                    <img alt="Theatre symbol" src="http://www.serwisstron.pl/icons/theatre.png" />
                    <span className="textBtn">Theatres</span>
                </button>
                <button tabIndex="0" onClick={() => this.props.showCinemas()} id="show-cinemas">
                    <img alt="Cinema symbol" src="http://www.serwisstron.pl/icons/cinema.png" />
                    <span className="textBtn">Cinemas</span>
                </button>
                <button tabIndex="0" onClick={() => this.props.showMuseums()} id="show-museums">
                    <img alt="Museum symbol" src="http://www.serwisstron.pl/icons/museum.png" />
                    <span className="textBtn">Museums</span>
                </button>
                <button tabIndex="0" onClick={() => this.props.showGaleries()} id="show-galeries">
                    <img alt="Gallery symbol" src="http://www.serwisstron.pl/icons/galeria.png" />
                    <span className="textBtn">Galeries</span>
                </button>
                <button tabIndex="0" onClick={() => this.props.showAll()} id="show-all">
                    <span className="textBtn">Show All Places</span>
                </button>
            </nav>
         )
     }
 }
 
 export default Menu