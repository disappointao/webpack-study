import Vue from "vue";
import React from "react";
import ReactDom from "react-dom";
import App from "./App.vue";
import App2 from "./App.jsx";
import { num } from "./Math";

console.log("主模块运行");
console.log(num(3, 4));
if (module.hot) {
  module.hot.accept("./Math.js", () => {
    console.log("Math模块更新");
  });
}
new Vue({
  render: (h) => h(App),
}).$mount("#vue");

ReactDom.render(<App2 />, document.getElementById("react"));
