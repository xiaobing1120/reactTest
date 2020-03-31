const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.resolve(__dirname, '../'))
//
module.exports = {
    entry: {
        index: ['./pages/index.js'],//, 
        //vendors: ['react', "react-dom"]
    },
    context: path.resolve(__dirname, '../'), // entry 和 module.rules.loader 选项
    output: {
        path: path.resolve(__dirname, '../dist'), // 目录对应一个绝对路径。
        publicPath: process.env.NODE_ENV == 'development' ? '/' : "http://abc.com/",
        filename: process.env.NODE_ENV == 'development' ? 'js/[name].[hash:6].js' : 'js/[name].[chunkhash:6].js', //每个输出 bundle 的名称
        chunkFilename: process.env.NODE_ENV == 'development' ? 'js/[name].[hash:6].js' : 'js/[name].[chunkhash:6].js'  //非入口(non-entry) chunk 文件的名称。
    },
    module: {
        rules: [{
                test: /\.less$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'img/[name].[hash:6].[ext]',
                        limit: "8192", //&name=images/[name].[hash:8].[ext]
                        //sModule: false
                    },
                }, ],
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../'),
        },
        extensions: [".ts", ".js", ".json", ".tsx", ".jsx"]
    },
    //externals: ["react", "react-dom"],
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            //SyntaxHighlighter: 'react-syntax-highlighter'
        })
    ],
    optimization: {
        splitChunks: {
            //chunks: "all" // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
            cacheGroups: {
                common: {
                    chunks: 'initial',
                    name: 'common', // 打包后的文件名
                    minSize: 0,
                    minChunks: 2 // 重复2次才能打包到此模块
                },
                vendor: {
                    priority: 1, // 优先级配置，优先匹配优先级更高的规则，不设置的规则优先级默认为0
                    test: /node_modules/, // 匹配对应文件
                    chunks: 'initial',
                    name: 'vendor',
                    minSize: 0,
                    minChunks: 1
                }
            }
        }
    }
}
