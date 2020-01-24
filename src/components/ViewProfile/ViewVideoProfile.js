import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class ViewVideoProfile extends Component {
    
    componentDidMount(){
        this.props.dispatch({
            type: 'GET_VIDEO',
            payload: this.props.store.user_role.id
        })
    }
    sendToMessages = (event) => {
        this.props.history.push(`/messages`);
    }

    render() {
        return (
            <div>
                <img src={this.props.store.selected_user.video.profile_img} alt="profile picture" />
                <p>{this.props.store.selected_user.video.bio}</p>
                <button onClick={this.sendToMessages}>Message</button>
                <button onClick={this.sendHire}>Hire</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(ViewVideoProfile));