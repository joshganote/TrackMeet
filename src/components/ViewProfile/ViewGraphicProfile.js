import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ViewGraphicProfile extends Component {
    
    componentDidMount(){
        this.props.dispatch({
            type: 'GET_GRAPHIC',
            payload: this.props.store.user_role.id
        })
    }
    sendToMessages = (event) => {
        this.props.history.push(`/messages`);
    }

    render() {
        return (
            <div>
                <img src={this.props.store.selected_user.graphic.profile_img} alt="profile picture" />
                <p>{this.props.store.selected_user.graphic.bio}</p>
                <button onClick={this.sendToMessages}>Message</button>
                <button onClick={this.sendHire}>Hire</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(ViewGraphicProfile));