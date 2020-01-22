import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import ProducerItem from '../Producer/ProducerItem';


class ProducerList extends Component {

    render() {

        let producerArray = this.props.store.user_role.producer.map((item, index) => {
            return <ProducerItem item={item} key={index}/>
        })
        return (
            <div>
                <ul>{producerArray}</ul>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(ProducerList);