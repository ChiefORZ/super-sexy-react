import React from 'react';
import Helmet from 'react-helmet';

require('./styles.scss');

var Landing = React.createClass({

    statics: {
      loadProps: function(params, cb) {
          cb(null);
      }
    },

    render() {
        return (
            <div>
                <Helmet title="Landing"/>
                <h2 className="landing-page-headline">Landing Page!</h2>
                <p>This page is only shown to unauthenticated users.</p>
                <p>Partial / Lazy loading. Open the network tab while you navigate. Notice that only the required components are downloaded as you navigate around.</p>
                { this.props.children || null }
            </div>
        );
    }

});

module.exports = Landing;
