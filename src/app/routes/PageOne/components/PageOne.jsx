import React from 'react';
import Helmet from 'react-helmet';

const PageOne = React.createClass({
    render() {
        return (
            <div className="page">
                <Helmet title="Page"/>
                <h2>Page One!</h2>
            </div>
        );
    }
});

module.exports = PageOne;
