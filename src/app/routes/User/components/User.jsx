import React from 'react';
import Helmet from 'react-helmet';

const User = React.createClass({
    render() {
        return (
            <div className="user">
                <Helmet title="User"/>
                <h1>User: {this.props.params.id}</h1>
            </div>
        );
    }
});

module.exports = User;
