import { useState } from "react";
import TodoItem from "./TodoItem";

let id = 0;
function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [display, changeDisplay] = useState(false);

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "title") {
      setTitle(value);
    } else {
      setDescription(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editMode) {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === editId) {
          return {
            id: editId,
            title: title,
            desc: description,
          };
        }

        return todo;
      });
      setTodos([...updatedTodos]);
      setEditMode(false);
      setEditId(null);
    } else {
      id++;
      setTodos((prevTodos) => {
        let newTodo = { id: id, title: title, desc: description };
        let updated = [...prevTodos, newTodo];
        return updated;
      });
    }

    setTitle("");
    setDescription("");
  }

  function handleEdit(editId) {
    setEditId(editId);
    setEditMode(true);
    const todoToEdit = todos.find((todo) => {
      return todo.id === editId;
    });

    console.log(todoToEdit);
    setTitle(todoToEdit.title);
    setDescription(todoToEdit.desc);
  }

  function removeTodo(id) {
    const newArr = todos.filter((todo) => {
      if (todo.id !== id) {
        return true;
      } else {
        return false;
      }
    });

    setTodos([...newArr]);
    // setTodos(newArr);
  }

  function displayModal() {
    changeDisplay(!display);
    if (display) {
      console.log("display is true");
    } else {
      console.log("display is false");
    }
  }

  return (
    <div className="container">
      <div className="form">
        <h2>Todo Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              onChange={handleChange}
              type="text"
              value={title}
              name="title"
              id="title"
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              onChange={handleChange}
              value={description}
              name="desc"
              id="description"
            />
          </div>

          {editMode ? <button>Update</button> : <button>Add</button>}
        </form>
      </div>
      <div className="list">
        <h2>List of Todos</h2>
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              numbering={index + 1}
              handleEdit={handleEdit}
              removeTodo={removeTodo}
              todo={todo}
            />
          ))}
        </ul>
      </div>

      {/* {todos.map((todo) =>
        displayModal ? (
          <ModalContainer
            key={todo.id}
            todo={todo}
            displayModal={displayModal}
            removeTodo={removeTodo}
          />
        ) : null
      )} */}
    </div>
  );
}

export default App;
