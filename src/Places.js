import React, { Component } from 'react'

class Places extends Component {
    render(){
        return(
            <ol id="list-of-places">
                {this.props.markers.map((marker, i) => (
                    <li key={i} onClick={() => {
                        this.props.toggleLocationsActive(i);
                        this.props.closeMenu();
                      }}>{ marker.title } »</li>
                ))}
            </ol>
        )
    }
}

export default Places