import React, { Component } from 'react'

class Places extends Component {
    render(){
       /* const list = this.props.markers.map((marker, i) => {
            return (
                <li key={i}>{marker.title}</li>
            )
        }) */
        console.log('Props', this.props.markers)

        return(
            <ul id="list-of-places">
                {this.props.markers.map((marker, i) => (
                    <li key={i}>{ marker.title }</li>
                ))}
            </ul>
        )
    }
}

export default Places