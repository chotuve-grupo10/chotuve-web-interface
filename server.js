const express = require('express');
const path = require('path');
const app = express();
const {createProxyMiddleware} = require("http-proxy-middleware");

const port = process.env.PORT || 3000;

const fallback_target = 'https://chotuve-auth-server-dev.herokuapp.com/';
const target = `${process.env.REACT_APP_AUTH_SERVER || process.env.AUTH_SERVER || fallback_target}`;

app.use(express.static(path.join(__dirname, 'build')));
app.use(
  createProxyMiddleware("/api/login", {
  target: target,
  changeOrigin: true
}));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

console.log("Listening on port " + port);
app.listen(port);