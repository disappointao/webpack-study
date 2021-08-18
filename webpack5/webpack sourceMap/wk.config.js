const path = require("path")
const { DefinePlugin } = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: "./src/main.js",
  //规则
  //"^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$
  //开发阶段使用： source-map或者cheap-module-source-map
  //生产阶段不用设置，或设置为false
  devtool:false,
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
        ],
        //或者使用内置模块
        // type: "asset/resource", file-loader的效果
        // type: "asset/inline", url-loader
        // type: 'asset/resource',
        // generator: {
        //   filename: "font/[name][hash:6][ext]"
        // }
      },
      //url-loader能将符合要求的图片转换为base64的形式
      // {
      //   test:/\.(png|jpe?g|gif|svg)$/,
      //   use:[
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit:10000000,
      //         name:"img/[name][hash:6].[ext]"
      //       }
      //     }
      //   ]
      // },
      //
      //使用webpack5中提供的模块进行处理
      {
        test:/\.(png|jpe?g|gif|svg)$/,
        type:"asset",
        generator:{
          filename: 'img/[name][hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "处理CSS"
    }),
    new CleanWebpackPlugin(),
    new DefinePlugin({
      //注意定义变量时的值
      BASE_URL: JSON.stringify("./ico/") // 或 '"./"'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions:{
            ignore: [
              "**/index.html"
            ]
          },
          to: 'ico'
        }
      ]
    })
  ]
}