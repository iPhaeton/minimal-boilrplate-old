const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    APP: path.resolve(__dirname, 'app'),
};

// Webpack configuration
module.exports = {
    entry: path.join(paths.APP, 'app.tsx'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.APP, 'index.html'),
        }),
    ],
    devServer: {
        contentBase: paths.APP,
    },
};