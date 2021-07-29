const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader: "css-loader",
        //use: ["css-loader"],
        use:[
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use:["style-loader","css-loader",
          {
            loader: "postcss-loader",
            //可单独编写配置文件postcss.config.js
            // options:{
            //   postcssOptions:{
            //     plugins: [
            //       require("autoprefixer")
            //     ]
            //   }
            // }
          },
          "less-loader"]
      },
      {
        test: /\.scss$/,
        use:["style-loader","css-loader","sass-loader"]
      },
      // {
      //   test:/\.(png|jpe?g|gif|svg)$/,
      //   use:[
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name:"img/[name][hash:6].[ext]"
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.ttf|eot|woff2?$/i,
        use:[
          {
            loader: 'file-loader',
            options: {
              name:"font/[name].[ext]"
            }
          }
        ]
      },
      //url-loader能将符合要求的图片转换为base64的形式
      {
        test:/\.(png|jpe?g|gif|svg)$/,
        use:[
          {
            loader: 'url-loader',
            options: {
              limit:10*1024,
              name:"img/[name][hash:6].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "处理CSS"
    })
  ]
}