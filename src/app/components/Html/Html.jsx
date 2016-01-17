import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';
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

    statics: {
      loadProps: function(params, cb) {
        cb(null);
      }
    },

    render: function() {
        const {assets, children, asyncProps} = this.props;
        const content = children? renderToString(children): '';
        const head = Helmet.rewind();
        return (
            <html lang="en-us">
                <head>
                    { head && head.base.toComponent() }
                    { head && head.title.toComponent() }
                    { head && head.meta.toComponent() }
                    { head && head.link.toComponent() }
                    { head && head.script.toComponent() }
                    <script src={assets.javascript.vendor} charSet="UTF-8"/>
                    {/* styles (will be present only in production with webpack extract text plugin) */}
                    {Object.keys(assets.styles).map((style, key) =>
                        <link href={assets.styles[style]} key={key} media="screen, projection"
                          rel="stylesheet" type="text/css" charSet="UTF-8"/>
                    )}
                </head>
                <body>
                    <div id="main" dangerouslySetInnerHTML={{__html: content}} />
                      { asyncProps && <script dangerouslySetInnerHTML={{__html: `window.__ASYNC_PROPS__=${serialize(asyncProps.propsArray)};`}} charSet="UTF-8"/> }
                    <script src={assets.javascript.app} charSet="UTF-8"/>
                </body>
            </html>
        );
    }
});

module.exports = Html;
