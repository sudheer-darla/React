import { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const HandleInput = (e) => {
    setInput(e.target.value);
  };

  const AddTask = () => {
    if (input === "") return;
    let oldTasks = tasks;
    oldTasks.push(input);
    console.log("In Add tasks : ", input, tasks);
    setTasks(oldTasks);
    setInput("");
  };
  return (
    <>
      <div className="todo-Container">
        <h2>My Todo List</h2>
        <div className="todo-input">
          <input type="text" value={input} onChange={HandleInput} />
          <button className="todobtn" type="submit" onClick={AddTask}>
            Add Task
          </button>
        </div>
        <div className="todoList">
          <ul>
            {tasks.map((t, index) => {
              return <li key={index}>{t}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todo;
