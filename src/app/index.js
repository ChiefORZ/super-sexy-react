import React from 'react';
import { render } from 'react-dom';
import { match, Router } from 'react-router';
import { createHistory } from 'history';
import AsyncProps from 'async-props';

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
        <Router
          RoutingContext={AsyncProps}
          history={history}
          renderLoading={() => <div>Loading...</div>}>
            { routes }
        </Router>,
        document.getElementById('main')
    )
});
