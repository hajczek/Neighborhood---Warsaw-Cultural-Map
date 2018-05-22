import React, { Component } from 'react'

class Places extends Component {
    render(){
       /* const list = this.props.markers.map((marker, i) => {
            return (
                <li key={i}>{marker.title}</li>
            )
        }) */
        // console.log('Props', this.props.markers)

        return(
            <ol id="list-of-places">
                {this.props.markers.map((marker, i) => (
                    <li key={i}><a href="javascript:google.maps.event.trigger(markers[{marker.id}],'click', {});">{ marker.title }</a></li>
                ))}
            </ol>
        )
    }
}

export default Places