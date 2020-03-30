const path = require('path'),
    merge = require('webpack-merge'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin');
    config = require('./config');



module.exports = merge(config, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin()
    ]
})