import React from 'react';
import { History } from 'react-router';
import Helmet from 'react-helmet';

import auth from './../../../utils/auth.js';

const Login = React.createClass({

    mixins: [ History ],

    statics: {
        loadProps: function(params, cb) {
            cb(null);
        }
    },

    getInitialState() {
        return {
            error: false
        }
    },

    handleSubmit(event) {
        event.preventDefault()

        const email = this.refs.email.value;
        const pass = this.refs.pass.value;

        auth.login(email, pass, (loggedIn) => {
            if (!loggedIn)
                return this.setState({ error: true });

            const { location } = this.props;

            if (location.state && location.state.nextPathname) {
                this.history.replaceState(null, location.state.nextPathname);
            } else {
                this.history.replaceState(null, '/');
            }
        });
    },

    render() {
        return (
            <div className="login">
                <Helmet title="Login"/>
                <form onSubmit={this.handleSubmit}>
                    <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
                    <label><input ref="pass" placeholder="password" defaultValue="password"/></label> (hint: password)<br />
                    <button type="submit">login</button>
                    {this.state.error && (
                        <p>Bad login information</p>
                    )}
                </form>
            </div>
        );
    }

});

module.exports = Login;
