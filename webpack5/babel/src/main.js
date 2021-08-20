//@babel/polyfill 使用(目前已不推荐使用该包), 在入口js文件中import引入或在webpack中配置 entry: ["@babel/polyfill","./src/main.js"]
// import "@babel/polyfill"

import "./js/component";
import "./test.jsx"


function sum (a, b){
  return a + b
}

sum(1,2)
const b = () => {
  console.log('箭头函数')
}
b()
const c = () => {
  return Promise.resolve('333')
}
c().then( val => {
  console.log(val)
})
async function count(){
  const a = await new Promise((resolve) => {
    resolve(3)
  })
  console.log(a)
}
count()
class Point{
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  getX(){
    return this.x
  }
}
let p = new Point(3,5)
p.getX()
