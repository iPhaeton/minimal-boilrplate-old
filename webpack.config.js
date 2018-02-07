const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    APP: path.resolve(__dirname, 'app'),
};

module.exports = {
    entry: path.join(paths.APP, 'app.tsx'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', ".jsx", ".js" ]
    },
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.APP, 'index.html'),
        }),
    ],
    devtool: (process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'local') && 'inline-source-map',
};