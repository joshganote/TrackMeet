import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import GraphicMap from '../Graphic/GraphicMap';


class Graphic extends Component {
    state = {
        heading: 'Graphic Designer',
    };

    render() {
        return (
            <div>
                <h2>{this.state.heading}</h2>
                <p>once page loads it just shows "My Marker". Refreash page and it shows the outline of the map with error." </p>
                <GraphicMap />
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Graphic);