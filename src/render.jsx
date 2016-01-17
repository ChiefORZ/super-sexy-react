/**
 * Render react components server side with initialState
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from './app/routes/routes';
import cookie from 'react-cookie';
import AsyncProps, { loadPropsOnServer } from 'async-props';

import Html from './app/components/Html'

export default function handleRender(req, res) {

    if(__DEVELOPMENT__) {
        // Do not cache webpack stats: the script file would change since
        // hot module replacement is enabled in the development env
        webpackIsomorphicTools.refresh();
    }

    cookie.plugToRequest(req, res);

    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message);
        }
        else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        }
        else if (renderProps) {
            loadPropsOnServer(renderProps, (err, asyncProps) => {
                res.send('<!doctype html>\n' +
                    renderToString(
                        <Html assets={ webpackIsomorphicTools.assets() } asyncProps={ asyncProps }>
                            { __DISABLE_SSR__? null: <AsyncProps { ...renderProps } { ...asyncProps } /> }
                        </Html>
                    )
                );
            });
        }
        else {
            res.status(404).send('Not found')
        }

    });
};
