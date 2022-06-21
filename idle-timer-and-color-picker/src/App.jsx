import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { IdleTimerContainer } from "./components/IdleTimerContainer";
import ColorPicker from "./components/ColorPicker";

function App() {
  
  return (
    <div>
      <div>
        {/* <IdleTimerContainer/> */}
        <ColorPicker />
      </div>
    </div>
  );
}

export default App;
