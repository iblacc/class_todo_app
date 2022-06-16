import { useState } from "react";

let id = 0;
function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

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
  }

  function addTodo() {
    setTodos(function (prevTodos) {
      let newTodo = { id: ++id, title: title, desc: description };
      let updated = [...prevTodos, newTodo];
      return updated;
    });

    setTitle("");
    setDescription("");
  }

  function updateTodo() {
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

    setTitle("");
    setDescription("");
    setEditMode(false);
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

          {editMode ? (
            <button onClick={updateTodo}>Update</button>
          ) : (
            <button onClick={addTodo}>Add</button>
          )}
        </form>
      </div>
      <div className="list">
        <h2>List of Todos</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <div className="item-title">
                <h5>
                  {index + 1}. {todo.title}
                </h5>
                <button onClick={() => handleEdit(todo.id)}>Edit</button>
                <button>delete</button>
              </div>
              <p>{todo.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
