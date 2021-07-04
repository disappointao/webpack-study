const {resolve} = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "built.js",
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options: {
                    limit:10*1024,
                    name:'[hash:5].[name].[ext]',
                    outputPath:'img'
                }
            },
            {
              test:/\.html$/,
              loader:'html-loader'
            },
            {
                exclude: /\.(less|css|js|html|jpg|png|gif)$/,
                loader:'file-loader',
                options:{
                    name:'[hash:8].[ext]',
                    outputPath:'media'
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode:'development',
    devServer: {
        contentBase:resolve(__dirname,'build'),
        port:3000,
        open:true,
        compress:true
    }
}
