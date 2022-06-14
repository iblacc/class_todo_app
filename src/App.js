import { useState } from "react";

function App() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [todos, setTodos] = useState([]);

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

    setTodos(function (prevTodos) {
      let newTodo = { title: title, desc: description };
      let updated = [...prevTodos, newTodo];
      return updated;
    });
  }

  return (
    <div className="container">
      <div className="form">
        <h2>Todo Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input onChange={handleChange} type="text" name="title" id="title" />
          <label htmlFor="description">Description</label>
          <textarea onChange={handleChange} name="desc" id="description" />
          <button>Add</button>

          <div>
            Title: {title}
            <br />
            Desc: {description}
          </div>
        </form>
      </div>
      <div className="list">
        <h2>List of Todos</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <h5>{todo.title}</h5>
              <p>{todo.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
