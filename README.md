# webpack-study
webpack学习随手笔记


----
### *devServer的部署*

需要安装包 webpack-dev-server，在配置中进行devServer选项的配置后，使用webpack-dev-server命令进行启动。

devServer配置：
* contentBase
* compress
* port 
* open 
----

### *提取css成单独文件*

使用插件 mini-css-extract-plugin，在plugins与module中的loader配置中使用该插件，eg:
````
new miniCssExtractPlugin({
      filename: 'css/built.css'
    })

{
  test:/\.css$/,
  use:[
      miniCssExtractPlugin.loader,
      'css-loader'
      ]
  }
````
---
### *css兼容性处理*
* 安装postcss-loader
* 安装postcss相关的插件
  * Autopreﬁxer：自动补全浏览器私有前缀
  * postcss-preset-env：支持现代的 css 语法
  * ...
* 对postcss-loader进行配置
  * 可以在loader中进行配置
  ````
  options: {
            ident:'postcss',
            plugins:()=>[
              require('autoprefixer')
              ]
            }
  ````
  * 也可以在根目录新建 postcss.config.js文件在其中进行配置
  ````
  let autoprefixer=require('autoprefixer')//导入自动添加前缀的插件
  module.exports={
      plugins:[autoprefixer]//挂载插件
  }

  ````
* 在package.json中进行browserslist的配置(或单独指定.browserslistrc 文件)

指定了项目的目标浏览器的范围，这个值会被postcss相关插件用来确定需要转译的 JavaScript 特性和需要添加的 CSS 浏览器前缀。
````
"browserslist": [
    "last 1 version",
    "> 1%",
    "maintained node versions",
    "not dead"
  ]　　
````

---
### *css压缩*
使用插件 optimize-css-assets-webpack-plugin

---
### *eslint语法检查*
* 安装 eslint eslint-loader eslint-config-airbnb-base(采用airbnb-base规范) 
 eslint-plugin-import eslint
 
* 在loader中对eslint进行配置，注意设置检查目录限制
````
{
    test: /\.js$/,
    //排除node_modules中的相关js,
    //include: [resolve(__dirname, 'src')]或者使用include进行指定检查目录
    exclude: /node_modules/,
    loader: 'eslint-loader',
    options: {
        // 自动修复eslint的错误
        fix: true
    } 
}
````
* 配置eslint规则  
  * 通过在根目录新建.eslintrc进行配置
  * 在package.json中配置eslintConfig选项


### *js兼容性设置*
安装babel-loader @babel/core @babel/preset-env @babel/polyfill core-js
* 对babel进行配置，可在根项目路径上建立.babelrc文件进行配置,也可以在loader中进行配置
````
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": "version3",
        "targets": {
          "chrome": "60",
          "firefox": "60",
          "ie": "9",
          "safari": "10",
          "edge": "17"
        }
      }
    ]
  ]
}
.babelrc
````

@babel/preset-env用于转换基本的js语法，如箭头函数等。但不能识别promise等更高级的语法，此时需要试用库@babel/profill。

这个库将会模拟一个完全的 ES2015+ 的环境。这意味着你可以使用 新的内置语法 比如 promise 或者 WeakMap， 静态方法比如Array.from 或 Object.assign, 实例方法 比如 Array.prototype.includes 和 generator 函数。
   * 可以在入口函数的js中通过import方式进行引入
   * 与@babel/preset-env结合使用时通过配置useBuiltIns与corejs来实现按需打包，且不用手动引入
      
### *html与js压缩*

* html的压缩需要在使用html-webpack-plugin时进行配置
````
new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify:{
                //移除空格
                collapseWhitespace:true,
                //删除注释
                removeComments:true
            }
        })
````
* js的压缩仅需要将mode改为生产模式 `mode='production'`






