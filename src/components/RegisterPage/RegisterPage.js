import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Material UI
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
// }));

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    street_address: '',
    city: '',
    state: '',
    zipcode: '',
    role_id: {
      artist: 1,
      producer: 2,
      graphic: 3,
      video: 4,
    },
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          street_address: this.state.street_address,
          city: this.state.city,
          state: this.state.state,
          zipcode: this.state.zipcode,
          role_id: this.state.role_id,
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      role_id: {
        ...this.state.role_id,
        artist: 1,
        producer: 2,
        graphic: 3,
        video: 4,
      },
      [propertyName]: event.target.value,
    });
    console.log(propertyName);
  }

  render() {
    // const classes = useStyles();
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
        <form onSubmit={this.registerUser} >
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
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);

