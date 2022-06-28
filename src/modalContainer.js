import React from "react";

const ModalContainer = (props) => {
  return (
    <div class="modalContainer">
      <div class="modal">
        <h3 class="modal-header">Delete this item?</h3>
        <div class="modalBtns">
          <button id="yesBtn" onClick={() => props.removeTodo(props.todo.id)}>
            YES
          </button>
          <button id="noBtn" onClick={() => props.displayModal()}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;
