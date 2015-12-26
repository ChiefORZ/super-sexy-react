module.exports = {
    login: function(email, pass, cb) {

        // if(typeof window != 'undefined' && window.document) {
            // get token from window.jwt
        // } else {
            // get Cookie
        // }
        // var parsedJWT = jwt.decode
        // if(parsedJWT == valid) {
            // window.jwt = jwtToken;
            // if (cb) cb(true)
            // this.onChange(true)
        // } else {
            // clearCookie()
            // window.jwt = null;
            // if (cb) cb(false)
            // this.onChange(false)
        // }
        if(typeof window == 'undefined') return false;
        cb = arguments[arguments.length - 1]
        if (localStorage.token) {
            if (cb) cb(true)
            this.onChange(true)
            return
        }
        pretendRequest(email, pass, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
                if (cb) cb(true)
                this.onChange(true)
            } else {
                if (cb) cb(false)
                this.onChange(false)
            }
        })
    },

    getToken: function () {
        if(typeof window == 'undefined') return false;
        return localStorage.token
    },

    logout: function (cb) {
        if(typeof window == 'undefined') return false;
        delete localStorage.token
        if (cb) cb()
        this.onChange(false)
    },

    loggedIn: function () {
        if(typeof window == 'undefined') return false;
        return !!localStorage.token
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
    }, 0)
}
