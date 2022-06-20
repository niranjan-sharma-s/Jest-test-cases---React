/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import "./App.css";

export const camelCaseSpace = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newStr += " " + str[i];
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

camelCaseSpace("red");

function App() {
  const [color, setColor] = useState("red");
  const [disable, setDisable] = useState(false);
  const bgColor = color === "red" ? "blue" : "red";
  // const bgColor = disable?'grey':'red'

  return (
    <div className="App">
      <button
        style={{ backgroundColor: disable ? "grey" : color }}
        onClick={() => setColor(bgColor)}
        disabled={!!disable}
      >
        Click to Change Color to {bgColor}
      </button>
      <label htmlFor="disable-button-checkbox">disable button</label>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onClick={() => setDisable(!disable)}
      />
    </div>
  );
}

export default App;
