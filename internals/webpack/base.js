const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (options) => ({
    entry: [
        path.resolve(process.cwd(), 'app/app.tsx')
    ].concat(options.entry || []),
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
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(process.cwd(), 'app/index.html'),
        }),
    ].concat(options.plugins || []),
    devtool: options.devtool,
});
