// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require);

module.exports = {
    path: '/async',
    getComponent: (location, cb) => {
        return require.ensure([], (require) => {
            cb(null, require('./components/Async'));
        }, 'async');
    }
}
