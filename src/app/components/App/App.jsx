import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import ProgressBar from '../ProgressBar';
import auth from '../../utils/auth';
import config from '../../../config';

/* global styles for app */
var styles = require('./styles/app.scss');

const App = React.createClass({

  statics: {
    loadProps: function(params, cb) {
      cb(null);
    }
  },

  getInitialState() {
    return {
      loggedIn: auth.loggedIn()
    };
  },

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: !!loggedIn
    });
  },

  componentWillMount() {
    auth.onChange = this.updateAuth;
    auth.login();
  },

  render() {
    return (
      <div className="wrapper">

        <ProgressBar
          autoIncrement={ true }
          percent={ this.props.loading ? 0 : 100 }
          intervalTime={ 100 } />

        <Helmet {...config.app} />

        <h2>
          Super Sexy React
        </h2>

        <ul>
          <li>
            {this.state.loggedIn ? (
              <Link to="/logout">
                Log out
              </Link>
            ) : (
              <Link to="/login">
                Sign in
              </Link>
            )}
          </li>

          <li>
            <Link to="/">Home</Link> (changes depending on auth status)
          </li>

          <ul>
            <li>
              <Link to="/subroute">
                Subroute
              </Link> (authenticated)
            </li>
          </ul>

          <li>
            <Link to="/user/1">User</Link> (authenticated)
          </li>

          <li>
            <Link to="/async">Async</Link>
          </li>

        </ul>

        { this.props.children || null }
      </div>
      );
  }
});

module.exports = App;
