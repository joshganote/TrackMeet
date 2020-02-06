import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
//import { Link } from 'react-scroll';

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <h2 className="nav-title">TrackMeet</h2>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.store.user.id ? 'Home' : 'Login / Register'}
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.store.user.id && (
        <>
           <Link className="nav-link" to="/home">
            Features
          </Link>
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
          <Link className="nav-link" to="/messages">
            Messages
          </Link>
          <LogOutButton className="nav-link"/>
        </>
      )}
      <Link className="nav-link" to="/contact">
            Contact
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
      {/* Always show this link since the about page is not protected */}
    </div>
  </div>
);

export default connect(mapStoreToProps)(Nav);
