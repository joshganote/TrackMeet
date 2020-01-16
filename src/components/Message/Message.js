import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../Contact/Contact';

class Messages extends Component {
    state = {
        heading: 'Send a Message',
    };

    render() {
        return (
            <div>
                <h2>{this.state.heading}</h2>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Messages);