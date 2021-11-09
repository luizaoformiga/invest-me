import React, { useState } from "react";
import Modal from "react-modal";

import store from "../../../store";

const customStyles = {
  content: {
    alignItens: "center",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    border: "none",
    backgroundColor: "#F44336",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

let subtitle: any;

export const FooterPay: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(): void {
    setIsOpen(true);
  }

  function afterOpenModal(): void {
    subtitle.style.color = "#f00";
  }

  function closeModal(): void {
    setIsOpen(false);
    window.location.href = "/";
  }

  const handleEraseItem = (id: any): void => {
    store.dispatch({ type: "product/erase", payload: id });
    console.log("removes", store.getState());
  };

  return (
    <footer>
      <div id="root-modal">
        <button className="finalization" onClick={openModal}>
          FINALIZAR
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
            OBrigado e volte sempre
          </h2>
          <button onClick={closeModal}>close</button>
        </Modal>
      </div>
      <button className="eraseCar" onClick={handleEraseItem}>
        LIMPAR CARRINHO
      </button>
    </footer>
  );
};
