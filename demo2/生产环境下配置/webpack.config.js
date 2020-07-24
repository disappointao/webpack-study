const {resolve} =require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const commonCssLoader = [
  miniCssExtractPlugin.loader,
  'css-loader',
  {
    loader:'postcss-loader',
    options: {
      ident:"postcss",
      plugins:()=>[require('autoprefixer')]
    },
  },
];
module.exports = {
  entry:'./src/js/index.js',
  output:{
    filename: 'built.js',
    path:resolve(__dirname,'build')
  },
  module:{
    rules:[
      {
        test:/\.less$/,
        use:[...commonCssLoader],
      },
      {
        test:/\.css$/,
        use:[
          ...commonCssLoader
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        loader: 'file-loader',
        options: {
          name:'[hash:8].[name].[ext]',
          outputPath:'media'
        },
      },
      {
        test:/\.(jpg|gif|png)$/,
        loader: 'url-loader',
        options: {
          limit:8*1024,
          name:'[hash:8].[name].[ect]',
          outputPath:'img'
        },
      },
      {
        test:/\.html$/,
        loader:'html-loader'
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        options: {
          presets:[
            [
              '@babel/preset-env',
              {
                useBuiltIns:"usage",
                corejs:{version:3}
              }
            ]
          ]
        },
      },
      {
        test:/\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader:"eslint-loader",
        options:{
          fix:true
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      minify: false,
    }),
    new miniCssExtractPlugin({
      filename:'css/main.css'
    }),
    new optimizeCssAssetsWebpackPlugin()
  ],
  mode:'production',
};
