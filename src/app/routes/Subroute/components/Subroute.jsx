import React from 'react';
import Helmet from 'react-helmet';

const Subroute = React.createClass({

    statics: {
        loadProps: function(params, cb) {
            cb(null);
        }
    },

    render() {
        return (
            <div className="subroute">
                <Helmet title="Subroute"/>
                <h2>Subroute!</h2>
            </div>
        );
    }

});

module.exports = Subroute;
