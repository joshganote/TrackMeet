import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import VideoMap from '../Video/VideoMap';
import VideoList from '../Video/VideoList';

class Video extends Component {
    state = {
        heading: 'Videographer',
    };
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_VIDEO',
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.heading}</h2>
                <VideoList video={this.props.store.video} />
                <VideoMap />
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Video);