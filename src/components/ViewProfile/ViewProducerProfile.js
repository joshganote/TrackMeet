import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class ViewProducerProfile extends Component {
    
    componentDidMount(){
        this.props.dispatch({
            type: 'GET_PRODUCER',
            payload: this.props.store.user_role.id
        })
    }

    render() {
        return (
            <div>
                <img src={this.props.store.selected_user.producer.profile_img} alt="profile picture" />
                <p>{this.props.store.selected_user.producer.bio}</p>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(ViewProducerProfile);