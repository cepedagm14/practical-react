import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
  return (
    <>
      <p>
        Something went wrong!<button onClick={closeToast}>cerrar</button>{" "}
      </p>
    </>
  );
};
const notify = () => {
  toast("notificacion basica", { position: toast.POSITION.TOP_LEFT });
  toast.success(<CustomToast />, { position: toast.POSITION.TOP_CENTER });
  toast.error("error", { position: toast.POSITION.TOP_RIGHT });

  toast.warn("warning", { position: toast.POSITION.BOTTOM_LEFT });
  toast.info("info", { position: toast.POSITION.BOTTOM_CENTER });
};

toast.configure();

function App() {
  return (
    <div className="App">
      <h2>manejo de toast</h2>
      <button onClick={notify}>notify!!</button>
    </div>
  );
}

export default App;
