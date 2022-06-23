import React from "react";

const TodoItem = (props) => {
  return (
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
        <button
          id="deleteButton"
          onClick={() => props.removeTodo(props.todo.id)}
        >
          Delete
        </button>
      </div>
      <p id="toDoDesc">{props.todo.desc}</p>
    </li>
  );
};

export default TodoItem;
