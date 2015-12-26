// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

module.exports = {
    path: '/logout',
    getComponent: (location, cb) => {
        require.ensure([], (require) => {
            cb(null, require('./components/Logout'));
        }, 'logout');
    }
}
