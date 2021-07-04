const {resolve} = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry:'./src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname,'build'),
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use:[
          miniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
    }),
    new miniCssExtractPlugin({
      filename: 'css/built.css'
    })
  ],
  mode:'development'
};
