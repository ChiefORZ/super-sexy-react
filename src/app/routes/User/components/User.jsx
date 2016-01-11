import React from 'react';
import Helmet from 'react-helmet';

const User = React.createClass({

    statics: {
        loadProps: function(params, cb) {
            cb(null);
        }
    },

    render() {
        return (
            <div className="user">
                <Helmet title="User"/>
                <h1>User: { this.props.params.id }</h1>
            </div>
        );
    }

});

module.exports = User;
