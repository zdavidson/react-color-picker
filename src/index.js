import React from "react";
import ReactDOM from "react-dom";

import Color from "./Color.js";
import "./index.css";

class Picker extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedColor: "red",
    };
    this.selectColor = this.selectColor.bind(this);
  }

  selectColor(colorName) {
    this.setState({
      selectedColor: colorName,
    });
  }

  render() {
    return (
      <div
        id="container"
        className="container mt-4 mx-auto bg-light rounded shadow d-flex flex-column align-items-center"
      >
        <h1 className="m-5">Color Picker</h1>
        <div id="nav-bar" className="d-flex flex-column align-items-center">
          <h2 className="mb-4">Currently selected: </h2>
          <div
            id="selectedColorName"
            className={`mb-4 ${this.state.selectedColor}`}
          >
            {this.state.selectedColor}
          </div>
        </div>
        <div id="colors-list">
          <Color color="red" selectColor={this.selectColor} />
          <Color color="blue" selectColor={this.selectColor} />
          <Color color="green" selectColor={this.selectColor} />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Picker />, document.getElementById("app"));
