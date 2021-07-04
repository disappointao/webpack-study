const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry:'./src/js/index.js',
    output: {
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules: [
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            ident:'postcss',
                            plugins:()=>[
                                require('autoprefixer')
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        })
    ],
    mode:'development'
}
