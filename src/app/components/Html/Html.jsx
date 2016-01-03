import React from 'react';
import { renderToString } from 'react-dom/server';
/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the render.jsx file.
 */

var Html = React.createClass({
    render: function() {
        const {assets, children} = this.props;
        const content = children? renderToString(children): '';
        return (
            <html lang="en-us">
                <head>
                    <script src={assets.javascript.vendor} charSet="UTF-8"/>
                    {/* styles (will be present only in production with webpack extract text plugin) */}
                    {Object.keys(assets.styles).map((style, key) =>
                        <link href={assets.styles[style]} key={key} media="screen, projection"
                          rel="stylesheet" type="text/css" charSet="UTF-8"/>
                    )}
                </head>
                <body>
                    <div id="main" dangerouslySetInnerHTML={{__html: content}} />
                    <script src={assets.javascript.app} charSet="UTF-8"/>
                </body>
            </html>
        );
    }
});

module.exports = Html;
