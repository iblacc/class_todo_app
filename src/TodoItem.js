import React from "react";

const TodoItem = (props) => {
  return (
    <li>
      <div className="item-title">
        <h5>
          {props.numbering}. {props.todo.title}
        </h5>
        <button
          onClick={function () {
            props.handleEdit(props.todo.id);
          }}
        >
          Edit
        </button>
        <button onClick={() => props.removeTodo(props.todo.id)}>delete</button>
      </div>
      <p>{props.todo.desc}</p>
    </li>
  );
};

export default TodoItem;
