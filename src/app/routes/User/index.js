// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

module.exports = {
    path: '/user/:id',
    getComponent: (location, cb) => {
        require.ensure([], (require) => {
            cb(null, require('./components/User'));
        }, 'user');
    }
}
