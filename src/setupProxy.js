// Devin Brueberg
// CSC435 Adv Web App Development
// Want Application - server/index.js
// April 20, 2021
// Last Edited (Initials, Date, Edits):

// NEEDED FOR HEROKU SINCE ADDING 'proxy' IN THE PACKAGE.JSON 
// DOES NOT WORK

// importing the setup proxy
const { createProxyMiddleware } = require('http-proxy-middleware');

// This creates and exports a proxy for localhost:500
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};