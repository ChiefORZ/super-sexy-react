import React from 'react';
import Helmet from 'react-helmet';

require('./styles.scss');

var Landing = React.createClass({

    render() {
        return (
            <div>
                <Helmet title="Landing"/>
                <h2 className="landing-page-headline">Landing Page!</h2>
                <p>This page is only shown to unauthenticated users.</p>
                <p>Partial / Lazy loading. Open the network tab while you navigate. Notice that only the required components are downloaded as you navigate around.</p>
            </div>
        );
    }

});

module.exports = Landing;
