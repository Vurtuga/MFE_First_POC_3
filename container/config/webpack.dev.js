const path = require("path");
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require( '../package.json');
const { VueLoaderPlugin } = require('vue-loader');

const devConfig = {
    mode: 'development',
    entry: path.resolve(__dirname, "../src/main.js"),
    output:{
        publicPath: `http://localhost:8080/`,
    },
    devServer:{
        port: 8080,
        historyApiFallback: true,
        headers:{
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'container',

            shared: packageJson.dependencies ,
        }),
        new VueLoaderPlugin()
    ]
}

module.exports = merge(commonConfig , devConfig);