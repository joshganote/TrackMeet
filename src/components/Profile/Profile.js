import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Profile extends Component {
    state = {
        heading: 'Profile',
    };

    render() {
        return (
            <div>
                <h2>{this.state.heading}</h2>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Profile);