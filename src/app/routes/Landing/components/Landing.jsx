import React from 'react';

require('./styles.scss');

var Landing = React.createClass({

    render() {
        return (
            <div>
                <h2 className="landing-page-headline">Landing Page!</h2>
                <p>This page is only shown to unauthenticated users.</p>
                <p>Partial / Lazy loading. Open the network tab while you navigate. Notice that only the required components are downloaded as you navigate around.</p>
            </div>
        );
    }

});

module.exports = Landing;
