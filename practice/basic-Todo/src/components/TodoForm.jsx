import { useState, useEffect } from "react";

export const TodoForm = () => {
  const [arr, setArr] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(arr))
  }, [arr]);
  

  const handleAdd = () => {
    if (!input.trim()) return;
    setArr((prev) => [...prev, { text: input, done: false }]);
    setInput("");
  };


  const toggleCompletion = (index) => {
    const newArr = [...arr];
    newArr[index].done = !newArr[index].done;
    setArr(newArr);
  };

  const handleDelete = (indexOfTaskToDelete) => {
    setArr(arr.filter((task, index) => index !== indexOfTaskToDelete));
  }

  return (
    <>
      <h1>ToDo List</h1>

      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter The Task"
        value={input}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {arr.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.done ? "line-through" : "none" }}
          >
            {task.text}
            <button onClick={() => toggleCompletion(index)}>Done</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
