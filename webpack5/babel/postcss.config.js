//也可在webpack配置文件中导入loader时进行配置
module.exports = {
  plugins: [
    //postcss-preset-env将一些现代的CSS特性，转成大多数浏览器认识的CSS，并且会根据目标浏览器或者运行时环 境添加所需的polyfill,相当于已经内置了autoprefixer
    require("postcss-preset-env")
  ]
}