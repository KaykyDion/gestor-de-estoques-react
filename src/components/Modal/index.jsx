import { useState } from "react";
import Button from "../Button";
import { ModalStyle } from "./styles";

// eslint-disable-next-line react/prop-types
export default function Modal({ children }) {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }
  return (
    <ModalStyle>
      <Button text={"..."} handleClick={toggleModal} />

      {modal && (
        <div>
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modalContent">{children}</div>
        </div>
      )}
    </ModalStyle>
  );
}
