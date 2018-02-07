const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devtool: 'inline-source-map',
};