import React from 'react';
import Helmet from 'react-helmet';

const Async = React.createClass({

    statics: {
        loadProps: function(params, cb) {
            setTimeout(function() {
              cb(null, {
                  async: 'async'
              });
            }, 2000);
        }
    },

    render() {
        return (
            <div className="Async">
                <Helmet title="Async"/>
                <h1>{ this.props.async }</h1>
            </div>
        );
    }

});

module.exports = Async;
