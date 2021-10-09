const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].[contenthash:8].js"
    },
    target: 'web',
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        compact: true,
                    }
                },
                exclude: /node_moudles/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            filename: "index.html",
            template: "./src/index.html",
        })
    ],
    devServer: {
        port: 4200,
    }
}
