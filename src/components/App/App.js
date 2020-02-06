import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import featureProducer from '../Features/Producer/Producer';
import featureGraphic from '../Features/Graphic/Graphic';
import featureVideo from '../Features/Video/Video';
import Contact from '../Contact/Contact';
import Messages from '../Message/Message';
import Profile from '../Profile/Profile';
import ViewProducerProfile from '../ViewProfile/ViewProducerProfile';
import ViewGraphicProfile from '../ViewProfile/ViewGraphicProfile';
import ViewVideoProfile from '../ViewProfile/ViewVideoProfile';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            <Route
              exact
              path="/home"
              component={LandingPage}
            />
            <Route
              exact
              path="/features/producer"
              component={featureProducer}
            />
            <Route
              exact
              path="/features/graphic-designer"
              component={featureGraphic}
            />
            <Route
              exact
              path="/features/photographer"
              component={featureVideo}
            />
            <Route
              exact
              path="/messages"
              component={Messages}
            />
            <Route
              exact
              path="/contact"
              component={Contact}
            />
            <Route
              exact
              path="/profile"
              component={Profile}
            />
             <Route
              exact
              path="/view-producer-profile"
              component={ViewProducerProfile}
            />
            <Route
              exact
              path="/view-graphic-profile"
              component={ViewGraphicProfile}
            />
            <Route
              exact
              path="/view-video-profile"
              component={ViewVideoProfile}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              exact
              path="/admin"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will be redirected to the authRedirect path provided. */}
            <ProtectedRoute
              exact
              path="/login"
              authRedirect="/admin"
              component={LoginPage}
            />
            <ProtectedRoute
              exact
              path="/registration"
              authRedirect="/admin"
              component={RegisterPage}
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
