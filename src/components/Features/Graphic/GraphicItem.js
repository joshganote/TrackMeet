import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../../redux/mapStoreToProps';

class GraphicItem extends Component {

    clickToProfile = (event) => {
        this.props.dispatch({
            type: 'GET_GRAPHIC_BY_ID',
            payload: this.props.item.id
        })
        this.props.history.push(`/view-graphic-profile/`);
    }

    render() {
        return (
            <div onClick={this.clickToProfile}>
                <img src={this.props.item.profile_img} alt="profile picture" />
                <p>{this.props.item.username}</p>
                <p>{this.props.item.bio}</p>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(GraphicItem));