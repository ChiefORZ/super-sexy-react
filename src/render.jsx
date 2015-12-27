/**
 * Render react components server side with initialState
 */
import React from 'react';
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import routes from './app/routes/routes';
import cookie from 'react-cookie';

export default function handleRender(req, res) {
    cookie.plugToRequest(req, res);

    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {

        if (error) {
            res.status(500).send(error.message);
        }
        else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        }
        else if (renderProps) {

            var html = renderToString(
                <RoutingContext {...renderProps} />
            );

            res.render('boiler.ejs', {
                app: html,
                data: JSON.stringify({})
            });
        }
        else {
            res.status(404).send('Not found')
        }
    });
};
