const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true,
})

module.exports = withPWA({
    images: {
        domains: ['media-exp1.licdn.com']
    }
})