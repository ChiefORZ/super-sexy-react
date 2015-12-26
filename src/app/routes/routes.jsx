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
        }, '/login')
    }
}

/**
 * Unauthenticated routes
 * Redirect to dashboard if user is already logged in
 */
function redirectToDashboard(nextState, replaceState) {
    if (auth.loggedIn()) {
        replaceState(null, '/')
    }
}

export default {
    component: require('./../components/App'),
    childRoutes: [
        require('./Logout'),
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
                            cb(null, require('./PageOne/components/PageOne'));
                        }, 'pageone');
                    }
                    return cb();
                }
            },
            childRoutes: [
                require('./PageOne')
            ]
        }

    ]
}

// Routes:


// <Router>
//     <Route path="/" component={App}>
//         <Route path="calendar" component={Calendar} />
//         <Route path="course/:courseId" component={Course}>
//             <Route path="announcements" components={{
//               sidebar: AnnouncementsSidebar,
//               main: Announcements
//             }}>
//                 <Route path=":announcementId" component={Announcement} />
//             </Route>
//             <Route path="assignments" components={{
//               sidebar: AssignmentsSidebar,
//               main: Assignments
//             }}>
//                 <Route path=":assignmentId" component={Assignment} />
//             </Route>
//             <Route path="grades" component={CourseGrades} />
//         </Route>
//         <Route path="grades" component={Grades} />
//         <Route path="messages" component={Messages} />
//         <Route path="profile" component={Calendar} />
//     </Route>
// </Router>


// <Router>
//     <Route path="/contact"component={ Contact } />
//     <Route path="/faq"component={ FAQ } />
//     <Route path="/features"component={ Features } />
//     <Route path="/login"component={ Login } />
//     <Route path="/logout"component={ Logout } />
//     <Route path="/recover"component={ Recover } />
//     <Route path="/signup"component={ Signup }/>
//     <Route path="/" component={ App } indexRoute={ Index }>
//         <Route></Route>
//     </Route>
// </Router>

// <App>
//     <Index />
//     <Features />

// </App>

// Every Route
