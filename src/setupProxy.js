const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        createProxyMiddleware('/auth/api', {
        target: `${process.env.REACT_APP_AUTH_SERVER}`,
        pathRewrite: {
          "^/auth/api": "/api"
        },
        changeOrigin: true,
        logLevel: 'debug',
    })
    );
};