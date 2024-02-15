import React from "react";
import "./App.css";
import MyButton from "./components/Button";

function App() {
  return (
    <div className="App">
      {/* <MyButton text="Click Me" /> */}
      <MyButton onClick={() => alert("Okay")} text="Click Me 2" />
    </div>
  );
}

export default App;
