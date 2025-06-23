import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask('');
  };

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: t.completed ? 'line-through' : 'none',
                marginRight: '10px'
              }}
            >
              {t.text}
            </span>
            <button onClick={() => {
              const updated = [...tasks];
              updated[index].completed = !updated[index].completed;
              setTasks(updated);
            }}>
              {t.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => {
              const updated = tasks.filter((_, i) => i !== index);
              setTasks(updated);
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;

