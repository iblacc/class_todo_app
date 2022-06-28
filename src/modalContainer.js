import React from "react";

const ModalContainer = (props) => {
  return (
    <div className="modalContainer">
      <div className="modal">
        <h3 className="modal-header">Delete this item {props.number}?</h3>
        <div className="modalBtns">
          <button id="yesBtn" onClick={() => props.removeTodo(props.id)}>
            YES
          </button>
          <button id="noBtn" onClick={() => props.modalControl(false)}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;
