import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length + 1, text: task, completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1>Gina's Todo List</h1>
      <TodoList tasks={tasks} onToggleCompletion={toggleTaskCompletion} onDeleteTask={deleteTask} />
      <input
        type="text"
        placeholder="Add a new task"
        onKeyDown={(e) => e.key === 'Enter' && addTask(e.target.value)}
      />
    </div>
  );
}

export default App;