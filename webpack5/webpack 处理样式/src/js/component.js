// import "css-loader!../css/index.css";
import "../css/index.css";
import "../css/a.less";
import "../css/b.scss";

function component() {
  const element = document.createElement("div");

  element.innerHTML = ["Hello", "Webpack"].join(" ");
  element.className = "content a b";

  return element;
}

document.body.appendChild(component());
