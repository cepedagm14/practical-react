import { useState } from "react";
import Modal from "react-modal";
useState;
import "./App.css";

Modal.setAppElement("#root");
function App() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  return (
    <div className="App">
      <h3>Modals</h3>
      <button onClick={() => setmodalIsOpen(true)}>Abrir modal</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            color: "orange",
          },
        }}
      >
        <h2>Titulo</h2>
        <p>Lorem ipsum dolor sit amet.</p>

        <button onClick={() => setmodalIsOpen(false)}>Cerrar modal</button>
      </Modal>
    </div>
  );
}

export default App;
