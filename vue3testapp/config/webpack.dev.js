const path = require("path");
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require( '../package.json');
const { VueLoaderPlugin } = require("vue-loader");

const devConfig = {
    mode: 'development',
    entry: path.resolve(__dirname, "../src/main.js"),
    output:{
        publicPath: `http://localhost:8082/`,
    },
    devServer:{
        port: 8082,
        historyApiFallback: true,
        headers:{
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'vue3testapp',
            filename: 'remoteEntry.js',
            exposes:{
                './Vue3TestApp':'./src/bootstrap'
            },
            remotes :{
                shared: 'shared@http://localhost:8084/remoteEntry.js',
            },
            shared: packageJson.dependencies ,
        }),
    ]
}

module.exports = merge(commonConfig , devConfig);