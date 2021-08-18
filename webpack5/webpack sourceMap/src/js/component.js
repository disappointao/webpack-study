// import "css-loader!../css/index.css";
import "../css/index.css";
import "../css/a.less";
import "../css/b.scss";
import sun from "../assets/img/sun.png"
const sun2 = require("../assets/img/sun2.jpg")

const a = BASE_URL
console.log(a)

b.length
function component() {
  const element = document.createElement("div");

  element.innerHTML = ["Hello", "Webpack"].join(" ");
  element.className = "content a b";

  const img = new Image()
  img.src = sun
  const img2 =new Image()
  img2.src = sun2.default
  element.appendChild(img)
  element.append(img2)

  // 创建一个i元素, 设置一个字体
  const iEl = document.createElement("i");
  iEl.className = "iconfont icon-ashbin why_icon";
  element.appendChild(iEl);

  return element;
}

document.body.appendChild(component());
