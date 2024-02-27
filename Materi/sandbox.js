// TaskContext.js
import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

// TaskList.js
import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

const TaskList = () => {
  const { tasks, deleteTask } = useContext(TaskContext);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;


// App.js
import React from 'react';
import TaskList from './TaskList';
import { TaskProvider } from './TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <div>
        <h1>To-Do List App</h1>
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
