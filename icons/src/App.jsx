import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FaReact } from "react-icons/fa";
import { MdAnchor } from "react-icons/md";
import { IconContext } from "react-icons";

function App() {
  return (
    <div className="App">
      <IconContext.Provider value={{ color: "blue", size: "2rem" }}>
        <div className="App">
          <h3>Icons</h3>
          <FaReact color="purple" size={"10rem"} />
          <MdAnchor/>
          <FaReact />
          <MdAnchor />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default App;
