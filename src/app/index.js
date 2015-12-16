import React from 'react';
import { render } from 'react-dom';
import { match, Router } from 'react-router';
import { createHistory } from 'history';

import routes from './routes/routes';

/** Create history object */
const history = createHistory();

/** Get pathname, search and hash from window.location */
const { pathname, search, hash } = window.location;

/** Current location */
const currentLocation = `${pathname}${search}${hash}`;

// Match route
match({ routes, location: currentLocation }, () => {
    // Start rendering to DOM
    render(
        <Router history={history}>
            { routes }
        </Router>,
        document.getElementById('main')
    )
});
