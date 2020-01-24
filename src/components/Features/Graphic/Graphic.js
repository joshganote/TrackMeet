import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import GraphicMap from '../Graphic/GraphicMap';
import GraphicList from '../Graphic/GraphicList';


class Graphic extends Component {
    state = {
        heading: 'Graphic Designer',
    };
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_GRAPHIC',
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.heading}</h2>
                <GraphicMap />
                <GraphicList graphic={this.props.store.graphic} />
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Graphic);