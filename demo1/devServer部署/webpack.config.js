const {resolve} = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output: {
        filename: "built.js",
        path:resolve(__dirname,'build')
    },
    module: {
        rules: [
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
        })
    ],
    mode:'development',
    devServer: {
        contentBase:resolve(__dirname,'build'),
        compress:true,
        port:3000,
        open:true
    }
}
