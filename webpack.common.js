const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: { import: './src/js/index.js', dependOn: 'shared' },
        sum: { import: './src/js/sum.js', dependOn: 'shared' },
        shared: 'lodash',
        vendor: './src/js/vendor.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.html/,
                use: ['html-loader'],
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'SAP webpack workflow',
            filename: 'index.html',
            template: 'src/templates/template.html',
        }),
    ],
};
