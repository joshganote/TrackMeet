import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import IncomingMessageItem from '../Message/IncomingMessageItem';


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace 
// the component name TemplateClass with the name for the new 
// component.
class IncomingMessageList extends Component {

    render() {
        let incomingMessagesArray = this.props.store.messages.incomingMessages.map((item, index) => {
            return <IncomingMessageItem item={item} key={index} />
        })
        return (
            <div>
                <ul>{incomingMessagesArray}</ul>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(IncomingMessageList);