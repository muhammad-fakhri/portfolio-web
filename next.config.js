const withPWA = require('next-pwa');

module.exports = withPWA({
  images: {
    domains: ['media-exp1.licdn.com'],
  },
  swcMinify: true,
});
