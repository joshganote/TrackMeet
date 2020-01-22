import React, { Component } from 'react';
import { connect } from 'react-redux';
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

    render() {
        return (
            <div>
                <img src={this.props.store.selected_user.video.profile_img} alt="profile picture" />
                <p>{this.props.store.selected_user.video.bio}</p>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(ViewVideoProfile);