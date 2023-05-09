const path = require("path");
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require( '../package.json');

const devConfig = {
    mode: 'development',
    entry: path.resolve(__dirname, "../src/index.js"),
    output:{
        publicPath: `http://localhost:8084/`,
    },
    devServer:{
        port: 8084,
        historyApiFallback: true,
        headers:{
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'shared',
            filename: 'remoteEntry.js',
            exposes:{
                './AHBSUI':'./src/index'
            },
            shared: packageJson.dependencies ,
        }),
    ]
}

module.exports = merge(commonConfig , devConfig);