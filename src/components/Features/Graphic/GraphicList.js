import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import GraphicItem from '../Graphic/GraphicItem';


class GraphicList extends Component {

    render() {

        let graphicArray = this.props.store.user_role.graphic.map((item, index) => {
            return <GraphicItem item={item} key={index}/>
        })
        return (
            <div>
                <ul>{graphicArray}</ul>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(GraphicList);