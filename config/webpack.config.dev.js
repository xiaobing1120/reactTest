const path = require('path'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    config = require('./config');
   


module.exports = merge(config, {
    mode: 'development',
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,  //当使用 HTML5 History API 时，任意的 404 响应都会跳回首页
        host: '0.0.0.0',
        disableHostCheck: true, 
        hot: true,
        compress: true,
        port: 9000
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})