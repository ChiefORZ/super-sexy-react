// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import App from './../components/App';
import auth from './../utils/auth';

/**
 * Protected routes that don't share the dashboard UI
 */
function redirectToLogin(nextState, replaceState) {
    if (!auth.loggedIn()) {
        replaceState({
            nextPathname: nextState.location.pathname
        }, '/login');
    }
}

/**
 * Unauthenticated routes
 * Redirect to dashboard if user is already logged in
 */
function redirectToDashboard(nextState, replaceState) {
    if (auth.loggedIn()) {
        replaceState(null, '/');
    }
}

export default {
    component: require('./../components/App'),
    childRoutes: [
        { path: '/',
            getComponent: (location, cb) => {
                // Share the path
                // Dynamically load the correct component
                if (auth.loggedIn()) {
                    return require.ensure([], (require) => {
                        cb(null, require('./Dashboard'));
                    }, 'dashboard');
                }
                return require.ensure([], (require) => {
                    cb(null, require('./Landing'));
                }, 'landing');
            },
            indexRoute: {
                getComponent: (location, cb) => {
                    // Only load if we're logged in
                    if (auth.loggedIn()) {
                        return require.ensure([], (require) => {
                            cb(null, require('./Subroute/components/Subroute'));
                        }, 'subroute');
                    }
                    return cb();
                }
            },
            childRoutes: [
                require('./Subroute')
            ]
        },
        { onEnter: redirectToDashboard,
          childRoutes: [
              // Unauthenticated routes
              // Redirect to dashboard if user is already logged in
              require('./Login')
              // ...
          ]
        },
        { onEnter: redirectToLogin,
          childRoutes: [
              // Protected routes that don't share the dashboard UI
              require('./User')
              // ...
          ]
        },
        require('./Async'),
        require('./Logout')

    ]
}

// <Route component={ App }>
//   { /* Home (main) route */ }
//   <Route path="/" component={ Dashboard }>
//     <Route path="/subroute" component={ Subroute } />
//   </Route>
//   { /* Routes if the user is already logged in */ }
//   <Route onEnter={ redirectToDashboard }>
//     <Route path="/login" component={ Login } />
//   </Route>
//   { /* Routes requiring login */ }
//   <Route onEnter={ redirectToLogin }>
//     <Route path="/user/:id" component={ User } />
//   </Route>
//   { /* Routes */ }
//   <Route path="/async" component={ Async } />
//   <Route path="/logout" component={ Logout }/>
// </Route>
