import React from 'react';
import Helmet from 'react-helmet';

import auth from './../../../utils/auth';

const Logout = React.createClass({
    componentDidMount() {
        auth.logout();
    },

    render() {
        return (
            <div className="logout">
                <Helmet title="Logout"/>
                <p>You are now logged out</p>
            </div>
        );
    }
})

module.exports = Logout;
