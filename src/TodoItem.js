import React, { useEffect, useState } from "react";
import Modal from "./modalContainer";

const TodoItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal ? (
        <Modal
          id={props.todo.id}
          modalControl={setShowModal}
          number={props.numbering}
          removeTodo={props.removeTodo}
        />
      ) : null}
      <li>
        <div className="item-title">
          <h3>
            {props.numbering}. {props.todo.title}
          </h3>
          <button
            id="editButton"
            onClick={function () {
              props.handleEdit(props.todo.id);
            }}
          >
            Edit
          </button>
          <button id="deleteButton" onClick={() => setShowModal(true)}>
            Delete
          </button>
        </div>
        <p id="toDoDesc">{props.todo.desc}</p>
      </li>
    </>
  );
};

export default TodoItem;
