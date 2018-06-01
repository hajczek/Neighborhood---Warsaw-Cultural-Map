/**
  * @description Import needed components
  */
 import React, { Component } from 'react'
 
 class InformationBox extends Component {
 
     render(){
         return(
            <div id="info-place">
                <h3 tabIndex="0" id="info-title">Informations about chosen place:</h3>
                <p tabIndex="0" id="address"></p>
                <p tabIndex="0" id="short-article"></p>
                <a tabIndex="0" target="blank" id="results">Link: </a>
                <p tabIndex="0" id="info"></p>
            </div>
         )
     }
 }
 
 export default InformationBox