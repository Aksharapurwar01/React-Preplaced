import { useState } from "react";


export default function TODO() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const addToDo = () => {
    setTodo([...todo, { text: input, completed: false }]);
    setInput("");
  };

  const deleteToDo = (index) => {
    const deleteTodo = todo.filter((_, i) => i !== index);
    setTodo(deleteTodo);
  };

  const toggleComplete = (index) => {
    const newTodos = todo.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodo(newTodos);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => addToDo()}>Add</button>
      <h2> List</h2>
      <ul>
        {todo.map((to, index) => (
          <div>
            <li key={index}>
              <span
                style={{
                  textDecoration: to.completed ? "line-through" : "none",
                }}
                onClick={() => toggleComplete(index)}
              >
                {to.text}
              </span>
            </li>

            <button onClick={() => deleteToDo(index)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
