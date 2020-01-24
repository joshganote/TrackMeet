import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Message.css'
class SentMessageList extends Component {

    render() {
        return (
            <div>
                <img src={this.props.item.profile_img} alt="profile picture" />
                <p>{this.props.item.message}</p>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(SentMessageList);