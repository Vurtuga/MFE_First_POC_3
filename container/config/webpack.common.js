const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
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
                use: ['style-loader','css-loader']
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
    /* resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    }, */
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'Main Vue2 Container',
            templateParameters:{
                BASE_URL: `http://localhost:8080/`
            }
        })
    ]
}