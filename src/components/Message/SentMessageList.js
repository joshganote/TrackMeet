import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import SentMessageItem from '../Message/SentMessageItem';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class SentMessageList extends Component {

    render() {
        let sentMessagesArray = this.props.store.messages.sentMessages.map((item, index) => {
            return <SentMessageItem item={item} key={index} />
        })
        return (
            <div>
                <ul>{sentMessagesArray}</ul>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(SentMessageList);