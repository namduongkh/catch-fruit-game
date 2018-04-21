const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const glob = require("glob")
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: [...glob.sync('./src/*.js'), ...glob.sync('./src/*.ts')],
    // devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist',
    //     hot: true
    // },
    module: {
        rules: [{
                test: /\.(jpg|mp3)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            },
            // {
            //     test: /\.tsx?$/,
            //     use: 'ts-loader',
            //     exclude: /node_modules/
            // }
        ]
    },
    // resolve: {
    //     extensions: ['.tsx', '.ts', '.js']
    // },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Creative Game Prototype',
        }),
        new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['./dist'] }
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};