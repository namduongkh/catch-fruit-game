const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const glob = require("glob")
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const PATHS = require('./config/path');

module.exports = (env) => {
    return {
        mode: env == "dev" ? 'development' : 'production',
        // mode: 'development',
        entry: [
            ...glob.sync('./app/libs/*.js'),
            ...glob.sync('./app/*.js')
        ],
        module: {
            rules: [{
                test: /\.(mp3)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            },]
        },
        plugins: [
            new CleanWebpackPlugin([PATHS.dist, PATHS.build]),
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
                server: { baseDir: [PATHS.dist] }
            })
        ],
        output: {
            filename: env == "dev" ? 'bundle.js' : 'bundle.min.js',
            path: env == "dev" ? PATHS.dist : PATHS.build,
        }
    };
};