const {resolve} = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename:'built.js',
        path: resolve(__dirname,'build')
    },
    module: {
        rules: [
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            //url-loader需要依赖于file-loader
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                    limit:10*1024,
                    name:'[hash:8].[name].[ext]'
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode:'development'
}
