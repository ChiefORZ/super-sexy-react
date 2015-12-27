import React from 'react';
import { Link } from 'react-router';
import auth from './../../utils/auth';

const App = React.createClass({

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
            <div className="container">
                <h2>Super Sexy React</h2>
                <ul>
                    <li>
                        {this.state.loggedIn ? (
                          <Link to="/logout">Log out</Link>
                        ) : (
                          <Link to="/login">Sign in</Link>
                        )}
                    </li>
                    <li><Link to="/">Home</Link> (changes depending on auth status)</li>
                    <li><Link to="/user/1">User</Link> (authenticated)</li>
                    <li><Link to="/pageone">Page One</Link> (authenticated)</li>
                </ul>
                { this.props.children || null }
            </div>
        );
    }
});

module.exports = App;
