const path = require("path");
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require( '../package.json');

const devConfig = {
    mode: 'development',
    entry: path.resolve(__dirname, "../src/main.js"),
    output:{
        publicPath: `http://localhost:8081/`,
    },
    devServer:{
        port: 8081,
        historyApiFallback: true,
        headers:{
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'dashboard',
            filename: 'remoteEntry.js',
            exposes:{
                './DashboardApp':'./src/bootstrap'
            },
            shared: packageJson.dependencies ,
        }),
        /* new VueLoaderPlugin() */
    ]
}

module.exports = merge(commonConfig , devConfig);