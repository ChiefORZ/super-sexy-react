// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

import App from './../components/App';
import Index from './../components/Hello';
import Dashboard from './Dashboard';

export default {
    path: '/',
    component: App,
    childRoutes: [
        Dashboard
    ],
    getChildRoutes(location, cb) {
        // Added ensure to type definition to enable code splitting in webpack
        require.ensure([], (require) => {
            cb(null, [require('./Async').default])
        }, 'asyncModule')
    },
    indexRoute: {
        component: Index
    }
}
