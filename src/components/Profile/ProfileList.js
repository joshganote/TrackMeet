import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ProfileItem from '../Profile/ProfileItem';


class ProfileList extends Component {
    

    render() {
        const profileList = this.props.list.map((item, index) =>{
            return <ProfileItem key={index} item={item} />
        })
        return (
            <div>
                {profileList}
            </div>
        );
    }
}

export default connect(mapStoreToProps)(ProfileList);