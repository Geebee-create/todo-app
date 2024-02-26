import React, { useState } from 'react';
import TodoList from './TodoList';

// meaning of parameter in programming.
// In programming, a parameter (or formal parameter) is a variable that is used in a function or method definition
//  to represent the input data that the function will operate on. When you call a function, you provide values for
//  its parameters, and these values are referred to as arguments.


function App() {
  // below creates an array that will hold the list of tasks for the todo list. 
  // The variable is tasks. The useState hook is used. 
  const [tasks, setTasks] = useState([]);

  // defines the function addTask which allows for tasks to be added to the list. 
  // The new task object included an ID. Completed is initially set to false.
  const addTask = (task) => {
    // (look more into how the below line works)
    setTasks([...tasks, { id: tasks.length + 1, text: task, completed: false }]);
  };

  // creates a function that toggles the completion of a task with a particular ID. 
  // The map function here creates a new arrayy of tasks where the target tasks completed status is inverted.
  // (look more into how I can use toggleTask Completion in the future)
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  // simply defines a function called deleteTask that will remove a task with a particular ID from the array of tasks.
  // the filter function can be used to create an array which excludes the task with this particular ID (the deleted one).
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // to present the code on the screen...Renders a TodoList component.This passes the tasks array, 
  // and the functions for toggling completion and deletions of tasks as props. 
  // When the Enter key is pressed (onKeyDown event), it triggers the addTask function.
  // (e) =>: This is an arrow function taking an event (e) as a parameter.
  // e.key === 'Enter': Checks if the pressed key is the Enter key.
  // the && operator is the logical AND operator. It evaluates two expressions and returns true if both expressions are true, and false otherwise. It's a concise way to check a condition and execute a statement in a single line. 
  // && addTask(e.target.value): If the Enter key is pressed, it calls the addTask function, passing the current value of the input field (e.target.value) as an argument
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