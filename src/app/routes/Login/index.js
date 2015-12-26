// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

module.exports = {
    path: '/login',
    getComponent: (location, cb) => {
        require.ensure([], (require) => {
            cb(null, require('./components/Login'));
        }, 'login');
    }
}
