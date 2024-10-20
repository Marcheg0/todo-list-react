import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  // Ініціалізація завдань з localStorage при першому завантаженні
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    setLoading(false);
  }, []);

  // Збереження завдань в localStorage при їх зміні
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Додавання нового завдання
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Видалення завдання
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Почати редагування завдання
  const startEditingTask = (index) => {
    setEditingIndex(index);
    setEditText(tasks[index]);
  };

  // Зберегти редаговане завдання
  const saveTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? editText : task
    );
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditText("");
  };

  return (
    <div className="App">
      <h1>Мій To-Do List</h1>
      {loading ? (
        <p>Завантаження завдань...</p>
      ) : (
        <>
          <AddTask onAddTask={addTask} />
          <TaskList
            tasks={tasks}
            onRemoveTask={removeTask}
            onEditTask={startEditingTask}
            onSaveTask={saveTask}
            editingIndex={editingIndex}
            editText={editText}
            setEditText={setEditText}
          />
        </>
      )}
    </div>
  );
}

export default App;
