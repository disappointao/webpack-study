import React, { Component } from "react";
import About from "./component/About.jsx";
import New from "./component/New.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    message: "Hello React",
  };

  render() {
    return (
      <div style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>
        {this.state.message}
        <About />
        <New />
      </div>
    );
  }
}
export default App;
