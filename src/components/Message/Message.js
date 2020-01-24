import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SentMessageList from '../Message/SentMessageList';
import IncomingMessageList from '../Message/IncomingMessageList';

class Messages extends Component {
    state = {
        heading: 'Send a Message',
        newMessage: '',
    };
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_SENT_MESSAGES',
            payload: this.props.store.user.id
        })
        this.props.dispatch({
            type: 'GET_INCOMING_MESSAGES',
            payload: this.props.store.user.id
        })
    }

    handleChangeField = (event) => {
        this.setState({
            newMessage: event.target.value,
        })
    }

    sendMessage = (event) => {
        this.props.dispatch({
            type: 'POST_MESSAGE',
            payload: {
                newMessage: this.state.newMessage,
                // to_user_id:
                // from_user_id:
            }
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.heading}</h2>
                <IncomingMessageList incomingMessages={this.props.store.incomingMessages} />
                <SentMessageList sentMessages={this.props.store.sentMessages} />
                <input
                    type="text"
                    placeholder="Message"
                    value={this.state.newMessage}
                    onChange={this.handleChangeField}
                />
                <button onClick={this.sendMessage}>Send</button>

            </div>
        );
    }
}

export default connect(mapStoreToProps)(Messages);