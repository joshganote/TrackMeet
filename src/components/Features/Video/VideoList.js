import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import VideoItem from '../Video/VideoItem';


class VideoList extends Component {

    render() {

        let videoArray = this.props.store.user_role.video.map((item, index) => {
            return <VideoItem item={item} key={index}/>
        })
        return (
            <div>
                <ul>{videoArray}</ul>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(VideoList);