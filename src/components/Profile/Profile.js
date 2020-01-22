import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ImageUpload from '../ImageUpload/ImageUpload';
import './Profile.css';

class Profile extends Component {
    state = {
        heading: 'Profile',
        bioIsEditable: false,
        bioIsCreated: false,
        bio: '',
        newBio: '',
        selectedFiles: null, 
        toggleUpload: false
    };

    // AWS event handler
    multipleFileChangedHandler = (event) => {
        this.setState({
         selectedFiles: event.target.files
        });
        console.log( event.target.files );
       };

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_PROFILE',
            payload: this.props.store.user.id,
        })
    }
    handleChangeBio = (event) => {
        this.setState({
            newBio: event.target.value,
            bio: event.target.value
        })
    }

    // input field to create bio isn't visible until create bio button is clicked
    createBio = (event) => {
        this.setState({
            bio: this.state.bio,
            bioIsCreated: true,
        })
    }
    saveCreateBio = (event) => {
        this.props.dispatch({
            type: 'POST_PROFILE',
            payload: {
                bio: this.state.bio,
            }
        })
        this.setState({
            bio: '',
            bioIsCreated: false,
        })
    }
    // input field to change bio isn't visible until edit bio button is clicked
    editBio = (event) => {
        this.setState({
            newBio: this.state.bio,
            bioIsEditable: true,
        })
    };

    // saveBio = (event) => {
    //     this.props.dispatch({
    //         type: 'PUT_PROFILE',
    //         payload: {
    //             bio: this.state.newBio,
    //             id: this.props.store.user.id,
    //         }
    //     });
    //     // {
    //     //     bio: string,
    //         // id: integer,
    //     // }
    //     this.setState({
    //         bio: '',
    //         bioIsEditable: false,
    //     })
    // };

    toggleUpload = event => {
        this.setState({
            toggleUpload: !this.state.toggleUpload
        })
    }

    render() {

        return (
            <div>
                <h2>{this.state.heading}</h2>
                <div>
                {this.props.store.user.profile_img && (<img src={this.props.store.user.profile_img}></img>)}
                </div>
                {this.props.store.user.username}
                <br />
                {this.props.store.user.city}
                <br />
                {this.props.store.user.bio}
                <br />
                {this.state.bioIsCreated ?
                    <input
                        type="text"
                        placeholder="Create Bio"
                        value={this.state.bio}
                        onChange={this.handleChangeBio}
                    /> :
                    <span>{this.state.bio}</span>
                }
                {this.state.bioIsCreated ?
                    <button onClick={this.saveCreateBio}>Put  Bio</button> :
                    <button onClick={this.createBio}>Create Bio</button>
                }
                <br />
                {/* {this.state.bioIsEditable ?
                    <input
                        type="text"
                        placeholder="Edit Bio"
                        value={this.state.newBio}
                        onChange={this.handleChangeBio}
                    /> :
                    <span>{this.state.bio}</span>
                }
                {this.state.bioIsEditable ?
                    <button onClick={this.saveBio}>Save Bio</button> :
                    <button onClick={this.editBio}>Edit Bio</button>  
                } */}
                
                { !this.state.toggleUpload && <button onClick={this.toggleUpload}>Upload Image</button>}
                { this.state.toggleUpload && (<ImageUpload toggle={this.toggleUpload}/>)}
                
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Profile);