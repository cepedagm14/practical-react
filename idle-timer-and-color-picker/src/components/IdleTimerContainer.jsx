import { useState, useRef } from "react";
import Modal from "react-modal";
import { IdleTimerProvider, useIdleTimerContext } from "react-idle-timer";

Modal.setAppElement("#root");

export function IdleTimerContainer() {
  const [login, setLogin] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const sessionTimeOutRef = useRef(null);

  const onPrompt = () => {
    // Fire a Modal Prompt
  };

  const onIdle = () => {
    console.log("user is idle");
    setModalIsOpen(true);
    sessionTimeOutRef.current = setTimeout(logOut, 5000);
  };

  const onActive = (event) => {
    // Close Modal Prompt
    // Do some active action
  };

  const onAction = (event) => {
    // Do something when a user triggers a watched event
  };

  const logOut = () => {
    console.log("logout.....");
    setModalIsOpen(false);
    setLogin(false);
    clearTimeout(sessionTimeOutRef.current);
  };

  const stayActive = () => {
    console.log("active.....");
    clearTimeout(sessionTimeOutRef.current);
    setModalIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={modalIsOpen}>
        <h2>5 minutes of inactivity have passed!</h2>
        <p>You will be logged out soon</p>
        <div>
          <button onClick={logOut}>Log me out</button>
          <button onClick={stayActive}>Keep me signed</button>
        </div>
      </Modal>
      <IdleTimerProvider
        timeout={5 * 1000}
        onPrompt={onPrompt}
        onIdle={onIdle}
        onActive={onActive}
        onAction={onAction}
      >
        {login ? <h2>Hello Sr. Bruce Wayne</h2> : <h1>Log in</h1>}
      </IdleTimerProvider>
    </>
  );
}
