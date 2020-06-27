const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        createProxyMiddleware("/api/login", {
        target: `${process.env.REACT_APP_AUTH_SERVER}`,
        changeOrigin: true
    })
    );
};