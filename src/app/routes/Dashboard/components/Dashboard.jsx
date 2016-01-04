import React from 'react';
import Helmet from 'react-helmet';

import auth from './../../../utils/auth';

const Dashboard = React.createClass({

    render() {
        const token = auth.getToken();
        return (
            <div className="Dashboard">
                <Helmet title="Dashboard"/>
                <h1>Dashboard!</h1>
                <p>{ token }</p>
                { this.props.children }
            </div>
        );
    }

});

module.exports = Dashboard;
