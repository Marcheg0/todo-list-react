import React, {useState, useEffect} from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  //Use useEffect to imitation loading data
  useEffect(() => {
    setTimeout(() => {
      // imotation of loading data from server
      setTasks([
        "Learn React", "Read books", "Go to gym", "Studere Norsk"
      ]);
      setLoading(false);
    }, 2000);
  }, [setLoading]);

//function to add new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  //function to delete task
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <AddTask onAddTask={addTask} />
          <TaskList tasks={tasks} onRemoveTask={removeTask} />
        </>
      )}
    </div>
  );
}

export default App;
