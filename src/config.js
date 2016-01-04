const environment = {
    development: {
        isProduction: false
    },
    production: {
        isProduction: true
    }
}[process.env.NODE_ENV || 'development'];

var dere = module.exports = Object.assign({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT,
    app: {
        titleTemplate: '%s | Super Sexy React',
        meta: [
            {name: 'description', content: 'All the modern best practices in one example.'},
            {charset: 'utf-8'},
            {property: 'og:site_name', content: 'React Redux Example'},
            {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
            {property: 'og:locale', content: 'en_US'},
            {property: 'og:title', content: 'React Redux Example'},
            {property: 'og:description', content: 'All the modern best practices in one example.'},
            {property: 'twitter:card', content: 'summary'},
            {property: 'twitter:site', content: '@erikras'},
            {property: 'twitter:creator', content: '@erikras'},
            {property: 'twitter:title', content: 'React Redux Example'},
            {property: 'twitter:description', content: 'All the modern best practices in one example.'},
            {property: 'twitter:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
            {property: 'twitter:image:width', content: '200'},
            {property: 'twitter:image:height', content: '200'}
        ]
    },

}, environment);