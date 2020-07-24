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



