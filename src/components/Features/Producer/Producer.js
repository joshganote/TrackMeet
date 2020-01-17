import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import ProducerMap from '../Producer/ProducerMap';


class Producer extends Component {
    state = {
        heading: 'Producer',
    };

    render() {
        return (
            <div>
                <h2>{this.state.heading}</h2>
                <p>once page loads it just shows "My Marker". Refreash page and it shows the outline of the map with error." </p>
                <ProducerMap />
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Producer);