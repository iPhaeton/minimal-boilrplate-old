const path = require('path');
const express = require('express');
const webpackConfig = require('../webpack.config.js');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const compiler = webpack(webpackConfig);

const app = express();
const indexPath = path.join(__dirname, '/../dist/index.html');
const staticPath = path.join(__dirname, '/../dist');

app.use(express.static(staticPath));
app.use(webpackDevMiddleware(compiler, {publicPath: webpackConfig.output.publicPath}));

app.get('*', function (_, res) {
    res.sendFile(indexPath);
})

app.listen(process.env.PORT || 8080, function () {
    console.log(`Started at ${process.env.PORT || 8080}`);
});
