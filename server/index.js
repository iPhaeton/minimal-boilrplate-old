const path = require('path');
const express = require('express');
const webpackConfig = require('../internals/webpack');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const compiler = webpack(webpackConfig);

const app = express();
const indexPath = path.join(__dirname, '/../dist/index.html');
const staticPath = path.join(__dirname, '/../dist');

if (process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'development') {
    app.use(webpackDevMiddleware(compiler, {publicPath: webpackConfig.output.publicPath}));
}

app.use(express.static(staticPath));

app.get('*', function (_, res) {
    res.sendFile(indexPath);
})

app.listen(process.env.PORT || 8080, function () {
    console.log(`Started at ${process.env.PORT || 8080}`);
});
