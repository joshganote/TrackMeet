import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Material UI
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class TemplateClass extends Component {
    

    render() {
        return (
            <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="street_address">
              Street Address:
              <input
                type="text"
                name="street_address"
                value={this.state.street_address}
                onChange={this.handleInputChangeFor('street_address')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="city">
              City:
              <input
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.handleInputChangeFor('city')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="state">
              State:
              <input
                type="text"
                name="state"
                value={this.state.state}
                onChange={this.handleInputChangeFor('state')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="zipcode">
              Zip Code:
              <input
                type="number"
                name="zipcode"
                value={this.state.zipcode}
                onChange={this.handleInputChangeFor('zipcode')}
              />
            </label>
          </div>
          <span>
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Artist"
              labelPlacement="end"
              value={this.state.role_id.artist}
              onChange={this.handleInputChangeFor('role_id')}
            />
          </span>
          <span>
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Producer"
              labelPlacement="end"
              value={this.state.role_id.producer}
              onChange={this.handleInputChangeFor('role_id')}
            />
          </span>
          <span>
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Graphic Designer"
              labelPlacement="end"
              value={this.state.role_id.graphic}
              onChange={this.handleInputChangeFor('role_id')}
            />
          </span>
          <span>
            <FormControlLabel
              control={<Radio color="primary" />}
              label="Videographer"
              labelPlacement="end"
              value={this.state.role_id.video}
              onChange={this.handleInputChangeFor('role_id')}
            />
          </span>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
          >
            Login
          </button>
        </center>
      </div>
        )
    }
}

export default connect(mapStoreToProps)(TemplateClass);