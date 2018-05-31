import React, { Component } from 'react'
import { getInfo } from './wikipediaApi.js'

class Places extends Component {

    render(){
        return(
            <ol id="list-of-places">
                {this.props.markers.map((marker, i) => (                    
                    <li tabIndex="0" key={i} onClick={() => {
                        this.props.toggleLocationsActive(i);
                        getInfo(marker.title);
                    }}>{ marker.title } »</li>
                ))}
            </ol>
        )
    }
}

export default Places