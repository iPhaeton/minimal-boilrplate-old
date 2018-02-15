const vars = require('dotenv').load({ path: `.env.${process.env.NODE_ENV}` });
console.log(`Loaded environment variables for ${process.env.NODE_ENV}:`);
console.log(vars && vars.parsed);

const webpack = require('webpack');

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
        modules: ['app', 'node_modules'],
        extensions: [ '.tsx', '.ts', ".jsx", ".js" ]
    },
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.EnvironmentPlugin(Object.assign(
            vars.parsed ? vars.parsed : {},
            {
                NODE_ENV: process.env.NODE_ENV || 'development',
            })),
        new HtmlWebpackPlugin({
            template: path.resolve(process.cwd(), 'app/index.html'),
        }),
    ].concat(options.plugins || []),
    devtool: options.devtool,
});
