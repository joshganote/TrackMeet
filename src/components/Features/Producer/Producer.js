import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import ProducerMap from '../Producer/ProducerMap';
import ProducerList from '../Producer/ProducerList';

class Producer extends Component {
    state = {
        heading: 'Producer',
    };
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_PRODUCER',
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.heading}</h2>
                <ProducerList producer={this.props.store.producer} />
                <ProducerMap />
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Producer);