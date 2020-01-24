import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class ViewProducerProfile extends Component {

    state = {
        messageIsEditable: false,
        //message: '',
        hire: false,
    }
    handleChangeMessage = (event) => {
        this.setState({
            message: event.target.value,
        })
    }
    // createMessage = (event) => {
    //     this.setState({
    //         message: this.state.message,
    //         messageIsCreated: true,
    //     })
    // }
    // sendMessage = (event) => {
    //     this.props.dispatch({
    //         type: 'POST_MESSAGE',
    //         payload: {
    //             message: this.state.message,
    //         }
    //     })
    //     this.setState({
    //         message: '',
    //         messageIsCreated: false,
    //     })
    // }
    sendToMessages = (event) => {
        this.props.history.push(`/messages`);
    }
    hireProducer = (event) => {}

    
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
                <button onClick={this.sendToMessages}>Message</button>
                {/* {this.state.messageIsCreated ?
                    <input
                        type="text"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={this.handleChangeMessage}
                    /> :
                    <span>{this.state.message}</span>
                }
                {this.state.messageIsCreated ?
                    <button onClick={this.sendMessage}>Send Message</button> :
                    <button onClick={this.createMessage}>Message</button>
                } */}
                <button onClick={this.sendHire}>Hire</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(ViewProducerProfile));