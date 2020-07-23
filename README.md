# webpack-study
webpack学习随手笔记


----
### devServer的部署

需要安装包 webpack-dev-server，在配置中进行devServer选项的配置后，使用webpack-dev-server命令进行启动。

devServer配置：
* contentBase
* compress
* port 
* open 
----

### 提取css成单独文件

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




