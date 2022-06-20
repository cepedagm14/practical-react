import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Tooltip
          title="Welcome to React"
          position="left"
          trigger="mouseenter"
          arrow
        >
          <button>ToolTips</button>
        </Tooltip>
      </header>
    </div>
  );
}

export default App;
