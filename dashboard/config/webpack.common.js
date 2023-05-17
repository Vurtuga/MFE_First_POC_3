const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output:{
        filename: '[name].[contenthash].js',
    },
    module:{
        rules: [
            {
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
                use: [
                    { loader: 'file-loader'}
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.scss|\.css$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets: ['@vue/cli-plugin-babel/preset','@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            }
        ],
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
    },
    plugins: [
        new VueLoaderPlugin(),
        
    ]
}