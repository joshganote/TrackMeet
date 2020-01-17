import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Profile extends Component {
    state = {
        heading: 'Profile',
        bioIsEditable: false,
        bio: '',
        newBio: '',
    };

    handleChangeBio = (event) => {
        this.setState({
            newBio: event.target.value
        })
    }
    editBio = (event) => {
        this.setState({
            newBio: this.state.bio,
            bioIsEditable: true,
        })
    };

    saveBio = (event) => {
        this.setState({
            bio: this.state.newBio,
            bioIsEditable: false,
        })
    };

    render() {

        return (
            <div>
                <h2>{this.state.heading}</h2>
                {this.props.store.user.username}
                <br />
                {this.props.store.user.city}
                <br />
                {this.props.store.user.bio}
                <br />
                {this.state.bioIsEditable ?
                    <input
                        type="text"
                        placeholder="Username"
                        value={this.state.newBio}
                        onChange={this.handleChangeBio}
                    /> :
                    <span>{this.state.bio}</span>
                }
                {this.state.bioIsEditable ?
                    <button onClick={this.saveBio}>Save Bio</button> :
                    <button onClick={this.editBio}>Edit Bio</button>
                }

            </div>
        );
    }
}

export default connect(mapStoreToProps)(Profile);