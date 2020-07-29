const express = require('express');
const path = require('path');
const app = express();
const {createProxyMiddleware} = require("http-proxy-middleware");
var https = require('https');

const port = process.env.PORT || 3000;

const media_fallback_target = 'https://chotuve-media-server-dev.herokuapp.com/';
const media_target = `${process.env.REACT_APP_MEDIA_SERVER || process.env.MEDIA_SERVER || media_fallback_target}`;


app.use(express.static(path.join(__dirname, 'build')));

app.use(
  createProxyMiddleware('/media/api', {
    target: media_target,
    pathRewrite: {
      "^/media/api": "/api"
    },
    changeOrigin: true,
    logLevel: 'debug',
  })
);
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

console.log("Listening on port " + port);
app.listen(port);