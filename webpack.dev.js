const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    stats: {
        loggingDebug: ['sass-loader'],
    },
    output: {
        // this output is for the browser
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        watchFiles: ['src'],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    { loader: 'style-loader' }, // 3. Inject styles into DOM
                    { loader: 'css-loader', options: { sourceMap: true } }, //2. Turns css into commonjs
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }, //1. Turns sass into css
                ],
            },
        ],
    },
});
