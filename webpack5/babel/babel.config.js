module.exports = {
  //presets预设执行书序从后往前
  presets: [
    ["@babel/preset-env", {
      // false: 不用任何的polyfill相关的代码
      // usage: 代码中需要哪些polyfill, 就引用相关的api
      // entry: 手动在入口文件中导入 core-js/regenerator-runtime, 根据目标浏览器引入所有对应的polyfill
      // useBuiltIns: 'usage',
      // corejs: 3
    }],
    [
      "@babel/preset-react"
    ]
  ],
  //plugins执行顺序顺序执行
  //插件和 preset 都可以接受参数，参数由插件名和参数对象组成一个数组。preset 设置参数也是这种格式。
  plugins: [
    ["@babel/plugin-transform-runtime",{
      "corejs": 3
    }]
  ]
}
