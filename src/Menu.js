/**
* @description Import needed components
*/
import React, { Component } from 'react'

class Menu extends Component {

    /**
        * @description Shows theatres on map
        */
       showTheatres = (markers) => {
        this.setState({markers: this.props.markers_theatres});
        document.getElementById('panel').style.display = "none";
        document.getElementById('open-menu').style.display = "block";
        } 

        /**
        * @description Shows cinemas on map
        */
        showCinemas = (markers) => {
        this.setState({markers: this.props.markers_cinemas});
        document.getElementById('panel').style.display = "none";
        document.getElementById('open-menu').style.display = "block";
        }

        /**
        * @description Shows museums on map
        */
        showMuseums = (markers) => {
        this.setState({markers: this.props.markers_museums});
        document.getElementById('panel').style.display = "none";
        document.getElementById('open-menu').style.display = "block";
        }

        /**
        * @description Show galeries on map
        */
        showGaleries = (markers) => {
        this.setState({markers: this.props.markers_galeries});
        document.getElementById('panel').style.display = "none";
        document.getElementById('open-menu').style.display = "block";
        }

        /**
        * @description Shows all places on map
        */
        showAll = (markers) => {
        this.setState({markers: this.props.markers_all});
        document.getElementById('panel').style.display = "none";
        document.getElementById('open-menu').style.display = "block";
        }

    render(){
        return(
            <div className="options-box">
                <button tabIndex="0" onClick={() => this.showTheatres()} id="show-theatres"><img alt="Theatre symbol" src="http://www.serwisstron.pl/icons/theatre.png" /><span className="textBtn">Theatres</span></button>
                <button tabIndex="0" onClick={() => this.showCinemas()} id="show-cinemas"><img alt="Cinema symbol" src="http://www.serwisstron.pl/icons/cinema.png" /><span className="textBtn">Cinemas</span></button>
                <button tabIndex="0" onClick={() => this.showMuseums()} id="show-museums"><img alt="Museum symbol" src="http://www.serwisstron.pl/icons/museum.png" /><span className="textBtn">Museums</span></button>
                <button tabIndex="0" onClick={() => this.showGaleries()} id="show-galeries"><img alt="Gallery symbol" src="http://www.serwisstron.pl/icons/galeria.png" /><span className="textBtn">Galeries</span></button>
                <button tabIndex="0" onClick={() => this.showAll()} id="show-all"><span className="textBtn">Show All Places</span></button>
            </div>
        )
    }
}

export default Menu