const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/js/index.js',
    output: {
        filename: "built.js",
        path:resolve(__dirname,'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets:[
                        [
                            '@babel/preset-env',
                            //按需加载
                            {
                                useBuiltIns:'usage',
                                corejs:'version3'
                            }
                        ]
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify:{
                //移除空格
                collapseWhitespace:true,
                //删除注释
                removeComments:true
            }
        })
    ],
    mode:'production'
}
