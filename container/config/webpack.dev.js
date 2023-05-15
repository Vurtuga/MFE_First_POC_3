const path = require("path");
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require( '../package.json');
const { VueLoaderPlugin } = require('vue-loader');
require ('dotenv').config ( { path: './.env' });

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
            remotes :{
               /*  dashboard: 'dashboard@http://localhost:8081/remoteEntry.js', */
                shared: 'shared@'+process.env.SharedURL+'/remoteEntry.js',
            },
            shared: packageJson.dependencies ,
        }),
        new VueLoaderPlugin()
    ]
}

module.exports = merge(commonConfig , devConfig);