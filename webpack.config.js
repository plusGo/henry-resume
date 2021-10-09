const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].[contenthash:8].js"
    },
    target: 'web',
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components')
        },
        extensions: ['.jsx','.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(js(x?)|ts(x?))$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            compact: true,
                        }
                    },
                    'ts-loader'
                ],
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
