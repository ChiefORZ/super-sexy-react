import cookie from 'react-cookie';

module.exports = {
    login: function(email, pass, cb) {
        cb = arguments[arguments.length - 1];
        if (cookie && cookie.load('token')) {
            if (cb) cb(true);
            this.onChange(true);
            return;
        }
        // login and logout is only possible on the client-side
        if(typeof window != 'undefined') {
            pretendRequest(email, pass, (res) => {
                if (res.authenticated) {
                    cookie.save('token', res.token);
                    if (cb) cb(true);
                    this.onChange(true);
                } else {
                    if (cb) cb(false);
                    this.onChange(false);
                }
            });
        }
    },

    getToken: function () {
        return cookie.load('token');
    },

    logout: function (cb) {
        cookie.remove('token');
        if (cb) cb();
        this.onChange(false);
    },

    loggedIn: function () {
        return !!cookie.load('token');
    },

    onChange: function () {}
}

function pretendRequest(email, pass, cb) {
    setTimeout(() => {
        if (email === 'joe@example.com' && pass === 'password') {
            cb({
                authenticated: true,
                token: Math.random().toString(36).substring(7)
            })
        } else {
            cb({ authenticated: false })
        }
    }, 100);
};
